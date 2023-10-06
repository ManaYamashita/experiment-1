var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
  type: 'preload',
  images: [
  repo_site + "M1_1_image/koshiten.png" ,
  repo_site + 'M1_1_image/table_left_human.png',
  repo_site + 'M1_1_image/table_right_human.png',

    repo_site + 'M1_1_image/left_human_face.png',
    repo_site + 'M1_1_image/right_human_face.png',
      
  repo_site + 'M1_1_image/left_human0.png',
  repo_site + 'M1_1_image/left_human45.png',
  repo_site + 'M1_1_image/left_human90.png',
  repo_site + 'M1_1_image/left_human135.png',
  repo_site + 'M1_1_image/left_human180.png',
  repo_site + 'M1_1_image/left_human225.png',
  repo_site + 'M1_1_image/left_human270.png',
  repo_site + 'M1_1_image/left_human315.png',
  repo_site + 'M1_1_image/re_left_human0.png',
  repo_site + 'M1_1_image/re_left_human45.png',
  repo_site + 'M1_1_image/re_left_human90.png',
  repo_site + 'M1_1_image/re_left_human135.png',
  repo_site + 'M1_1_image/re_left_human180.png',
  repo_site + 'M1_1_image/re_left_human225.png',
  repo_site + 'M1_1_image/re_left_human270.png',
  repo_site + 'M1_1_image/re_left_human315.png',

   repo_site + 'M1_1_image/right_human0.png',
  repo_site + 'M1_1_image/right_human45.png',
  repo_site + 'M1_1_image/right_human90.png',
  repo_site + 'M1_1_image/right_human135.png',
  repo_site + 'M1_1_image/right_human180.png',
  repo_site + 'M1_1_image/right_human225.png',
  repo_site + 'M1_1_image/right_human270.png',
  repo_site + 'M1_1_image/right_human315.png',
  repo_site + 'M1_1_image/re_right_human0.png',
  repo_site + 'M1_1_image/re_right_human45.png',
  repo_site + 'M1_1_image/re_right_human90.png',
  repo_site + 'M1_1_image/re_right_human135.png',
  repo_site + 'M1_1_image/re_right_human180.png',
  repo_site + 'M1_1_image/re_right_human225.png',
  repo_site + 'M1_1_image/re_right_human270.png',
  repo_site + 'M1_1_image/re_right_human315.png',
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
    { koshiten:repo_site + "M1_1_image/koshiten.png" , face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human0.png',  correct_response: 'j', stimu: 'left_human0'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" , face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human45.png',  correct_response: 'j', stimu: 'left_human45'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human90.png',  correct_response: 'j', stimu: 'left_human90'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human135.png',  correct_response: 'j', stimu: 'left_human135'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human180.png',  correct_response: 'j', stimu: 'left_human180'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human225.png',  correct_response: 'j', stimu: 'left_human225'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human270.png',  correct_response: 'j', stimu: 'left_human270'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/left_human315.png',  correct_response: 'j', stimu: 'left_human315'},

    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human0.png',  correct_response: 'f', stimu: 're_left_human0'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human45.png',  correct_response: 'f', stimu: 're_left_human45'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human90.png',  correct_response: 'f', stimu: 're_left_human90'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human135.png',  correct_response: 'f', stimu: 're_left_human135'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human180.png',  correct_response: 'f', stimu: 're_left_human180'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human225.png',  correct_response: 'f', stimu: 're_left_human225'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human270.png',  correct_response: 'f', stimu: 're_left_human270'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/left_human_face" ,table : repo_site + 'M1_1_image/table_left_human.png', target : repo_site + 'M1_1_image/re_left_human315.png',  correct_response: 'f', stimu: 're_left_human315'},

    {koshiten:repo_site + "M1_1_image/koshiten.png" , face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human0.png',  correct_response: 'j', stimu: 'right_human0'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human45.png',  correct_response: 'j', stimu: 'right_human45'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human90.png',  correct_response: 'j', stimu: 'right_human90'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human135.png',  correct_response: 'j', stimu: 'right_human135'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human180.png',  correct_response: 'j', stimu: 'right_human180'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human225.png',  correct_response: 'j', stimu: 'right_human225'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human270.png',  correct_response: 'j', stimu: 'right_human270'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/right_human315.png',  correct_response: 'j', stimu: 'right_human315'},

    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human0.png',  correct_response: 'f', stimu: 're_right_human0'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" , face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human45.png',  correct_response: 'f', stimu: 're_right_human45'},
    {koshiten:repo_site + "M1_1_image/koshiten.png" , face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human90.png',  correct_response: 'f', stimu: 're_right_human90'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human135.png',  correct_response: 'f', stimu: 're_right_human135'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human180.png',  correct_response: 'f', stimu: 're_right_human180'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human225.png',  correct_response: 'f', stimu: 're_right_human225'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human270.png',  correct_response: 'f', stimu: 're_right_human270'},
    { koshiten:repo_site + "M1_1_image/koshiten.png" ,face: "M1_1_image/right_human_face" ,table : repo_site + 'M1_1_image/table_right_human.png', target : repo_site + 'M1_1_image/re_right_human315.png',  correct_response: 'f', stimu: 're_right_human315'},
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



