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
           repo_site +'SPT_exp1_image/Rkff80.png',
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
}
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth*0.8;
 
/*実験はじめ*/


var welcome = {
        type : "html-keyboard-response",
        stimulus : "何かキーを押すと実験が始まります",
        };
 
        timeline.push(welcome);

 /*教示はじめ*/
var instructions = {
      type: "html-keyboard-response",
      stimulus: "<p>教示</p>" 
                 };

        timeline.push(instructions);
    
/*教示おわり*/

var test_stimuli = [
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf0.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf40.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf80.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf120.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/kf160.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf40.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf80.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf120.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rkf160.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk0.png',  correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk40.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk80.png',  correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk120.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/fk160.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk40.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk80.png',  correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk120.png', correct_response: 'f'},
  { cue:repo_site + 'SPT_exp1_image/flower.png', target:  repo_site +'SPT_exp1_image/Rfk160.png', correct_response: 'f'},
  
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf0.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf40.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf80.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf120.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/kf160.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf40.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf80.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf120.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rkf160.png', correct_response: 'f'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk0.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk40.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk80.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk120.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/fk160.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk40.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk80.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk120.png', correct_response: 'j'},
  { cue: repo_site +'SPT_exp1_image/ken.png', target: repo_site +'SPT_exp1_image/Rfk160.png', correct_response: 'j'},

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
        };

var br = {
      type: "html-keyboard-response",
      stimulus: "<p></p>", 
      choice: 'NO_KEYS',
      trial_duration: 1000,
      };

 /*timeline.push(br);*/

 var test = {
  type:"image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: ['f', 'j'],
  item_width: jsPsych.timelineVariable('swid'),
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },
  on_finish: function(data){
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
  }
};
         

/*記録*/         
         on_finish: (data) => {
Qualtrics.SurveyEngine.setEmbeddeedData("datajs", datajs);    

data.flowerken = jsPsych.timelineVariable('cue');

data.target = jsPsych.timelineVariable('target');
};


  var purosdure={
    timeline:[ready, br, test, br, test1],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 5,
}

timeline.push(purosdure);

/*試行終了*/