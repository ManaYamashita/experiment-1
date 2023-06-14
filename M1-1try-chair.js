var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
      type: 'preload',
      images: [repo_site + 'M1_1_image_chair/left.png',
      repo_site + 'M1_1_image_chair/right.png',
      
  repo_site + 'M1_1_image_chair/left_0.png',
  repo_site + 'M1_1_image_chair/left_45.png',
  repo_site + 'M1_1_image_chair/left_90.png',
  repo_site + 'M1_1_image_chair/left_135.png',
  repo_site + 'M1_1_image_chair/left_180.png',
  repo_site + 'M1_1_image_chair/left_225.png',
  repo_site + 'M1_1_image_chair/left_270.png',
  repo_site + 'M1_1_image_chair/left_315.png',
  repo_site + 'M1_1_image_chair/re_left_0.png',
  repo_site + 'M1_1_image_chair/re_left_45.png',
  repo_site + 'M1_1_image_chair/re_left_90.png',
  repo_site + 'M1_1_image_chair/re_left_135.png',
  repo_site + 'M1_1_image_chair/re_left_180.png',
  repo_site + 'M1_1_image_chair/re_left_225.png',
  repo_site + 'M1_1_image_chair/re_left_270.png',
  repo_site + 'M1_1_image_chair/re_left_315.png',

   repo_site + 'M1_1_image_chair/right_0.png',
  repo_site + 'M1_1_image_chair/right_45.png',
  repo_site + 'M1_1_image_chair/right_90.png',
  repo_site + 'M1_1_image_chair/right_135.png',
  repo_site + 'M1_1_image_chair/right_180.png',
  repo_site + 'M1_1_image_chair/right_225.png',
  repo_site + 'M1_1_image_chair/right_270.png',
  repo_site + 'M1_1_image_chair/right_315.png',
  repo_site + 'M1_1_image_chair/re_right_0.png',
  repo_site + 'M1_1_image_chair/re_right_45.png',
  repo_site + 'M1_1_image_chair/re_right_90.png',
  repo_site + 'M1_1_image_chair/re_right_135.png',
  repo_site + 'M1_1_image_chair/re_right_180.png',
  repo_site + 'M1_1_image_chair/re_right_225.png',
  repo_site + 'M1_1_image_chair/re_right_270.png',
  repo_site + 'M1_1_image_chair/re_right_315.png',
  ]
    }
    timeline.push(preload);

/*画像読み込み*/

/*画像読み込み終わり*/

var swid = document.documentElement.clientWidth;

/*実験はじめ*/

/*教示*/
var welcome = {
  type : "html-keyboard-response",
  stimulus : "何かキーを押すと実験が始まります",
  };

  timeline.push(welcome);

  var test_stimuli = [
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_0.png',  correct_response: 'j', sitmu: 'left_0'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_45.png',  correct_response: 'j', sitmu: 'left_45'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_90.png',  correct_response: 'j', sitmu: 'left_90'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_135.png',  correct_response: 'j', sitmu: 'left_135'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_180.png',  correct_response: 'j', sitmu: 'left_180'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_225.png',  correct_response: 'j', sitmu: 'left_225'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_270.png',  correct_response: 'j', sitmu: 'left_270'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_315.png',  correct_response: 'j', sitmu: 'left_315'},

    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_0.png',  correct_response: 'f', sitmu: 're_left_0'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_45.png',  correct_response: 'f', sitmu: 're_left_45'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_90.png',  correct_response: 'f', sitmu: 're_left_90'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_135.png',  correct_response: 'f', sitmu: 're_left_135'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_180.png',  correct_response: 'f', sitmu: 're_left_180'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_225.png',  correct_response: 'f', sitmu: 're_left_225'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_270.png',  correct_response: 'f', sitmu: 're_left_270'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_315.png',  correct_response: 'f', sitmu: 're_left_315'},

    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_0.png',  correct_response: 'j', sitmu: 'right_0'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_45.png',  correct_response: 'j', sitmu: 'right_45'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_90.png',  correct_response: 'j', sitmu: 'right_90'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_135.png',  correct_response: 'j', sitmu: 'right_135'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_180.png',  correct_response: 'j', sitmu: 'right_180'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_225.png',  correct_response: 'j', sitmu: 'right_225'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_270.png',  correct_response: 'j', sitmu: 'right_270'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_315.png',  correct_response: 'j', sitmu: 'right_315'},

    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_0.png',  correct_response: 'f', sitmu: 're_right_0'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_45.png',  correct_response: 'f', sitmu: 're_right_45'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_90.png',  correct_response: 'f', sitmu: 're_right_90'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_135.png',  correct_response: 'f', sitmu: 're_right_135'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_180.png',  correct_response: 'f', sitmu: 're_right_180'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_225.png',  correct_response: 'f', sitmu: 're_right_225'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_270.png',  correct_response: 'f', sitmu: 're_right_270'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_315.png',  correct_response: 'f', sitmu: 're_right_315'},
  ]

  var test_rand = jsPsych.randomization.sampleWithReplacement(test_stimuli, 5);
  
 var fy = {
      type: "html-keyboard-response",
      stimulus: "<p>+</p>", 
      choice: 'NO_KEYS',
      trial_duration: 400,
                    };

  var br = {
      type: "html-keyboard-response",
      stimulus: "<p></p>", 
      choice: 'NO_KEYS',
      trial_duration: 300,
                    };

   var table = {
      type:"image-keyboard-response",
       stimulus: jsPsych.timelineVariable('table'),
       choices: 'NO_KEYS',
       trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([Math.floor( Math.random() * 700 ) + 700], 1)[0];//Math.random() * ( 最大値 - 最小値 ) + 最小値
      },
        };

  var test = {
  type:"image-keyboard-response",
  stimulus: jsPsych.timelineVariable('target'),
  choices: ['f', 'j'],
  //stimulus_width: document.documentElement.clientWidth*0.6,
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },
  
};

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
    timeline:[fy, br, table, test, debrief_block],
    timeline_variables: test_rand,
    randomize_order: true,
    repetitions: 1,
}

timeline.push(purosdure);



