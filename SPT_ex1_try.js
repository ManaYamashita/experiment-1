var repo_site = "https://manayamashita.github.io/experiment-1/";
 
/*実験はじめ*/
var timeline = [];

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

/*練習試行開始*/

var target = ['kf0','kf40','kf80','kf120','kf160','Rkf40','Rkf80','Rkf120','Rkf160','fk0','fk40','fk80','fk120','fk160','Rfk40','Rfk80','Rfk120','Rfk160'];

var target_rand = jsPsych.randomization.sampleWithReplacement(target, 2);

  var stimulus_ver = {
    cue:['flower','ken'],
    target1:target_rand,
  };
 

  var combi_stimulus = jsPsych.randomization.factorial(stimulus_ver,1);/*計4試行*/
    


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
          return(
          '<center><img src="'+ repo_site +'SPT_exp1_image/'+jsPsych.timelineVariable('cue')+'.png" width="100%"></center>'
          );
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

mesc1 = Date.now();
 var test1 = {
         type:  "html-keyboard-response",
        stimulus: function(){
          return(
             '<center><img src="'+ repo_site +'SPT_exp1_image/'+jsPsych.timelineVariable('target1')+'.png" width="100%"></center>'
          );
            },
         choice: ['f' , 'j'],              

/*記録*/         
         
        }

        mesc2 = Date.now();
        
  var purosdure={
    timeline:[ready, br, test, br, test1],
    timeline_variables: combi_stimulus,
    randomize_order: true,
    repetitions: 1,
};

timeline.push(purosdure);

/*試行終了*/