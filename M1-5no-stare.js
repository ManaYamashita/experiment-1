var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
  type: 'preload',
  images: [
  repo_site + "M1_2_image/koshiten.png" ,
  repo_site + "M1_2_image/kuro.png",
  repo_site + "M1_2_image/table_left.png" ,
  repo_site + "M1_2_image/table_right.png" ,
  
 
  repo_site + 'M1_2_image/left_base.png',
  repo_site + 'M1_2_image/right_base.png',
        
  repo_site + 'M1_2_image/left0.png',
  repo_site + 'M1_2_image/left45.png',
  repo_site + 'M1_2_image/left90.png',
  repo_site + 'M1_2_image/left135.png',
  repo_site + 'M1_2_image/left180.png',
  repo_site + 'M1_2_image/left225.png',
  repo_site + 'M1_2_image/left270.png',
  repo_site + 'M1_2_image/left315.png',
  repo_site + 'M1_2_image/re_left0.png',
  repo_site + 'M1_2_image/re_left45.png',
  repo_site + 'M1_2_image/re_left90.png',
  repo_site + 'M1_2_image/re_left135.png',
  repo_site + 'M1_2_image/re_left180.png',
  repo_site + 'M1_2_image/re_left225.png',
  repo_site + 'M1_2_image/re_left270.png',
  repo_site + 'M1_2_image/re_left315.png',

   repo_site + 'M1_2_image/right0.png',
  repo_site + 'M1_2_image/right45.png',
  repo_site + 'M1_2_image/right90.png',
  repo_site + 'M1_2_image/right135.png',
  repo_site + 'M1_2_image/right180.png',
  repo_site + 'M1_2_image/right225.png',
  repo_site + 'M1_2_image/right270.png',
  repo_site + 'M1_2_image/right315.png',
  repo_site + 'M1_2_image/re_right0.png',
  repo_site + 'M1_2_image/re_right45.png',
  repo_site + 'M1_2_image/re_right90.png',
  repo_site + 'M1_2_image/re_right135.png',
  repo_site + 'M1_2_image/re_right180.png',
  repo_site + 'M1_2_image/re_right225.png',
  repo_site + 'M1_2_image/re_right270.png',
  repo_site + 'M1_2_image/re_right315.png',
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
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left0.png',  correct_response: 'j', stimu: 'left0'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left45.png',  correct_response: 'j', stimu: 'left45'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left90.png',  correct_response: 'j', stimu: 'left90'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left135.png',  correct_response: 'j', stimu: 'left135'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left180.png',  correct_response: 'j', stimu: 'left180'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left225.png',  correct_response: 'j', stimu: 'left225'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left270.png',  correct_response: 'j', stimu: 'left270'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/left315.png',  correct_response: 'j', stimu: 'left315'},

    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left0.png',  correct_response: 'f', stimu: 're_left0'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left45.png',  correct_response: 'f', stimu: 're_left45'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left90.png',  correct_response: 'f', stimu: 're_left90'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left135.png',  correct_response: 'f', stimu: 're_left135'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left180.png',  correct_response: 'f', stimu: 're_left180'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left225.png',  correct_response: 'f', stimu: 're_left225'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left270.png',  correct_response: 'f', stimu: 're_left270'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_left.png', target : repo_site + 'M1_2_image/re_left315.png',  correct_response: 'f', stimu: 're_left315'},

    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right0.png',  correct_response: 'j', stimu: 'right0'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right45.png',  correct_response: 'j', stimu: 'right45'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right90.png',  correct_response: 'j', stimu: 'right90'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right135.png',  correct_response: 'j', stimu: 'right135'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right180.png',  correct_response: 'j', stimu: 'right180'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right225.png',  correct_response: 'j', stimu: 'right225'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right270.png',  correct_response: 'j', stimu: 'right270'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/right315.png',  correct_response: 'j', stimu: 'right315'},

    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right0.png',  correct_response: 'f', stimu: 're_right0'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right45.png',  correct_response: 'f', stimu: 're_right45'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right90.png',  correct_response: 'f', stimu: 're_right90'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right135.png',  correct_response: 'f', stimu: 're_right135'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right180.png',  correct_response: 'f', stimu: 're_right180'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right225.png',  correct_response: 'f', stimu: 're_right225'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png"  ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right270.png',  correct_response: 'f', stimu: 're_right270'},
    { koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,table : repo_site + 'M1_2_image/table_right.png', target : repo_site + 'M1_2_image/re_right315.png',  correct_response: 'f', stimu: 're_right315'},
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

 var kuro = {
       type: "image-keyboard-response",
       stimulus: jsPsych.timelineVariable('kuro'), 
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
    timeline:[fy, kuro, table, test],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 2,
}

timeline.push(purosdure);



