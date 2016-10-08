/**
*  Library made by peacestorm
*  © 2016
*/

/**
* PART 1 OF THE FUNCTION LIBRARY (DON'T EDIT)
*/

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Launcher = {
	isBlockLauncher: function() {
		return (ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function() {
		return ctx.getPackageName() == "io.mrarm.mctoolbox";
	},
	isMcpeMaster: function() {
		return ctx.getPackageName() == "com.mcbox.pesdkb.mcpelauncher";
	}
};

function Song(songTitle, songArtist, songUrl) {
    this.title = songTitle || "Unknown";
    this.artist = songArtist || "Unknown";
    this.url = songUrl;
}

/**
* YOUR ADDON CONTENT
*/

const ADDON_NAME = "MoreMusic"; //Your addon's name
const ADDON_DESC = "Adds many songs into Vertex Client PE."; //Your addon's description
const ADDON_VERSION = "1.0"; //Your addon's version
const TARGET_VERSION = "1.6"; //Your addon's target Vertex Client PE version (in this case we use Vertex Client PE v1.0.1)

var modules = [];
var songs = [];

const Category = {
	COMBAT: 0,
	BUILDING: 1,
	MOVEMENT: 2,
	CHAT: 3,
	MISC: 4
}

/**
 *	CUSTOM MODULES
 */

//registerSong(new Song("", "", "")); 
registerSong(new Song("Why We Lose (feat. Coleman Trapp) [NCS Release]", "Cartoon", "http://nocopyrightsounds.co.uk/video/cartoon-why-we-lose-feat-coleman-trapp-ncs-release/?download=1")); 
registerSong(new Song("Eternal Minds [NCS Release]", "Waysons", "http://nocopyrightsounds.co.uk/video/waysons-eternal-minds-ncs-release/?download=1")); 
registerSong(new Song("Change Your Ways (feat. Charlotte Haining) [NCS Release]", "High Maintenance", "http://nocopyrightsounds.co.uk/video/high-maintenance-change-your-ways-feat-charlotte-haining-ncs-release/?download=1")); 
registerSong(new Song("Aperture [NCS Release]", "Unison", "http://nocopyrightsounds.co.uk/video/unison-aperture-ncs-release/?download=1")); 
registerSong(new Song("Vibe [NCS Release]", "Ash O’Connor", "http://nocopyrightsounds.co.uk/video/ash-oconnor-vibe-ncs-release/?download=1"));
registerSong(new Song("You. & Me? [NCS Release]", "ZEST", "http://nocopyrightsounds.co.uk/video/zest-you-me-ncs-release/?download=1")); 
registerSong(new Song("Which Direction? [NCS Release]", "Anikdote", "http://nocopyrightsounds.co.uk/video/anikdote-which-direction-ncs-release/?download=1")); 
registerSong(new Song("Blinded (feat. Kosta & Theo Hoarau) [NCS Release]", "Fytch", "http://nocopyrightsounds.co.uk/video/fytch-blinded-feat-kosta-theo-hoarau-ncs-release/?download=1")); 

/*
var exampleModule = {
	name: "Example toggleable module",
	desc: "Example description.",
	category: Category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
29
​
30
/**
31
* YOUR ADDON CONTENT
32
*/
33
​
34
const ADDON_NAME = "MoreMusic"; //Your addon's name
35
const ADDON_DESC = "Adds many songs into Vertex Client PE."; //Your addon's description
36
const ADDON_VERSION = "1.0"; //Your addon's version
37
const TARGET_VERSION = "1.6"; //Your addon's target Vertex Client PE version (in this case we use Vertex Client PE v1.0.1)
38
​
39
var modules = [];
40
var songs = [];
41
​
42
const Category = {
43
        COMBAT: 0,
44
        BUILDING: 1,
45
        MOVEMENT: 2,
46
        CHAT: 3,
47
        MISC: 4
48
}
49
​
50
/**
51
 *      CUSTOM MODULES
52
 */
53
​
54
//registerSong(new Song("song name", "song artist", "song url")); //example
55
registerSong(new Song("Why We Lose (feat. Coleman Trapp) [NCS Release]", "Cartoon", "http://nocopyrightsounds.co.uk/video/cartoon-why-we-lose-feat-coleman-trapp-ncs-release/?download=1")); 
56
registerSong(new Song("Eternal Minds [NCS Release]", "Waysons", "http://nocopyrightsounds.co.uk/video/waysons-eternal-minds-ncs-release/?download=1")); 
57
registerSong(new Song("Change Your Ways (feat. Charlotte Haining) [NCS Release]", "High Maintenance", "http://nocopyrightsounds.co.uk/video/high-maintenance-change-your-ways-feat-charlotte-haining-ncs-release/?download=1")); 
58
​
59
/*
60
var exampleModule = {
61
        name: "Example toggleable module",
62
        desc: "Example description.",
63
        category: Category.MOVEMENT,
64
        type: "Mod",
65
        state: false,
66
        isStateMod: function() {
67
                return true;
68
        },
69
        onToggle: function() {
70
                this.state = !this.state;
71
                if(this.state) {
72
                        //do something when this module is enabled
73
                } else {
74
                        //do something when this module is disabled
75
                }
76
        },
77
        onTick: function() {
78
                //this will get called in modTick when the mod is enabled, also possible: onUseItem, onAttack, onHurt, onChat etcetera (add these functions separated by a comma, like what I did with onUseItem in this module)

		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			//do something when this module is enabled
		} else {
			//do something when this module is disabled
		}
	},
	onTick: function() {
		//this will get called in modTick when the mod is enabled, also possible: onUseItem, onAttack, onHurt, onChat etcetera (add these functions separated by a comma, like what I did with onUseItem in this module)
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		//add your useItem code for this mod here
	}
};

registerModule(exampleModule);

***************************************************************************************************************

Other parameters you can add to your modules are the following:

getSettingsLayout: function() {
  var settingsLayout = new LinearLayout(ctx);
  //add extra widgets (such as buttons and texts) in here, they will be displayed in a mod's ... dialog
  return settingsLayout;
},
onModDialogDismiss: function() {
  //this will be called when an user closes a mod's ... dialog
},
canBypassYesCheatPlus: function() {
  return false; //if the mod should be blocked by YesCheat+
}

If you want to store a variable in a module, simply add it like this: yourVariableName: yourVariableValue just like other parameters.
You can call this variable from within the module using this.yourVariableName.

It's still possible to use normal vars within the module's functions (onUseItem, onTick etcetera)

***************************************************************************************************************

var secondExampleModule = {
	name: "Example non-toggleable module",
	desc: "Example description.",
	category: Category.COMBAT,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		//do something when an user taps on this mod's button
	}
};

registerModule(secondExampleModule);

***************************************************************************************************************
Other functions and variables you can use in your addon are the following:
##################################
callFunction(functionName, propArray);
>> Example: callFunction("nuke", [getPlayerX(), getPlayerY(), getPlayerZ(), 3, "cube"]); <<
^^ In this example it will call Vertex Client PE's nuke function without having to copy the whole function into your addon. This also works for other functions. ^^
!! Make sure to put the parameters in an array, otherwise it won't work!
----------------------------------
Launcher.isBlockLauncher();
>> Example: Launcher.isBlockLauncher(); <<
^^ This will return true if the user uses BlockLauncher. If not, it will return false.
----------------------------------
Launcher.isToolbox();
>> Example: Launcher.isToolbox(); <<
^^ This will return true if the user uses the Toolbox launcher. If not, it will return false.
----------------------------------
Launcher.isMcpeMaster();
>> Example: Launcher.isMcpeMaster(); <<
^^ This will return true if the user uses the MCPE Master launcher. If not, it will return false.
##################################
***************************************************************************************************************

*/

/**
 *	PART 2 OF THE FUNCTION LIBRARY (DON'T EDIT)
 */

function addonLoadHook() {
	if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
		net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("registerAddon", [ADDON_NAME, ADDON_DESC, ADDON_VERSION, TARGET_VERSION, modules, songs]);
	}
	if(Launcher.isMcpeMaster()) {
		com.mcbox.pesdk.mcpelauncher.ScriptManager.callScriptMethod("registerAddon", [ADDON_NAME, ADDON_DESC, ADDON_VERSION, TARGET_VERSION, modules, songs]);
	}
}

function registerModule(obj) {
	obj.source = ADDON_NAME;
	modules.push(obj);
}

function registerSong(song) {
	try {
		if(!(song instanceof Song)) {
			throw new TypeError("The registered value is not of the type Song.");
			return;
		}
		song.source = ADDON_NAME;
		songs.push(song);
	} catch(e) {
		if(e instanceof TypeError) {
			print("TypeError: " + e);
		}
	}
}

function callFunction(functionName, propArray) {
	if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
		net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod(functionName, propArray);
	}
	if(Launcher.isMcpeMaster()) {
		com.mcbox.pesdk.mcpelauncher.ScriptManager.callScriptMethod(functionName, propArray);
	}
}
