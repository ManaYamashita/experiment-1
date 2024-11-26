library(jsonlite)
library(tidyverse)
library(formattable)

cri <- 3
chit <- 0.9
minrt <- 300
maxrt <- 2500

cndname <- c('chair', 'human')

# 元データの読み込み
fl <- file.choose("*.csv")
dat <- read.csv(fl, header = T)

# 必要な列の抜き出し
js_dat <- dat %>%
  dplyr::select(datajs)

# 評価データの抽出
evlshuman <- select(dat, starts_with('Q16'))
evlschair <- select(dat, starts_with('Q27'))
evls <- cbind(evlshuman,evlschair)

# データを入れるためのデータフレーム
js_data <- tibble()

# 評価データを入れるためのデータフレーム
eval_frm <- data.frame()

# 被験者ごとにデータ変換
for (i in 3:nrow(js_dat)) {
  if (js_dat[i, ] != '') {
    # 評価データを行列に代入
    for (j in 1:21) {
      eval_frm <-
        rbind(eval_frm, c(i - 2, cndname[as.integer(evls[i, j] > evls[i, j + 21]) +
                                           1], j, max(evls[i, j], evls[i, j + 21])))
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
     }
}

# 評価データに列名をつける
colnames(eval_frm) <- c('id', 'cnd', 'Q', 'eval')

#外れ値等を抜く
mrt <- mean(js_data$rt)
sdrt <- sd(js_data$rt)


for (i in 1:nrow(js_data)){
  #mean+3SD
  if(js_data$rt[i]>mrt+sdrt*cri){
    js_data$rt[i]<-NA
  }
  #mean-3SD
  else if(js_data$rt[i]<mrt-sdrt*cri){
    js_data$rt[i]<-NA
  }
  #MAX
  else if(js_data$rt[i]>maxrt){
    js_data$rt[i]<-NA
  }
  #MIN
  else if(js_data$rt[i]<minrt){
    js_data$rt[i]<-NA
  }
  #FALSE
  else if(js_data$correct[i]==FALSE){
    js_data$rt[i]<-NA
  }
  else
    js_data$rt[i]<-js_data$rt[i]
}

# 左右条件と角度条件の列を作る
js_data$ang <- NA
js_data$bunseki_ang <- NA
js_data$cnd <- NA
js_data$cnd[str_detect(js_data$stimulus, 'chair')] <- 'chair'
js_data$cnd[str_detect(js_data$stimulus, 'human')] <- 'human'
js_data$ang[str_detect(js_data$stimu, '45')] <- 45
js_data$ang[str_detect(js_data$stimu, '90')] <- 90
js_data$ang[str_detect(js_data$stimu, '135')] <- 135
js_data$ang[str_detect(js_data$stimu, '225')] <- 225
js_data$ang[str_detect(js_data$stimu, '270')] <- 270
js_data$ang[str_detect(js_data$stimu, '315')] <- 315

js_data$bunseki_ang [str_detect(js_data$stimu, '45')] <- 45
js_data$bunseki_ang [str_detect(js_data$stimu, '90')] <- 90
js_data$bunseki_ang [str_detect(js_data$stimu, '135')] <- 135
js_data$bunseki_ang [str_detect(js_data$stimu, '225')] <- 360-225
js_data$bunseki_ang [str_detect(js_data$stimu, '270')] <- 360-270
js_data$bunseki_ang [str_detect(js_data$stimu, '315')] <- 360-315


#90パーセント以下の参加者のRTにNAを入れる
for (i in unique(js_data$code)){
  hit <- sum(js_data[js_data$code == i, ]$correct) / 72
  if (hit < chit) {
    js_data[js_data$code == i, ]$rt  <- NA
  }}

#フィラー項目の処理
for (i in unique(eval_frm$id)){
  if (eval_frm[eval_frm$id == i&eval_frm$Q == 21, ]$eval != 6){
    eval_frm[eval_frm$id == i, ]$eval<- NA
  }}
#フィラー項目の列を消去する
eval_frm$eval[eval_frm$Q == "21"] <- NA

#評価データを参加者ごとに平均する
eval <- data.frame()

eval_frm$eval <- as.numeric(eval_frm$eval)

for (i in unique(eval_frm$id)){
  
  eval <- rbind(eval, c(
    mean(eval_frm[eval_frm$id == i&eval_frm$Q == 8, ]$eval,eval_frm[eval_frm$id == 1&eval_frm$Q == 9, ]$eval
        ,eval_frm[eval_frm$id == 1&eval_frm$Q == 11, ]$eval,eval_frm[eval_frm$id == 1&eval_frm$Q == 15, ]$eval),
        eval_frm[eval_frm$id == i&eval_frm$Q == 1,]$cnd)
  )}

colnames(eval) <- c('eval','cnd')

#評価データのグラフを書く
eval$cnd <- as.factor(eval$cnd)
eval$eval <- as.numeric(eval$eval)

g <- ggplot(eval, aes(x=cnd,y=eval))
g <- g + geom_boxplot()
plot(g)

bo <- ggplot(eval)
bo <- bo + geom_bar(aes(x=cnd,y=eval), stat = "summary",
                   fun = "mean")
plot(bo)


#t検定
ttest <- t.test(eval$eval~eval$cnd)
t <- ttest$statistic
df <- ttest$parameter
t.effect <- sqrt(t^2/(t^2+df))

ttest
t.effect

chair_data <- eval[eval$cnd=="chair",]
mean(chair_data$eval,na.rm=TRUE)
sd(chair_data$eval,na.rm=TRUE)

human_data <- eval[eval$cnd=="human",]
mean(human_data$eval,na.rm=TRUE)
sd(human_data$eval,na.rm=TRUE)

#anova君の処理
ac <- data.frame()
anovahuman <- data.frame()
anovachair <- data.frame()

for (i in unique(js_data$code)){
  
  anovachair <- rbind(anovachair, c( "chair",
    mean(js_data[js_data$code == i & js_data$ang == 45 & js_data$cnd == "chair",]$rt, 
         js_data[js_data$code == i & js_data$ang == 315& js_data$cnd == "chair",]$rt,na.rm = TRUE, trim = 0),
    mean(js_data[js_data$code == i & js_data$ang == 90 & js_data$cnd == "chair",]$rt, 
         js_data[js_data$code == i & js_data$ang == 270& js_data$cnd == "chair",]$rt,na.rm = TRUE, trim = 0),
    mean(js_data[js_data$code == i & js_data$ang == 135 & js_data$cnd == "chair",]$rt, 
         js_data[js_data$code == i & js_data$ang == 225& js_data$cnd == "chair",]$rt,na.rm = TRUE, trim = 0)
  ))

anovahuman <- rbind(anovahuman, c("human",
mean(js_data[js_data$code == i & js_data$ang == 45 & js_data$cnd == "human",]$rt, 
     js_data[js_data$code == i & js_data$ang == 315& js_data$cnd == "human",]$rt,na.rm = TRUE, trim = 0),
mean(js_data[js_data$code == i & js_data$ang == 90 & js_data$cnd == "human",]$rt, 
     js_data[js_data$code == i & js_data$ang == 270& js_data$cnd == "human",]$rt,na.rm = TRUE, trim = 0),
mean(js_data[js_data$code == i & js_data$ang == 135 & js_data$cnd == "human",]$rt, 
     js_data[js_data$code == i & js_data$ang == 225& js_data$cnd == "human",]$rt,na.rm = TRUE, trim = 0)
  ))
}

colnames(anovahuman) <- c('cnd','45','90','135')
colnames(anovachair) <- c('cnd','45','90','135')

anovadata <- rbind(anovahuman,anovachair)

#分散分析
source('anovakun_489.txt')
anovakun(anovadata,'AsB',2,3,peta = T)

#分散分析のグラフ作り
box <- data.frame(cbind(js_data$code, js_data$cnd,js_data$bunseki_ang,js_data$rt))
colnames(box) <- c('id','cnd','ang','rt')

box$ang<- as.character(box$ang)
box$cnd<- as.character(box$cnd)
box$rt<- as.numeric(box$rt)

                                   
g <- ggplot(box, aes(x=ang,y=rt, fill=cnd))
g <- g + scale_x_discrete(limits = c("45", "90", "135"))
g <- g + geom_boxplot()
plot(g)
