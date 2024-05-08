var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
      type: 'preload',
      images: [repo_site + 'M1_2_image/table_try.png',
      repo_site + "M1_2_image/kuro.png",
      
     

  repo_site + 'M1_2_image/try0.png',
  repo_site + 'M1_2_image/try45.png',
  repo_site + 'M1_2_image/try90.png',
  repo_site + 'M1_2_image/try135.png',
  repo_site + 'M1_2_image/try180.png',
  repo_site + 'M1_2_image/try225.png',
  repo_site + 'M1_2_image/try270.png',
  repo_site + 'M1_2_image/try315.png',

  repo_site + 'M1_2_image/re_try0.png',
  repo_site + 'M1_2_image/re_try45.png',
  repo_site + 'M1_2_image/re_try90.png',
  repo_site + 'M1_2_image/re_try135.png',
  repo_site + 'M1_2_image/re_try180.png',
  repo_site + 'M1_2_image/re_try225.png',
  repo_site + 'M1_2_image/re_try270.png',
  repo_site + 'M1_2_image/re_try315.png',
 
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
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try45.png',  correct_response: 'j', stimu: 'try45'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try90.png',  correct_response: 'j', stimu: 'try90'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try135.png',  correct_response: 'j', stimu: 'try135'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try180.png',  correct_response: 'j', stimu: 'try180'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try225.png',  correct_response: 'j', stimu: 'try225'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try270.png',  correct_response: 'j', stimu: 'try270'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/try315.png',  correct_response: 'j', stimu: 'try315'},
  
  
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" ,  table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try45.png',  correct_response: 'f', stimu: 'try45'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try90.png',  correct_response: 'f', stimu: 'try90'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try135.png',  correct_response: 'f', stimu: 'try135'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try180.png',  correct_response: 'f', stimu: 'try180'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try225.png',  correct_response: 'f', stimu: 'try225'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try270.png',  correct_response: 'f', stimu: 'try270'},
    {koshiten:repo_site + "M1_2_image/koshiten.png" ,kuro:repo_site + "M1_2_image/kuro.png" , table : repo_site + 'M1_2_image/table_try.png', target : repo_site + 'M1_2_image/re_try315.png',  correct_response: 'f', stimu: 'try315'},]

  var test_rand = jsPsych.randomization.sampleWithReplacement(test_stimuli, 15);
  
 var fy = {
      type: "image-keyboard-response",
      stimulus:  jsPsych.timelineVariable('koshiten'), 
      choice: 'NO_KEYS',
      trial_duration: 400,
                    };

 var fy = {
       type: "image-keyboard-response",
       stimulus:  jsPsych.timelineVariable('kuro'), 
       choice: 'NO_KEYS',
       trial_duration: 300,
                      };

  var table = {
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



