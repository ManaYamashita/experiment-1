var repo_site = "https://manayamashita.github.io/experiment-1/";

var timeline = [];

/*画像読み込み*/
var preload = {
  type: 'preload',
  images: [repo_site + 'SPT_exp1_image/flower.png',
           repo_site +'SPT_exp1_image/ken.png',
           repo_site +'SPT_exp1_image/kf0.png',
           repo_site +'SPT_exp1_image/kf40.png',
           repo_site +'SPT_exp1_image/kf80.png',
           repo_site +'SPT_exp1_image/kf120.png',
           repo_site +'SPT_exp1_image/kf160.png',
           repo_site +'SPT_exp1_image/Rkf40.png',
           repo_site +'SPT_exp1_image/Rkff80.png',
           repo_site +'SPT_exp1_image/Rkf120.png',
           repo_site +'SPT_exp1_image/Rkf160.png',
           repo_site +'SPT_exp1_image/fk0.png',
           repo_site +'SPT_exp1_image/fk40.png',
           repo_site +'SPT_exp1_image/fk80.png',
           repo_site +'SPT_exp1_image/fk120.png',
           repo_site +'SPT_exp1_image/fk160.png',
           repo_site +'SPT_exp1_image/Rfk40.png',
           repo_site +'SPT_exp1_image/Rfk80.png',
           repo_site +'SPT_exp1_image/Rfk120.png',
           repo_site +'SPT_exp1_image/Rfk160.png'
          ]
}
/*画像読み込み終わり*/
 
/*実験はじめ*/


var welcome = {
        type : "html-keyboard-response",
        stimulus : "何かキーを押すと実験が始まります",
        };
 
        timeline.push(welcome);

 /*教示はじめ*/
var instructions = {
      type: "html-keyboard-response",
      stimulus: "<p>教示</p>" 
                 };

        timeline.push(instructions);
    
/*教示おわり*/

  var stimulus_ver = {
    cue:['flower','ken'],
    target:['kf0','kf40','kf80','kf120','kf160','Rkf40','Rkf80','Rkf120','Rkf160','fk0','fk40','fk80','fk120','fk160','Rfk40','Rfk80','Rfk120','Rfk160']
  };

  var combi_stimulus = jsPsych.randomization.factorial(stimulus_ver,1);/*計36試行*/
    

/*試行開始*/
var ready = {
      type: "html-keyboard-response",
      stimulus: "<p>Ready？</p>" 
                    };

 var br = {
      type: "html-keyboard-response",
      stimulus: "<p></p>", 
      choice: 'NO_KEYS',
      trial_duration: 1000,
                    };

       /* timeline.push(br);*/

var test = {
         type:  "html-keyboard-response",
         stimulus: function(){
            var cue_stimu='<center><img src= "'+ repo_site +'SPT_exp1_image/'+jsPsych.timelineVariable('cue')+'.png" width="100%"></center>';
          return cue_stimu;
          },
         choice: 'NO_KEYS',
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
         type:  "html-keyboard-response",
        stimulus: function(){
          var target_stimu='<center><img src="'+ repo_site +'SPT_exp1_image/'+jsPsych.timelineVariable('target')+'.png" width="60%"></center>';
          return target_stimu;
          },
        choice: ['f' , 'j'],
       
        data: {
          task: 'response',
          response_kye: jsPsych.timelineVariable('choice')
          },
        
        on_finish: function(data){
          datatime = jsPsych.pluginAPI.compareKeys(data.response, data.response_kye);
        }
 }
         

/*記録*/         
         on_finish: (data) => {
Qualtrics.SurveyEngine.setEmbeddeedData("datajs", datajs);    

data.flowerken = jsPsych.timelineVariable('cue');

data.target = jsPsych.timelineVariable('target');
};


  var purosdure={
    timeline:[ready, br, test, br, test1],
    timeline_variables: combi_stimulus,
    randomize_order: true,
    repetitions: 1,
}

timeline.push(purosdure);

/*試行終了*/