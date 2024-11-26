library(jsonlite)
library(tidyverse)
library(formattable)

cri <- 3
chit <- 0.9
minrt <- 300
maxrt <- 2500

cndname <- c('chair', 'human')

# 元データの読み込み
options(encoding='UTF-8')
fl <- file.choose("*.csv")
dat <- read.csv(fl, header = T)

# 必要な列の抜き出し
js_dat <- dat %>%
  dplyr::select(datajs)

# 評価データの抽出
evls <- select(dat, starts_with('Q16'))

# データを入れるためのデータフレーム
js_data <- tibble()

# 評価データを入れるためのデータフレーム
eval_frm <- data.frame()

# 被験者ごとにデータ変換
for (i in 3:nrow(js_dat)) {
  if (js_dat[i, ] != '') {
    # 評価データを行列に代入
    for (j in 1:15) {
      eval_frm <-
        rbind(eval_frm, c(i - 2, cndname[as.integer(evls[i, j] > evls[i, j + 15]) +
                                           1], j, max(evls[i, j], evls[i, j + 15])))
    }
    #Qualtricsから出力されたもののうちjsPsychのデータを抽出
    tidy_df01 <- js_dat[i, 1]
    #txtとして書き出し
    write.table(
      tidy_df01,
      "output.txt",
      quote = F,
      col.names = F,
      row.names = F,
      append = F
    )
    #jsonとして読み込み整理
    tidy_df02 <- fromJSON("output.txt") %>%
      as_tibble() %>%
      #被験者番号を追加
      mutate(code = i - 2)
    #他の参加者と結合する
    if (i == 5) {
      js_data <- tidy_df02
    } else{
      js_data <- union(js_data, tidy_df02)
    }
    mrt <- mean(js_data[js_data$code == i - 2, ]$rt)
    sdrt <- sd(js_data[js_data$code == i - 2, ]$rt)
    js_data[js_data$code==i-2,]$rt[js_data[js_data$code==i-2,]$rt>maxrt]<-NA
    js_data[js_data$code == i - 2, ]$rt[js_data[js_data$code == i - 2, ]$rt <
                                          minrt] <- NA
    js_data[js_data$code == i - 2, ]$rt[js_data[js_data$code == i - 2, ]$rt >
                                          mrt + sdrt * cri] <- NA
    js_data[js_data$code == i - 2, ]$rt[js_data[js_data$code == i - 2, ]$rt <
                                          mrt - sdrt * cri] <- NA
    js_data[js_data$code == i - 2, ]$rt[js_data[js_data$code == i - 2, ]$correct ==
                                          FALSE] <- NA
  }
}

# 評価データに列名をつける
colnames(eval_frm) <- c('id', 'cnd', 'Q', 'eval')

# 左右条件と角度条件の列を作る
js_data$lr <- NA
js_data$ang <- NA
js_data$cnd <- NA
js_data$lr[str_detect(js_data$stimu, 'left')] <- 'left'
js_data$lr[str_detect(js_data$stimu, 'right')] <- 'right'
js_data$cnd[str_detect(js_data$stimu, 'chair')] <- 'chair'
js_data$cnd[str_detect(js_data$stimu, 'human')] <- 'human'
js_data$ang[str_detect(js_data$stimu, '0')] <- 0
js_data$ang[str_detect(js_data$stimu, '45')] <- 360 - 45
js_data$ang[str_detect(js_data$stimu, '90')] <- 360 - 90
js_data$ang[str_detect(js_data$stimu, '135')] <- 360 - 135
js_data$ang[str_detect(js_data$stimu, '180')] <- 360 - 180
js_data$ang[str_detect(js_data$stimu, '225')] <- 360 - 225
js_data$ang[str_detect(js_data$stimu, '270')] <- 360 - 270
js_data$ang[str_detect(js_data$stimu, '315')] <- 360 - 315

# lr indexとtoward indexを計算
js_data$lridx <- sin(js_data$ang * pi / 180) * js_data$rt


#評価データ
sublist <- unique(eval_frm$id)
qlist <- c(8,9,11,15)
res <- matrix(nrow=length(sublist), ncol=4)
condition <- matrix(ncol=length(sublist))

for (i in 1:length(sublist)) {
  condition[i] <- eval_frm[eval_frm$id==sublist[i],]$cnd[1]
  for (j in 1:length(qlist)){
    ia <- sublist[i]
    ja <- qlist[j]
    res[i,j] <- as.numeric(eval_frm[which(eval_frm$id==ia & eval_frm$Q==ja),]$eval)
    res[,2] <- 8-res[,2]
  }
}

colnames(res) <- c("8","9","11","15")
me <- rowSums(res)
me <- t(me)

nsub <- 100
a <- me
nt <- 64
b <- matrix(1,ncol=1,nrow=nsub*nt)
for(i in 1:nsub){
  b[seq((i-1)*nt+1,i*nt),1] <- a[i]
}

#表を整理する
js_data2 <- cbind(js_data$lridx , js_data$cnd, b, js_data$ang, js_data$lr, js_data$code, js_data$correct)
js_data2<-as.data.frame(js_data2)
colnames(js_data2) <- c('lridx', 'condition', 'eval','ang','lr', 'id','correct')
js_data2$correct<-as.logical(js_data2$correct)

#hitを処理する
for (i in unique(js_data2$id)){
  hit <- sum(js_data2[js_data2$id == i, ]$correct) / 64
  if (hit < chit) { (js_data2[js_data2$id == i, ]$correct <- 100)
  }
}

#write.csv (js_data, "hist.csv")

#g <- ggplot(js_data, aes(x=js_data$ang, y=js_data$rt))
#g <- g + geom_histogram()
#plot(g)

#NAの列の削除
js_data2 <- na.omit(js_data2)


# 分析の準備 -------------------------------------------------------------------

# パッケージの読み込み
library(rstan)
library(bayesplot)
library(brms)

# 計算の高速化
rstan_options(auto_write = TRUE)
options(mc.cores = parallel::detectCores())


# データの読み込み -------------------------------------------------------------

# 分析対象のデータ
js_data3 <- js_data2[js_data2$correct != 100,]
js_data3 <- js_data3[ complete.cases (js_data3),]
js_data3$lridx <- as.numeric(js_data3$lridx)
js_data3$eval <- as.numeric(js_data3$eval)
js_data3$ang <- as.numeric(js_data3$ang)
fish_num_climate_2 <- js_data3

hist(js_data3$lridx)


# id列を数値ではなくfactorとして扱う
fish_num_climate_2$id <- as.factor(fish_num_climate_2$id)
head(fish_num_climate_2, n = 3)


# 通常のポアソン回帰モデルの当てはめ -------------------------------------------------------

# ポアソン回帰モデルを作る
glm_pois_brms <- brm(
  formula = lridx ~ eval + lr + eval:lr ,  # modelの構造を指定
  family = gaussian(),                          # ポアソン分布を使う
  data = fish_num_climate_2,                   # データ
  seed = 1,                                    # 乱数の種
  prior = c(set_prior("", class = "Intercept"))# 無情報事前分布にする
)

glm_pois_brms

# 当てはめ値と99%予測区間の計算
set.seed(1)
eff_glm_pre <- marginal_effects(
  glm_pois_brms, 
  method = "predict",
  effects = "eval:lr",
  probs = c(0.005, 0.995))

# 結果の図示
plot(eff_glm_pre, points = T)


# brmsによるGLMMの推定 -------------------------------------------------------------

# brmsによるGLMMの推定
glmm_pois_brms <- brm(
  formula = lridx ~ eval + lr + eval:lr + (1|id), # ランダム効果
  family = gaussian(),                            # ポアソン分布を使う
  data = fish_num_climate_2,                     # データ
  seed = 1,                                      # 乱数の種
  prior = c(set_prior("", class = "Intercept"),
            set_prior("", class = "sd"))         # 無情報事前分布にする
)

# 結果の表示
glmm_pois_brms

# 参考：トレースプロットなど
plot(glmm_pois_brms)

# 参考：stancode
stancode(glmm_pois_brms)

mcmc_intervals(
  glmm_pois_brms,
  pars=c("b_eval","b_lrright","b_eval:lrright"),
  prob=0.8,
  prob_outer=0.95
)

