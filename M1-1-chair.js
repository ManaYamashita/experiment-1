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
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_0.png',  correct_response: 'j', stimu: 'left_0'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_45.png',  correct_response: 'j', stimu: 'left_45'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_90.png',  correct_response: 'j', stimu: 'left_90'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_135.png',  correct_response: 'j', stimu: 'left_135'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_180.png',  correct_response: 'j', stimu: 'left_180'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_225.png',  correct_response: 'j', stimu: 'left_225'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_270.png',  correct_response: 'j', stimu: 'left_270'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/left_315.png',  correct_response: 'j', stimu: 'left_315'},

    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_0.png',  correct_response: 'f', stimu: 're_left_0'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_45.png',  correct_response: 'f', stimu: 're_left_45'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_90.png',  correct_response: 'f', stimu: 're_left_90'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_135.png',  correct_response: 'f', stimu: 're_left_135'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_180.png',  correct_response: 'f', stimu: 're_left_180'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_225.png',  correct_response: 'f', stimu: 're_left_225'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_270.png',  correct_response: 'f', stimu: 're_left_270'},
    {face:repo_site + 'M1_1_image_chair/face_left.png', table : repo_site + 'M1_1_image_chair/left.png', target : repo_site + 'M1_1_image_chair/re_left_315.png',  correct_response: 'f', stimu: 're_left_315'},

    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_0.png',  correct_response: 'j', stimu: 'right_0'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_45.png',  correct_response: 'j', stimu: 'right_45'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_90.png',  correct_response: 'j', stimu: 'right_90'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_135.png',  correct_response: 'j', stimu: 'right_135'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_180.png',  correct_response: 'j', stimu: 'right_180'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_225.png',  correct_response: 'j', stimu: 'right_225'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_270.png',  correct_response: 'j', stimu: 'right_270'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/right_315.png',  correct_response: 'j', stimu: 'right_315'},

    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_0.png',  correct_response: 'f', stimu: 're_right_0'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_45.png',  correct_response: 'f', stimu: 're_right_45'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_90.png',  correct_response: 'f', stimu: 're_right_90'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_135.png',  correct_response: 'f', stimu: 're_right_135'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_180.png',  correct_response: 'f', stimu: 're_right_180'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_225.png',  correct_response: 'f', stimu: 're_right_225'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_270.png',  correct_response: 'f', stimu: 're_right_270'},
    {face:repo_site + 'M1_1_image_chair/face_right.png', table : repo_site + 'M1_1_image_chair/right.png', target : repo_site + 'M1_1_image_chair/re_right_315.png',  correct_response: 'f', stimu: 're_right_315'},
  ]


  var ready = {
    type: "html-keyboard-response",
    stimulus: "<p>Ready？</p>" 
                  };
  
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
  
  on_finish: function(data){
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response); 
    data.stimu = jsPsych.timelineVariable('stimu');
  }
};
        


  var purosdure={
    timeline:[ready, fy, br, face, table, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 2,
}

timeline.push(purosdure);



