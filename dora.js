var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site +'dora_image/A.png',
           repo_site +'dora_image/B.png',
           repo_site +'dora_image/C.png',
           repo_site +'dora_image/D.png',
           repo_site +'dora_image/E.png',
           repo_site +'dora_image/F.png',       
          ]
}
timeline.push(preload);
/*画像読み込み終わり*/
var swid = document.documentElement.clientWidth;
 
    
/*教示おわり*/

var test_stimuli = [
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/A.png', correct_response: '0'},
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/B.png', correct_response: '1'},
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/C.png', correct_response: '1'},
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/D.png', correct_response: '1'},
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/E.png', correct_response: '1'},
  { cue: repo_site +'dora_image/A.png', target:  repo_site +'dora_image/F.png', correct_response: '1'},

  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/A.png',  correct_response: '1'},
  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/B.png', correct_response: '0'},
  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/C.png',  correct_response: '1'},
  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/D.png', correct_response: '1'},
  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/E.png', correct_response: '1'},
  { cue: repo_site +'dora_image/B.png', target:  repo_site +'dora_image/F.png', correct_response: '1'},
  
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/A.png', correct_response: '1'},
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/B.png', correct_response: '1'},
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/C.png', correct_response: '0'},
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/D.png', correct_response: '1'},
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/E.png', correct_response: '1'},
  { cue: repo_site +'dora_image/C.png', target: repo_site +'dora_image/F.png', correct_response: '1'},
  
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/A.png', correct_response: '1'},
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/B.png', correct_response: '1'},
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/C.png', correct_response: '1'},
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/D.png', correct_response: '0'},
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/E.png', correct_response: '1'},
  { cue: repo_site +'dora_image/D.png', target: repo_site +'dora_image/F.png', correct_response: '1'},

  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/A.png', correct_response: '1'},
  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/B.png', correct_response: '1'},
  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/C.png', correct_response: '1'},
  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/D.png', correct_response: '1'},
  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/E.png', correct_response: '0'},
  { cue: repo_site +'dora_image/E.png', target: repo_site +'dora_image/F.png', correct_response: '1'},
 
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/A.png', correct_response: '1'},
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/B.png', correct_response: '1'},
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/C.png', correct_response: '1'},
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/D.png', correct_response: '1'},
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/E.png', correct_response: '1'},
  { cue: repo_site +'dora_image/F.png', target: repo_site +'dora_image/F.png', correct_response: '0'},
   
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
       stimulus_height: document.documentElement.clientHeight*0.6,
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
  stimulus_height: document.documentElement.clientHeight*0.6,
  choices: ['同じ','違う'],
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },

  on_finish: function(data){
    data.correct = data.response == data.correct_response;
  }
    }
    
 
   var debrief_block = {
    type: "html-keyboard-response",
    trial_duration: 1000,
  
    stimulus: function(data) {
      var resp = jsPsych.data.getLastTrialData().filter({task: 'response'}).select('response').values;
      var cresp = jsPsych.data.getLastTrialData().filter({task: 'response'}).select('correct_response').values;

      console.log(resp);
      console.log(cresp);

     if (resp == "1" & cresp=="1"){
const choi = "♡ ドラえもん　かわいい ♡";
     return choi;} 

     else if (resp == "0" & cresp=="0"){
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

var debrief_block = {
  type:  "html-button-response",
  choices: ['終わる'],
  stimulus: function() {

    var trials = jsPsych.data.get().filter({task: 'response'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);

    return `<p>"ドラえもん正解率は...${accuracy}%</p>
      <p>「終わる」を押すと終了します</p>`;

  }
};
timeline.push(debrief_block);
