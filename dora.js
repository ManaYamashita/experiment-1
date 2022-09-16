var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site + 'dora_image/0.png',
           repo_site +'dora_image/30.png',
           repo_site +'dora_image/45.png',
           repo_site +'dora_image/75.png',
           repo_site +'dora_image/90.png',
           repo_site +'dora_image/R30.png',
           repo_site +'dora_image/R45.png',
           repo_site +'dora_image/R75.png'           
          ]
}
timeline.push(preload);
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth;
 
/*実験はじめ*/


var welcome = {

  type: 'fullscreen',
      message: '<p>ウィンドウサイズを最大化します。「次に進む」を押すと実験が始まります。</p>',
      button_label: '次に進む',
      fullscreen_mode: true, // 全画面表示にする
    };
  
        timeline.push(welcome);

 /*教示はじめ*/
var instructions = {
      type: 'html-button-response',
      stimulus: "<p>1枚目に表示される画像と2枚目に表示される画像が同じだったら「同じ」ボタン。違ったら「違う」ボタン。</p>"+
      "<p> ”かわいい” ドラえもんがたくさん出てきます ♡ </p>"+
      "<p>全部で4試行です</p>",
      choices: ['始める'],
                 };

        timeline.push(instructions);
    
/*教示おわり*/

var test_stimuli = [
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/0.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/R45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/0.png', target:  repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/0.png',  correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/30.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/45.png',  correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/R45.png',  correct_response: 'f'},
  { cue: repo_site +'dora_image/30.png', target:  repo_site +'dora_image/R75.png', correct_response: 'f'},
  
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/75.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target: repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target:  repo_site +'dora_image/R45.png',  correct_response: 'f'},
  { cue: repo_site +'dora_image/45.png', target:  repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/75.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/R45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/75.png', target: repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/90.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/R45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/90.png', target: repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/R30.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/R45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R30.png', target: repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/R45.png', correct_response: 'j'},
  { cue: repo_site +'dora_image/R45.png', target: repo_site +'dora_image/R75.png', correct_response: 'f'},

  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/0.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/75.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/90.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/R30.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/R45.png', correct_response: 'f'},
  { cue: repo_site +'dora_image/R75.png', target: repo_site +'dora_image/R75.png', correct_response: 'j'}
  
];

var test_rand = jsPsych.randomization.sampleWithReplacement(test_stimuli, 4);
    

/*試行開始*/

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
  type: 'image-button-response',
  stimulus: jsPsych.timelineVariable('target'),
  choices: ['同じ','違う'],
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

     if (resp == "1" & cresp=="f"){
const choi = "♡ ドラえもん　かわいい ♡";
     return choi;} 

     else if (resp == "0" & cresp=="j"){
const choi = "♡ ドラえもん スキ♡";
     return choi;} 
      
     else{
const choi = "Not ドラえもん ( ﾉД`)";
     return choi;}

    }    
  };


  var purosdure={
    timeline:[br, test, br, test1, debrief_block],
    timeline_variables: test_rand,
    randomize_order: true,
    repetitions: 1,
}


timeline.push(purosdure);

var fin = {
  type: 'image-button-response',
  stimulus: 'dora_image/0.png',
  choices: ['終わる'],
  
    }

    timeline.push(fin);