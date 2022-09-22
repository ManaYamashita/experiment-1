var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site + 'SPT_exp1_image/flower.png',
  repo_site +'SPT_exp1_image/ken.png',
  repo_site +'SPT_exp1_image/kf0.png',
  repo_site +'SPT_exp1_image/kf40.png',
  repo_site +'SPT_exp1_image/kf80.png',
  repo_site +'SPT_exp1_image/kf120.png',
  repo_site +'SPT_exp1_image/kf160.png',
  repo_site +'SPT_exp1_image/Rkf40.png',
  repo_site +'SPT_exp1_image/Rkf80.png',
  repo_site +'SPT_exp1_image/Rkf120.png',
  repo_site +'SPT_exp1_image/Rkf160.png',
  repo_site +'SPT_exp1_image/fk0.png',
  repo_site +'SPT_exp1_image/fk40.png',
  repo_site +'SPT_exp1_image/fk80.png',
  repo_site +'SPT_exp1_image/fk120.png',
  repo_site +'SPT_exp1_image/fk160.png',
  repo_site +'SPT_exp1_image/Rfk40.png',
  repo_site +'SPT_exp1_image/Rfk80.png',
  repo_site +'SPT_exp1_image/Rfk120.png',
  repo_site +'SPT_exp1_image/Rfk160.png'
          ]
};
timeline.push(preload);
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth;
 
/*実験はじめ*/
var welcome = {
  type : "html-keyboard-response",
  stimulus : "何かキーを押すと実験が始まります",
  };

  timeline.push(welcome);

    
/*教示おわり*/

var test_stimuli = [
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf0.png', correct_response: 'j', kaku: 'kf0'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf40.png', correct_response: 'j', kaku: 'kf40'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf80.png', correct_response: 'j', kaku: 'kf80'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf120.png', correct_response: 'j', kaku: 'kf120'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf160.png', correct_response: 'j', kaku: 'kf160'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf40.png', correct_response: 'j', kaku: 'Rkf40'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf80.png', correct_response: 'j', kaku: 'Rkf80'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf120.png', correct_response: 'j', kaku: 'Rkf120'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf160.png', correct_response: 'j', kaku: 'Rkf160'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk0.png',  correct_response: 'f', kaku: 'fk0'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk40.png', correct_response: 'f', kaku: 'fk40'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk80.png',  correct_response: 'f', kaku: 'fk80'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk120.png', correct_response: 'f', kaku: 'fk120'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk160.png', correct_response: 'f', kaku: 'fk160'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk40.png', correct_response: 'f', kaku: 'Rfk40'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk80.png',  correct_response: 'f', kaku: 'Rfk80'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk120.png', correct_response: 'f', kaku: 'Rfk120'},
  { cue:repo_site + 'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk160.png', correct_response: 'f', kaku: 'Rfk160'},
  
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf0.png', correct_response: 'f', kaku: 'kf0'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf40.png', correct_response: 'f', kaku: 'kf40'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf80.png', correct_response: 'f', kaku: 'kf80'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf120.png', correct_response: 'f', kaku: 'kf120'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf160.png', correct_response: 'f', kaku: 'kf160'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf40.png', correct_response: 'f', kaku: 'Rkf40'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf80.png', correct_response: 'f', kaku: 'Rkf80'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf120.png', correct_response: 'f', kaku: 'Rkf120'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf160.png', correct_response: 'f', kaku: 'kf160'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk0.png', correct_response: 'j', kaku: 'fk0'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk40.png', correct_response: 'j', kaku: 'fk40'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk80.png', correct_response: 'j', kaku: 'fk80'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk120.png', correct_response: 'j', kaku: 'fk120'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk160.png', correct_response: 'j', kaku: 'fk160'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk40.png', correct_response: 'j', kaku: 'Rfk40'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk80.png', correct_response: 'j', kaku: 'Rfk80'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk120.png', correct_response: 'j', kaku: 'Rfk120'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk160.png', correct_response: 'j', kaku: 'Rfk160'},

];

/*試行開始*/

var ready = {
  type: "html-keyboard-response",
  stimulus: "<p>Ready？</p>" 
                };

 var br = {
      type: "html-keyboard-response",
      stimulus: "<p></p>", 
      choice: 'NO_KEYS',
      trial_duration: 1000,
                    };

       /* timeline.push(br);*/

var test = {
      type:"image-keyboard-response",
       stimulus: jsPsych.timelineVariable('cue'),
       choices: 'NO_KEYS',
       trial_duration: 1000,
        };

var br = {
      type: "html-keyboard-response",
      stimulus: "<p></p>", 
      choice: 'NO_KEYS',
      trial_duration: 1000,
      };

 /*timeline.push(br);*/

 var test1 = {
  type:"image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: ['f', 'j'],
  stimulus_width: document.documentElement.clientWidth*0.6,
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },
  
  on_finish: function(data){
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response); 
    data.kaku = jsPsych.timelineVariable('kaku');
  }
};
        


  var purosdure={
    timeline:[ready, br, test, br, test1],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 3,
}

timeline.push(purosdure);

/*試行終了*/