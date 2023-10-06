var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
  type: 'preload',
  images: [
  repo_site + "M1_1_image/koshiten.png" ,
  repo_site + 'M1_1_image/table_left_chair.png',
  repo_site + 'M1_1_image/table_right_chair.png',

  repo_site + 'M1_1_image/left_chair_face.png',
  repo_site + 'M1_1_image/right_chair_face.png',
        
  repo_site + 'M1_1_image/left_chair0.png',
  repo_site + 'M1_1_image/left_chair45.png',
  repo_site + 'M1_1_image/left_chair90.png',
  repo_site + 'M1_1_image/left_chair135.png',
  repo_site + 'M1_1_image/left_chair180.png',
  repo_site + 'M1_1_image/left_chair225.png',
  repo_site + 'M1_1_image/left_chair270.png',
  repo_site + 'M1_1_image/left_chair315.png',
  repo_site + 'M1_1_image/re_left_chair0.png',
  repo_site + 'M1_1_image/re_left_chair45.png',
  repo_site + 'M1_1_image/re_left_chair90.png',
  repo_site + 'M1_1_image/re_left_chair135.png',
  repo_site + 'M1_1_image/re_left_chair180.png',
  repo_site + 'M1_1_image/re_left_chair225.png',
  repo_site + 'M1_1_image/re_left_chair270.png',
  repo_site + 'M1_1_image/re_left_chair315.png',

   repo_site + 'M1_1_image/right_chair0.png',
  repo_site + 'M1_1_image/right_chair45.png',
  repo_site + 'M1_1_image/right_chair90.png',
  repo_site + 'M1_1_image/right_chair135.png',
  repo_site + 'M1_1_image/right_chair180.png',
  repo_site + 'M1_1_image/right_chair225.png',
  repo_site + 'M1_1_image/right_chair270.png',
  repo_site + 'M1_1_image/right_chair315.png',
  repo_site + 'M1_1_image/re_right_chair0.png',
  repo_site + 'M1_1_image/re_right_chair45.png',
  repo_site + 'M1_1_image/re_right_chair90.png',
  repo_site + 'M1_1_image/re_right_chair135.png',
  repo_site + 'M1_1_image/re_right_chair180.png',
  repo_site + 'M1_1_image/re_right_chair225.png',
  repo_site + 'M1_1_image/re_right_chair270.png',
  repo_site + 'M1_1_image/re_right_chair315.png',
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
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair0.png',  correct_response: 'j', stimu: 'left_chair0'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair45.png',  correct_response: 'j', stimu: 'left_chair45'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair90.png',  correct_response: 'j', stimu: 'left_chair90'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair135.png',  correct_response: 'j', stimu: 'left_chair135'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair180.png',  correct_response: 'j', stimu: 'left_chair180'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair225.png',  correct_response: 'j', stimu: 'left_chair225'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair270.png',  correct_response: 'j', stimu: 'left_chair270'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/left_chair315.png',  correct_response: 'j', stimu: 'left_chair315'},

    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair0.png',  correct_response: 'f', stimu: 're_left_chair0'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair45.png',  correct_response: 'f', stimu: 're_left_chair45'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair90.png',  correct_response: 'f', stimu: 're_left_chair90'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair135.png',  correct_response: 'f', stimu: 're_left_chair135'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair180.png',  correct_response: 'f', stimu: 're_left_chair180'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair225.png',  correct_response: 'f', stimu: 're_left_chair225'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair270.png',  correct_response: 'f', stimu: 're_left_chair270'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_chair_face.png" ,table : repo_site + 'M1_1_image/table_left_chair.png', target : repo_site + 'M1_1_image/re_left_chair315.png',  correct_response: 'f', stimu: 're_left_chair315'},

    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair0.png',  correct_response: 'j', stimu: 'right_chair0'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair45.png',  correct_response: 'j', stimu: 'right_chair45'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair90.png',  correct_response: 'j', stimu: 'right_chair90'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair135.png',  correct_response: 'j', stimu: 'right_chair135'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair180.png',  correct_response: 'j', stimu: 'right_chair180'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair225.png',  correct_response: 'j', stimu: 'right_chair225'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair270.png',  correct_response: 'j', stimu: 'right_chair270'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/right_chair315.png',  correct_response: 'j', stimu: 'right_chair315'},

    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair0.png',  correct_response: 'f', stimu: 're_right_chair0'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair45.png',  correct_response: 'f', stimu: 're_right_chair45'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair90.png',  correct_response: 'f', stimu: 're_right_chair90'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair135.png',  correct_response: 'f', stimu: 're_right_chair135'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair180.png',  correct_response: 'f', stimu: 're_right_chair180'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair225.png',  correct_response: 'f', stimu: 're_right_chair225'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair270.png',  correct_response: 'f', stimu: 're_right_chair270'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_chair_face.png" ,table : repo_site + 'M1_1_image/table_right_chair.png', target : repo_site + 'M1_1_image/re_right_chair315.png',  correct_response: 'f', stimu: 're_right_chair315'},
  ]


  var ready = {
    type: "html-keyboard-response",
    stimulus: "<p>Ready？</p>" 
                  };
  
 var fy = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('koshiten'), 
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
        stimulus: jsPsych.timelineVariable('target'),
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
    data.stimu = jsPsych.timelineVariable('stimu');
  }
};
        


  var purosdure={
    timeline:[fy, br, face, table, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 2,
}

timeline.push(purosdure);



