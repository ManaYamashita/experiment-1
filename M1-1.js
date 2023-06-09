var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
      type: 'preload',
      images: [repo_site + 'M1_1_image/face_left.png',
      repo_site + 'M1_1_image/face_right.png',

      repo_site + 'M1_1_image/Table_left.png',
      repo_site + 'M1_1_image/Table_right.png',
      
  repo_site + 'M1_1_image/left_0.png',
  repo_site + 'M1_1_image/left_45.png',
  repo_site + 'M1_1_image/left_90.png',
  repo_site + 'M1_1_image/left_135.png',
  repo_site + 'M1_1_image/left_180.png',
  repo_site + 'M1_1_image/left_225.png',
  repo_site + 'M1_1_image/left_270.png',
  repo_site + 'M1_1_image/left_315.png',
  repo_site + 'M1_1_image/re_left_0.png',
  repo_site + 'M1_1_image/re_left_45.png',
  repo_site + 'M1_1_image/re_left_90.png',
  repo_site + 'M1_1_image/re_left_135.png',
  repo_site + 'M1_1_image/re_left_180.png',
  repo_site + 'M1_1_image/re_left_225.png',
  repo_site + 'M1_1_image/re_left_270.png',
  repo_site + 'M1_1_image/re_left_315.png',

   repo_site + 'M1_1_image/right_0.png',
  repo_site + 'M1_1_image/right_45.png',
  repo_site + 'M1_1_image/right_90.png',
  repo_site + 'M1_1_image/right_135.png',
  repo_site + 'M1_1_image/right_180.png',
  repo_site + 'M1_1_image/right_225.png',
  repo_site + 'M1_1_image/right_270.png',
  repo_site + 'M1_1_image/right_315.png',
  repo_site + 'M1_1_image/re_right_0.png',
  repo_site + 'M1_1_image/re_right_45.png',
  repo_site + 'M1_1_image/re_right_90.png',
  repo_site + 'M1_1_image/re_right_135.png',
  repo_site + 'M1_1_image/re_right_180.png',
  repo_site + 'M1_1_image/re_right_225.png',
  repo_site + 'M1_1_image/re_right_270.png',
  repo_site + 'M1_1_image/re_right_315.png',
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
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_0.png',  correct_response: 'j', sitmu: 'left_0'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_45.png',  correct_response: 'j', sitmu: 'left_45'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_90.png',  correct_response: 'j', sitmu: 'left_90'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_135.png',  correct_response: 'j', sitmu: 'left_135'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_180.png',  correct_response: 'j', sitmu: 'left_180'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_225.png',  correct_response: 'j', sitmu: 'left_225'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_270.png',  correct_response: 'j', sitmu: 'left_270'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/left_315.png',  correct_response: 'j', sitmu: 'left_315'},

    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_0.png',  correct_response: 'f', sitmu: 're_left_0'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_45.png',  correct_response: 'f', sitmu: 're_left_45'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_90.png',  correct_response: 'f', sitmu: 're_left_90'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_135.png',  correct_response: 'f', sitmu: 're_left_135'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_180.png',  correct_response: 'f', sitmu: 're_left_180'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_225.png',  correct_response: 'f', sitmu: 're_left_225'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_270.png',  correct_response: 'f', sitmu: 're_left_270'},
    {face:repo_site + 'M1_1_image/face_left.png', table : repo_site + 'M1_1_image/Table_left.png', target : repo_site + 'M1_1_image/re_left_315.png',  correct_response: 'f', sitmu: 're_left_315'},

    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_0.png',  correct_response: 'j', sitmu: 'right_0'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_45.png',  correct_response: 'j', sitmu: 'right_45'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_90.png',  correct_response: 'j', sitmu: 'right_90'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_135.png',  correct_response: 'j', sitmu: 'right_135'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_180.png',  correct_response: 'j', sitmu: 'right_180'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_225.png',  correct_response: 'j', sitmu: 'right_225'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_270.png',  correct_response: 'j', sitmu: 'right_270'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/right_315.png',  correct_response: 'j', sitmu: 'right_315'},

    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_0.png',  correct_response: 'f', sitmu: 're_right_0'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_45.png',  correct_response: 'f', sitmu: 're_right_45'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_90.png',  correct_response: 'f', sitmu: 're_right_90'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_135.png',  correct_response: 'f', sitmu: 're_right_135'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_180.png',  correct_response: 'f', sitmu: 're_right_180'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_225.png',  correct_response: 'f', sitmu: 're_right_225'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_270.png',  correct_response: 'f', sitmu: 're_right_270'},
    {face:repo_site + 'M1_1_image/face_right.png', table : repo_site + 'M1_1_image/Table_right.png', target : repo_site + 'M1_1_image/re_right_315.png',  correct_response: 'f', sitmu: 're_right_315'},
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

 var face = {
      type:"image-keyboard-response",
       stimulus: jsPsych.timelineVariable('face'),
       choices: 'NO_KEYS',
       trial_duration: 800,
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
    data.kaku = jsPsych.timelineVariable('stimu');
  }
};
        


  var purosdure={
    timeline:[ready, fy, br, face, table, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 1,
}

timeline.push(purosdure);



