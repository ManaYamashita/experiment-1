	/*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/
    Qualtrics.SurveyEngine.addOnload(function()
    {
        /*Place your JavaScript here to run when the page is fully displayed*/
           
        var qthis = this;
    qthis.hideNextButton();

        var task_github = "https://manayamashita.github.io/experiment-1/"; 
        // https://<GitHubのユーザー名>.github.io/<レポジトリ名>/
    
        var requiredResources = [
            task_github + "jsp/jspsych.js",
            task_github + "jsp/plugin-html-keyboard-response.js",
            task_github + "jsp/plugin-image-keyboard-response.js",
            task_github + "jsp/plugin-preload.js",
            task_github + "jsp/jspsych.css" ,
            task_github + "main.js"
          
        ];
             
        function loadScript(idx) {
            console.log("Loading ", requiredResources[idx]);
            jQuery.getScript(requiredResources[idx], function () {
                if ((idx + 1) < requiredResources.length) {
                    loadScript(idx + 1);
                } else {
                    initExp();
                }
            });
        }
    
        if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
            loadScript(0);
        }
    
        jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
        jQuery("<div id = 'display_stage'></div>").appendTo('body');
        
           });

    var jsPsych = initJsPsych({
        on_finish: function() {
          jsPsych.data.displayData();
        }
      });
      
       function initExp() {
            jsPsych.run(timeline)
           };


           /* create timeline */
var timeline = [];
/* preload images */
var preload = {
  type: jsPsychPreload,
  images: [repo_site +'img/blue.png', repo_site +'img/orange.png']
};
timeline.push(preload);


Qualtrics.SurveyEngine.addOnReady(function()
{
   

/* define welcome message trial */
var welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "何かキーを押すと実験が始まります"
};
timeline.push(welcome);

/* define instructions trial */
var instructions = {
    type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>画面の中央に丸が表示されます</p>"
        <p>もし丸が <strong>青なら</strong>、キーボードの F キーを押してください</p>
        <p>もし丸が <strong>オレンジなら</strong>、キーボードの J キーを押してください</p>
        <div style='width: 700px;'><div style='float: left;'><img src='`+ repo_site +`"img/blue.png'></img>
        <p class='small'><strong>Press the F key</strong></p></div>
        <div style='float: right;'><img src='`+ repo_site +`"img/orange.png'></img>
        <p class='small'><strong>Press the J key</strong></p></div></div>
        <p>Press any key to begin.</p>
      `,
      post_trial_gap: 2000
  };
timeline.push(instructions);

/* define trial stimuli array for timeline variables */
var test_stimuli = [
    { stimulus: repo_site + "img/blue.png", 
      data: {
        test_part: 'test', 
        correct_response: 'f'}},
    { stimulus: repo_site + "img/orange.png", 
      data: {
        test_part: 'test', 
        correct_response: 'j'}}
  ];

/* define fixation and test trials */
var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {
    task: 'fixation'
  }
};

var test = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['f', 'j'],
  data: {
    task: 'response',
    correct_response: jsPsych.timelineVariable('correct_response')
  },
  on_finish: function(data){
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
  }
};
jsPsych.init({
    timeline: timeline,
    display_element: 'display_stage',
    on_finish: function (data) {
        /* Change 5: Summarize and save the results to Qualtrics */
        // summarize the results
        var trials = jsPsych.data.get().filter({
            test_part: 'test'
        });
        var correct_trials = trials.filter({
            correct: true
        });
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        // save to qualtrics embedded data
        Qualtrics.SurveyEngine.setEmbeddedData("accuracy", accuracy);
        Qualtrics.SurveyEngine.setEmbeddedData("rt", rt);

        /* Change 6: Add the clean up and continue functions.*/
        // clear the stage
        jQuery('display_stage').remove();
        jQuery('display_stage_background').remove();

        // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
        qthis.clickNextButton();
    }
});
function initExp() {
    jsPsych.init({
        timeline: timeline,
        display_element: 'display_stage',
        on_finish: function (data) {
  
              var datajs = jsPsych.data.get().json();
            
            Qualtrics.SurveyEngine.setEmbeddedData("datajs", datajs);
    
            jQuery('display_stage').remove();
            jQuery('display_stage_background').remove();
    
            qthis.clickNextButton();
        }
    });
  };
	/*ページが完全に表示されたときに実行するJavaScriptをここに配置してください*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
    /* define test procedure */
var test_procedure = {
    timeline: [fixation, test],
    timeline_variables: test_stimuli,
    repetitions: 5,
    randomize_order: true
  };
  timeline.push(test_procedure);
  
  /* define debrief */
  var debrief_block = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
  
      var trials = jsPsych.data.get().filter({task: 'response'});
      var correct_trials = trials.filter({correct: true});
      var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
      var rt = Math.round(correct_trials.select('rt').mean());
  
      return `<p>You responded correctly on ${accuracy}% of the trials.</p>
        <p>Your average response time was ${rt}ms.</p>
        <p>Press any key to complete the experiment. Thank you!</p>`;
  
    }
  };
  timeline.push(debrief_block);
  
      /* start the experiment */
      jsPsych.run(timeline);
	/*ページの読み込みが解除されたときに実行するJavaScriptをここに配置してください*/

});