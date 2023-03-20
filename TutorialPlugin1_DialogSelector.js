/*:
* @plugindesc This is the first plugin for the plugin tutorial series
* @author LMPGames
*
*
* @param Settings
* @desc Contains all of the main plugin settings
*
*
* @param Enable Dialog System
* @desc When enabled, turns on the dialog system
* @type boolean
* @default false
* @on Enable
* @off Disable
* @parent Settings
*
*
* @param Text Game Variable
* @desc Assigns a game variable to be used to store dialog text
* @type variable
* @default 1
* @parent Settings
*
*
* @param Dialog Settings
* @desc Contains all of the dialog settings
*
*
* @param Dialog List
* @desc List that stores all of the selectable dialog
* @type text[]
* @default []
* @parent Dialog Settings
*
*
* @param Default Dialog
* @desc The dialog returned when an invalid value is used in the GetDialog plugin command
* @type text
* @default Hello, \\P[0]
*
*
* @help
* For more information on how to use this plugin, please see the
* GitHub page:
*
* https://github.com/Geowil/Plugin1_DialogSelector
*/

var tutorial_DialogSelectorParams = PluginManager.parameters("TutorialPlugin1_DialogSelector");
var enableDialogSystem = (tutorial_DialogSelectorParams["Enable Dialog System"] == "true");
var textVariableId = parseInt(tutorial_DialogSelectorParams["Text Game Variable"]);
var dialogList = JSON.parse(tutorial_DialogSelectorParams["Dialog List"]);
var defaultDialog = tutorial_DialogSelectorParams["Default Dialog"];

/* Data Manager Functions */
var tutorialDialogSelectorDatabaseManager_IsMapLoaded = DataManager.isMapLoaded;
DataManager.isMapLoaded = function() {
	let mapIsLoaded = tutorialDialogSelectorDatabaseManager_IsMapLoaded.call(this);
	if (mapIsLoaded) {
		$gameSystem.toggleDialogSystem(enableDialogSystem);
	}
	return mapIsLoaded;
};

/* Plugin Commands */
var tutorialDialogSelectorGameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
	if (command === "Tutorial.DialogSelector") {
		for (let arg of args) {
			command += " " + arg;
		}

		let matches = [];
		if (command.match(/Tutorial.DialogSelector[ ]EnableDialogSystem[ ](?:(\w+)|(\d+))/)) {
			matches = ((/Tutorial.DialogSelector[ ]EnableDialogSystem[ ](?:(\w+)|(\d+))/).exec(command) || []);
			if (matches.length > 1) {
				$gameSystem.toggleDialogSystem(matches[1]);
			}
		} else if (command.match(/Tutorial.DialogSelector[ ]GetDialog[ ](\d+)/)) {
			matches = ((/Tutorial.DialogSelector[ ]GetDialog[ ](\d+)/).exec(command) || []);
			if (matches.length > 1) {
				$gameSystem.setDialogVariable(matches[1]);
			}
		}
	} else {
		tutorialDialogSelectorGameInterpreter_pluginCommand.call(this, command, args);
	}
}


/* Game System Functions */
Game_System.prototype.toggleDialogSystem = function(dialogSystemEnabled){
	let bSystemEnabled = false;
	if (dialogSystemEnabled.constructor == String) {
		dialogSystemEnabled = dialogSystemEnabled.toLowerCase();
	}

	switch(dialogSystemEnabled) {
		case 1:
		case "true":
		case true:
			bSystemEnabled = true;
			break;

		default:
			break;
	}

	this.bDialogSystemEnabled = bSystemEnabled;
}

Game_System.prototype.isDialogSystemEnabled = function(){
	return this.bDialogSystemEnabled == true;
}

Game_System.prototype.setDialogVariable = function(index){
	if (dialogList.length == 0 || dialogList.length <= index) {
		$gameVariables.setValue(textVariableId, defaultDialog);
	} else {
		$gameVariables.setValue(textVariableId, dialogList[index]);
	}
}