var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site + 'WIN_20221027_18_45_36_Pro.gif']
};
timeline.push(preload);
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth;

var  test_stimuli = [
    { cue: repo_site +'WIN_20221027_18_45_36_Pro.gif'}]

/*試行開始*/


var ready = {
    type: "html-keyboard-response",
    stimulus: "<p>Ready？</p>" 
                  };

var test = {
      type:"video-keyboard-response",
       stimulus:repo_site +'WIN_20221027_18_45_36_Pro.gif',
       choices: 'f'};

 timeline.push(test);

/*試行終了*/