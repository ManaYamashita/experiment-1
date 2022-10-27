var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site + 'WIN_20221027_18_45_36_Pro.mp4']
};
timeline.push(preload);
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth;

var  test_stimuli = [
    { cue: repo_site +'WIN_20221027_18_45_36_Pro.mp4'}]

/*試行開始*/


var test = {
      type:"jspsych-video-keyboard-response",
       stimulus: jsPsych.timelineVariable('cue'),
       choices: 'NO_KEYS',
       trial_duration: 1000,
        };

 timeline.push(test);

/*試行終了*/