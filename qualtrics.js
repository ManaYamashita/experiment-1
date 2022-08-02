Qualtrics.SurveyEngine.addOnload(function()
{
    /*Place your JavaScript here to run when the page loads*/

    var repo_site = "https://manayamashita.github.io/experiment-1/";
    
/* initialize jsPsych */
    var jsPsych = initJsPsych({
        on_finish: function() {
          jsPsych.data.displayData();
        }
      });


/* create timeline */
var timeline = [];
/* preload images */
var preload = {
  type: jsPsychPreload,
  images: [repo_site +'img/blue.png', repo_site +'img/orange.png']
};
timeline.push(preload);
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    /*Place your JavaScript here to run when the page is fully displayed*/
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
  
 
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
    /*Place your JavaScript here to run when the page is unloaded*/
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
});