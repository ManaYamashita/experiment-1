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
}
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

var test_rand = jsPsych.randomization.sampleWithReplacement(test_stimuli, 4);


    

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
    }
    
 
   var debrief_block = {
    type: "html-keyboard-response",
    trial_duration: 1000,
  
    stimulus: function(data) {
      var resp = jsPsych.data.getLastTrialData().filter({task: 'response'}).select('response').values;
      var cresp = jsPsych.data.getLastTrialData().filter({task: 'response'}).select('correct_response').values;

      console.log(resp);
      console.log(cresp);

     if (resp == "f" & cresp=="f"){
const choi = "正解";
     return choi;} 

     else if (resp == "j" & cresp=="j"){
const choi = "正解";
     return choi;} 
      
     else{
const choi = "不正解";
     return choi;}

    }    
  };


  var purosdure={
    timeline:[ready, br, test, br, test1, debrief_block],
    timeline_variables: test_rand,
    randomize_order: true,
    repetitions: 1,
}


timeline.push(purosdure);

/*試行終了*/