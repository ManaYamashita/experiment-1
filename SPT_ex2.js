var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [
  repo_site +'SPT_exp2_image/kf40.png',
  repo_site +'SPT_exp2_image/kf80.png',
  repo_site +'SPT_exp2_image/kf120.png',
  repo_site +'SPT_exp2_image/kf160.png',
  repo_site +'SPT_exp2_image/Rkf40.png',
  repo_site +'SPT_exp2_image/Rkf80.png',
  repo_site +'SPT_exp2_image/Rkf120.png',
  repo_site +'SPT_exp2_image/Rkf160.png',
  repo_site +'SPT_exp2_image/fk40.png',
  repo_site +'SPT_exp2_image/fk80.png',
  repo_site +'SPT_exp2_image/fk120.png',
  repo_site +'SPT_exp2_image/fk160.png',
  repo_site +'SPT_exp2_image/Rfk40.png',
  repo_site +'SPT_exp2_image/Rfk80.png',
  repo_site +'SPT_exp2_image/Rfk120.png',
  repo_site +'SPT_exp2_image/Rfk160.png',


  repo_site +'SPT_exp2_image/gkf40.png',
  repo_site +'SPT_exp2_image/gkf80.png',
  repo_site +'SPT_exp2_image/gkf120.png',
  repo_site +'SPT_exp2_image/gkf160.png',
  repo_site +'SPT_exp2_image/gRkf40.png',
  repo_site +'SPT_exp2_image/gRkf80.png',
  repo_site +'SPT_exp2_image/gRkf120.png',
  repo_site +'SPT_exp2_image/gRkf160.png',
  repo_site +'SPT_exp2_image/gfk40.png',
  repo_site +'SPT_exp2_image/gfk80.png',
  repo_site +'SPT_exp2_image/gfk120.png',
  repo_site +'SPT_exp2_image/gfk160.png',
  repo_site +'SPT_exp2_image/gRfk40.png',
  repo_site +'SPT_exp2_image/gRfk80.png',
  repo_site +'SPT_exp2_image/gRfk120.png',
  repo_site +'SPT_exp2_image/gRfk160.png'
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
  {target: repo_site +'SPT_exp2_image/kf40.png', correct_response: 'f', kaku: 'kf40'},
  {target: repo_site +'SPT_exp2_image/kf80.png', correct_response: 'f', kaku: 'kf80'},
  {target: repo_site +'SPT_exp2_image/kf120.png', correct_response: 'f', kaku: 'kf120'},
  {target: repo_site +'SPT_exp2_image/kf160.png', correct_response: 'f', kaku: 'kf160'},
  {target: repo_site +'SPT_exp2_image/Rkf40.png', correct_response: 'f', kaku: 'Rkf40'},
  {target: repo_site +'SPT_exp2_image/Rkf80.png', correct_response: 'f', kaku: 'Rkf80'},
  {target: repo_site +'SPT_exp2_image/Rkf120.png', correct_response: 'f', kaku: 'Rkf120'},
  {target: repo_site +'SPT_exp2_image/Rkf160.png', correct_response: 'f', kaku: 'Rkf160'},

  {target: repo_site +'SPT_exp2_image/fk40.png', correct_response: 'j', kaku: 'fk40'},
  {target: repo_site +'SPT_exp2_image/fk80.png',  correct_response: 'j', kaku: 'fk80'},
  {target: repo_site +'SPT_exp2_image/fk120.png', correct_response: 'j', kaku: 'fk120'},
  {target: repo_site +'SPT_exp2_image/fk160.png', correct_response: 'j', kaku: 'fk160'},
  {target: repo_site +'SPT_exp2_image/Rfk40.png', correct_response: 'j', kaku: 'Rfk40'},
  {target: repo_site +'SPT_exp2_image/Rfk80.png',  correct_response: 'j', kaku: 'Rfk80'},
  {target: repo_site +'SPT_exp2_image/Rfk120.png', correct_response: 'j', kaku: 'Rfk120'},
  {target: repo_site +'SPT_exp2_image/Rfk160.png', correct_response: 'j', kaku: 'Rfk160'},

  {target:  repo_site +'SPT_exp2_image/gkf40.png', correct_response: 'j', kaku: 'gkf40'},
  {target:  repo_site +'SPT_exp2_image/gkf80.png', correct_response: 'j', kaku: 'gkf80'},
  {target:  repo_site +'SPT_exp2_image/gkf120.png', correct_response: 'j', kaku: 'gkf120'},
  {target:  repo_site +'SPT_exp2_image/gkf160.png', correct_response: 'j', kaku: 'gkf160'},
  {target:  repo_site +'SPT_exp2_image/gRkf40.png', correct_response: 'j', kaku: 'gRkf40'},
  {target:  repo_site +'SPT_exp2_image/gRkf80.png', correct_response: 'j', kaku: 'gRkf80'},
  {target:  repo_site +'SPT_exp2_image/gRkf120.png', correct_response: 'j', kaku: 'gRkf120'},
  {target:  repo_site +'SPT_exp2_image/gRkf160.png', correct_response: 'j', kaku: 'gRkf160'},

  {target:  repo_site +'SPT_exp2_image/gfk40.png', correct_response: 'f', kaku: 'gfk40'},
  {target:  repo_site +'SPT_exp2_image/gfk80.png',  correct_response: 'f', kaku: 'gfk80'},
  {target:  repo_site +'SPT_exp2_image/gfk120.png', correct_response: 'f', kaku: 'gfk120'},
  {target:  repo_site +'SPT_exp2_image/gfk160.png', correct_response: 'f', kaku: 'gfk160'},
  {target:  repo_site +'SPT_exp2_image/gRfk40.png', correct_response: 'f', kaku: 'gRfk40'},
  {target:  repo_site +'SPT_exp2_image/gRfk80.png',  correct_response: 'f', kaku: 'gRfk80'},
  {target:  repo_site +'SPT_exp2_image/gRfk120.png', correct_response: 'f', kaku: 'gRfk120'},
  {target:  repo_site +'SPT_exp2_image/gRfk160.png', correct_response: 'f', kaku: 'gRfk160'},

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
    type: "html-keyboard-response",
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
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