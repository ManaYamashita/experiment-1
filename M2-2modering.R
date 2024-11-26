library(jsonlite)
library(tidyverse)
library(formattable)

cri <- 3
chit <- 0.9
minrt <- 300
maxrt <- 2500

# 元データの読み込み
fl <- file.choose("*.csv")
dat <- read.csv(fl, header = T)

# 必要な列の抜き出し
js_dat <- dat %>%
  dplyr::select(datajs)

# 評価データの抽出
evls <- select(dat, starts_with('Q29'))

# データを入れるためのデータフレーム
js_data <- tibble()

# 評価データを入れるためのデータフレーム
eval_frm <- data.frame()

# 被験者ごとにデータ変換
for (i in 3:nrow(js_dat)) {
  if (js_dat[i, ] != '') {
    # 評価データを行列に代入
    for (j in 1:28) {
      eval_frm <-
        rbind(eval_frm, c(i - 2, j, max(evls[i, j], evls[i, j + 28])))
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
    if (i == 3) {
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
colnames(eval_frm) <- c('id', 'Q', 'eval')

#逆転項目の処理　　　　　　　　　　　　　　　　！！！！！！！！！！！！！！！！ここ変える！！！！！！！！！！！！！！！！
eval_frm$eval[eval_frm$Q == "3"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 3])
eval_frm$eval[eval_frm$Q == "4"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 4])
eval_frm$eval[eval_frm$Q == "7"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 7])
eval_frm$eval[eval_frm$Q == "12"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 12])    
eval_frm$eval[eval_frm$Q == "13"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 13])
eval_frm$eval[eval_frm$Q == "14"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 14])
eval_frm$eval[eval_frm$Q == "15"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 15])
eval_frm$eval[eval_frm$Q == "18"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 18])
eval_frm$eval[eval_frm$Q == "19"] <- 6 - as.numeric(eval_frm$eval[eval_frm$Q == 19])

#フィラー項目の処理  　　　　　　　　　　　　　！！！！！！！！！！！！！！！！ここ変える！！！！！！！！！！！！！！！！
for (i in unique(eval_frm$id)){
  if (eval_frm[eval_frm$id == i&eval_frm$Q == 20, ]$eval != 5){
    eval_frm[eval_frm$id == i, ]$eval<- NA
  }}

#フィラー項目の列を除外する                   ！！！！！！！！！！！！！！！！ここ変える！！！！！！！！！！！！！！！！
eval_frm$eval[eval_frm$Q == "20"] <- NA

#評価データを参加者ごとに平均する

eval <- data.frame()

eval_frm$eval <- as.numeric(eval_frm$eval)

for (i in unique(eval_frm$id)){
  
  eval <- rbind(eval, c(
    mean(eval_frm$eval[eval_frm$id == i], na.rm = TRUE)
  ))}

#評価データを参加者ごとに平均に名前を付ける
colnames(eval) <- c('eval')

# 左右条件と角度条件の列を作る
js_data$lr <- NA
js_data$ang <- NA
js_data$lr[str_detect(js_data$stimu, 'left')] <- 'left'
js_data$lr[str_detect(js_data$stimu, 'right')] <- 'right'
js_data$ang[str_detect(js_data$stimu, '0')] <- 0
js_data$ang[str_detect(js_data$stimu, '45')] <- 45
js_data$ang[str_detect(js_data$stimu, '90')] <- 90
js_data$ang[str_detect(js_data$stimu, '135')] <- 135
js_data$ang[str_detect(js_data$stimu, '180')] <- 180
js_data$ang[str_detect(js_data$stimu, '225')] <- 225
js_data$ang[str_detect(js_data$stimu, '270')] <- 270
js_data$ang[str_detect(js_data$stimu, '315')] <- 315

#90パーセント以下の参加者のRTにNAを入れる
for (i in unique(js_data$code)){
  hit <- sum(js_data[js_data$code == i, ]$correct) / 64
  if (hit < chit) {
    js_data[js_data$code == i, ]$rt  <- NA
    
    
  }}

eval <- data.frame(cbind(unique(js_data$code),eval$eval))
colnames(eval) <- c('id', 'eval')

#rt,lr,ang,IRI,idのグラフを作る
  # 評価データを64回繰り返す
b <- data.frame()
for(i in unique(js_data$code)){
  for (j in 1:64){
   b <- rbind(b,c(eval[eval$id == i,]$eval, na.rm = TRUE))
  }
}
colnames(b) <- c('IRI')
 #並べる
mode <- data.frame()

mode <- data.frame(cbind(js_data$rt,js_data$lr,js_data$ang,b$IRI,js_data$code)) 

colnames(mode) <- c('rt', 'lr', 'ang', 'IRI' ,'id')



#g <- ggplot(js_data, aes(x=js_data$ang, y=js_data$rt))
#g <- g + geom_histogram()
#plot(g)




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
mode$rt <- as.numeric(mode$rt)
mode <- na.omit(mode)
fish_num_climate_2 <- mode

hist(mode$rt)


# id列を数値ではなくfactorとして扱う
fish_num_climate_2$id <- as.factor(fish_num_climate_2$id)
head(fish_num_climate_2, n = 3)

# id列以外をニューめにっくにする
fish_num_climate_2$rt <- as.numeric(fish_num_climate_2$rt)
fish_num_climate_2$ang <- as.numeric(fish_num_climate_2$ang)
fish_num_climate_2$id <- as.numeric(fish_num_climate_2$id)
fish_num_climate_2$IRI <- as.numeric(fish_num_climate_2$IRI)

# 通常のポアソン回帰モデルの当てはめ -------------------------------------------------------

# ポアソン回帰モデルを作る
glm_pois_brms <- brm(
  formula = rt ~ lr * ang * IRI,  # modelの構造を指定
  family = exgaussian(),                          # ポアソン分布を使う
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
  effects = "lr:ang",
  probs = c(0.005, 0.995))

# 結果の図示
plot(eff_glm_pre, points = T)


# brmsによるGLMMの推定 -------------------------------------------------------------

# brmsによるGLMMの推定
glmm_pois_brms <- brm(
  formula = rt ~ lr * ang * IRI + (1|id), # ランダム効果
  family = exgaussian(),                            # ポアソン分布を使う
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

