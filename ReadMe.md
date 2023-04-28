# Dialog Selector

The Dialog Selector plugin allows you to create a rudimentary branching dialog system using a plugin setting for configuration of npc dialog per map.  Dialog can also be set up to requiire certain swtiches to be active in order for that dialog to be shown.  When used in combination with some eventing, you can create a basic dialog system.


Plugin Version: 0.1

Plugin Demo(http://www.lmpgames.com/plugins/demos/TutorialPlugin1_DialogSelector_Demo_V0.1.zip)

Plugin Project(http://www.lmpgames.com/plugins/projects/TutorialPlugin1_DialogSelector_Project_V0.1.zip)


## Installing the plugin
Download the plugin file either using the Demo or Project links above or from the repository.  Please the .js file into your js/Plugins folder and then add the plugin into your project in the Plugin Manager screen.

Note, YanFly_MessageCore is highly recommended but optional.  In a future version, support for specific Message Functionality will be added and can be turned on if required.


## Plugin Information
This section contains information relating to plugin settings and commands used with plugin.  To learn how to use and what certain commands or settings do, continue reading.  If you are looking for configuraiton information, see the Configation Settings section below.


### Plugin Settings

#### Enable Dialog System
This setting controls whether or not the dialog system is enabled when the game starts.  Set this to true to enable the system at the start of the game.  
Boolean  
true


#### Text Game Variable
This setting sets the game variable that will be used to store the current npc dialog to display.  
**Required**  
Game Variable  
001


#### Map Data
This setting contains the configuration for each map and each npc on those maps that the Dialog System should apply to.  For more information on how to configure this setting, see the Configuration Settings section below.  
Required  
Object


#### Default Dialog
This setting sets the dialog shown by an NPC when there is no valid dialog available to be shown.  This only applies to configured NPCs.  
Text  
Hello, \\P[1]


#### Unconfigured NPC Dialog
This setting sets the dialog to be displayed when calling the plugin command from an NPC that either has not figured for the current map or whose map is not configured in the Map Data plugin setting.  This is meant to be used as a development debugging tool, an option to turn this output off or on will be added in a future version.  
Text  
This map or npc has not been configured in the Dialog Selector plugin configuration data.





