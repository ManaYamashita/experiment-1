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
js_data$tbidx <- -cos(js_data$ang * pi / 180) * js_data$rt

lr_c <- data.frame()
tb_c <- data.frame()
lr_h <- data.frame()
tb_h <- data.frame()
# 被験者ごと、左右ごとにindexの平均を計算してデータフレームに代入
for (i in unique(js_data$code)){
  hit <- sum(js_data[js_data$code == i, ]$correct) / 64
  if (hit >= chit) {
    
    if (js_data[js_data$code == i, ]$cnd[1] == 'chair') {
      lr_c <-
        rbind(lr_c, c(
          mean(js_data$lridx[js_data$lr == 'right' &
                               js_data$code == i], na.rm = TRUE),
          mean(js_data$lridx[js_data$lr == 'left' &
                               js_data$code == i], na.rm = TRUE)
        ))
      tb_c <-
        rbind(tb_c, c(
          mean(js_data$tbidx[js_data$lr == 'right' &
                               js_data$code == i], na.rm = TRUE),
          mean(js_data$tbidx[js_data$lr == 'left' &
                               js_data$code == i], na.rm = TRUE)
        ))
    }
    else{
      lr_h <-
        rbind(lr_h, c(
          mean(js_data$lridx[js_data$lr == 'right' &
                               js_data$code == i], na.rm = TRUE),
          mean(js_data$lridx[js_data$lr == 'left' &
                               js_data$code == i], na.rm = TRUE)
        ))
      tb_h <-
        rbind(tb_h, c(
          mean(js_data$tbidx[js_data$lr == 'right' &
                               js_data$code == i], na.rm = TRUE),
          mean(js_data$tbidx[js_data$lr == 'left' &
                               js_data$code == i], na.rm = TRUE)
        ))
    }
  }
}

# データフレームの列の名前を変更
colnames(lr_c) <- c('right', 'left')
colnames(tb_c) <- c('right', 'left')
colnames(lr_h) <- c('right', 'left')
colnames(tb_h) <- c('right', 'left')

# まとめの表を出力
print(lr_c)
print(tb_c)
print(lr_h)
print(tb_h)

# 評価データ表示
print(eval_frm)

# 箱ひげ図を出力
par(mfrow = c(1, 2))
boxplot(lr_c,ylim=c(-70, 120))
boxplot(lr_h,ylim=c(-70, 120))
par(mfrow = c(1, 2))
boxplot(tb_c)
boxplot(tb_h)

# せっかくなのでviolin plotも
library(ggplot2)
library(tidyr)
glr <-
  ggplot(js_data, aes(
    x = interaction(lr, cnd),
    y = lridx,
    color = code
  )) + geom_violin() + geom_point()
gtb <-
  ggplot(js_data, aes(
    x = interaction(lr, cnd),
    y = tbidx,
    color = code
  )) + geom_violin() + geom_point()
plot(glr)
plot(gtb)

#角度ごとの反応時間の図を表示

#grt<-ggplot(js_data, aes(x=as.factor(360-ang), y=rt))+geom_boxplot()
grt<-ggplot(js_data, aes(x=as.factor(360-ang), y=rt))+geom_violin()
grt<-grt+stat_summary(fun=mean, geom="point")
plot(grt)

#分散分析

source('anovakun_489.txt')

data_chair<-cbind('chair',lr_c)
data_human<-cbind('human',lr_h)

colnames(data_chair)<-c('condition','right','left')
colnames(data_human)<-c('condition','right','left')
anovadata<-rbind(data_chair, data_human)

anovakun(anovadata,'AsB',2,2,peta = T)


#t検定
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



tdata <- data.frame(t(rbind(rowMeans(res),condition)))
tdata$X2 <- as.factor(tdata$X2)
tdata$X1 <- as.numeric(tdata$X1)

g <- ggplot(tdata, aes(x=X2,y=X1))
g <- g + geom_boxplot()
plot(g)

ttest <- t.test(tdata$X1~tdata$X2)
t <- ttest$statistic
df <- ttest$parameter
t.effect <- sqrt(t^2/(t^2+df))

ttest
t.effect

chair_data = tdata[tdata$X2=="chair",]
mean(chair_data$X1)
sd(chair_data$X1)

human_data = tdata[tdata$X2=="human",]
mean(human_data$X1)
sd(human_data$X1)


#[2分散]Left条件の135-225と、Right条件の225-135の差
#[2分散]参加者ごとのLeft条件の135-225
bunsan2 <- data.frame()

for (i in unique(js_data$code)){
  
  bunsan2 <- rbind(bunsan2, c(
    mean ((js_data$rt[js_data$lr == 'left' &
                        js_data$ang == '135' &
                        js_data$code == i ])-
            (js_data$rt[js_data$lr == 'left' &
                          js_data$ang == '225' &
                          js_data$code == i ]),na.rm=TRUE),
    mean ((js_data$rt[js_data$lr == 'right' &
                        js_data$ang == '225' &
                        js_data$code == i ])-
            (js_data$rt[js_data$lr == 'right' &
                          js_data$ang == '135' &
                          js_data$code == i ]),na.rm=TRUE)
    
  ))}

#[2分散]データフレームの列の名前を変更
colnames(bunsan2) <- c('L135-225','R225-135')

#[2分散]まとめの表を出力
print(bunsan2)

#[2分散]グラフ
boxplot(bunsan2)

#L135,L225,R135,R225の表を作る
bunsan <- cbind(js_data$rt[js_data$ang == "135" & js_data$lr == "left"], 
                js_data$rt[js_data$ang == "225" & js_data$lr == "left"],
                js_data$rt[js_data$ang == "135" & js_data$lr == "right"],
                js_data$rt[js_data$ang == "225" & js_data$lr == "right"]
)

colnames(bunsan) <- c('L135', 'L225', 'R135', 'R225')

#[2分散]グラフ
boxplot(bunsan)

#[2分散]分散分析
source('anovakun_489.txt')
anovakun(bunsan,'sAB',2,2,peta = T)

boxplot(data=js_data, rt~ang)
#right条件での角度と反応時間のグラフ
lr_right <- js_data[js_data$lr=='right',]
boxplot(data=lr_right, rt~ang)
#left条件での角度と反応時間のグラフ
lr_left <- js_data[js_data$lr=='left',]
boxplot(data=lr_left, rt~ang)
