var repo_site = "https://manayamashita.github.io/experiment-1/";


var timeline = [];

var preload = {
  type: 'preload',
  images: [
  repo_site + "3try/koshiten.png" ,

  repo_site + '3try/left45.png',
  repo_site + '3try/left90.png',
  repo_site + '3try/left135.png',
  repo_site + '3try/left225.png',
  repo_site + '3try/left270.png',
  repo_site + '3try/left315.png',

  repo_site + '3try/right45.png',
  repo_site + '3try/right90.png',
  repo_site + '3try/right135.png',
  repo_site + '3try/right225.png',
  repo_site + '3try/right270.png',
  repo_site + '3try/right315.png',
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
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left45.png',  correct_response: 'f', stimu: 'left45'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left90.png',  correct_response: 'f', stimu: 'left90'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left135.png',  correct_response: 'f', stimu: 'left135'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left225.png',  correct_response: 'f', stimu: 'left225'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left270.png',  correct_response: 'f', stimu: 'left270'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/left315.png',  correct_response: 'f', stimu: 'left315'},

    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right45.png',  correct_response: 'j', stimu: 'right45'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right90.png',  correct_response: 'j', stimu: 'right90'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right135.png',  correct_response: 'j', stimu: 'right135'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right225.png',  correct_response: 'j', stimu: 'right225'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right270.png',  correct_response: 'j', stimu: 'right270'},
    {koshiten:repo_site + "3try/koshiten.png" , target : repo_site + '3try/right315.png',  correct_response: 'j', stimu: 'right315'},
  ]


  var ready = {
    type: "html-keyboard-response",
    stimulus: "<p>何かキーを押すと実験が始まります</p>" 
                  };
  
                  
 var fy = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('koshiten'), 
      choice: 'NO_KEYS',
      trial_duration: function(){
        return jsPsych.randomization.sampleWithoutReplacement([Math.floor( Math.random() * 1000 ) + 1500], 1)[0];//Math.random() * ( 最大値 - 最小値 ) + 最小値
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
    timeline:[fy, test, debrief_block],
    timeline_variables: test_stimuli,
    randomize_order: true,
    repetitions: 1,
}

timeline.push(purosdure);



