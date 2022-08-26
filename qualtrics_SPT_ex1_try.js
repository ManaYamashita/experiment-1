	/*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/
    Qualtrics.SurveyEngine.addOnload(function()
    {
        /*Place your JavaScript here to run when the page is fully displayed*/
           
        var qthis = this;
    qthis.hideNextButton();

        var task_github = "https://manayamashita.github.io/SPT_ex1_try/"; 
        // https://<GitHubのユーザー名>.github.io/<レポジトリ名>/
    
        var requiredResources = [

            task_github + "UTF-8",
            task_github + "jsp/jspsych.js",
            task_github + "jsp/jspsych-html-keyboard-response.js",
            task_github + "jsp/jspsych-image-keyboard-response.js",
            task_github + "SPT_ex1_try"
          
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
        /*jQuery("<script src = '"+ task_github +"main.js'></script>").appendTo('body');*/
        
           
     
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
        });
Qualtrics.SurveyEngine.addOnReady(function()
{
	/*ページが完全に表示されたときに実行するJavaScriptをここに配置してください*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*ページの読み込みが解除されたときに実行するJavaScriptをここに配置してください*/

});