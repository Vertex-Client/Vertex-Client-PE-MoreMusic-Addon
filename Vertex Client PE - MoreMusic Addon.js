/**
*  Library made by peacestorm
*  © 2017
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

function Song(songTitle, songArtist, songUrl, songGenre) {
    this.title = songTitle || "Unknown";
    this.artist = songArtist || "Unknown";
	this.genre = songGenre || "Unknown";
    this.url = songUrl;
}

/**
* YOUR ADDON CONTENT
*/

const ADDON_NAME = "MoreMusic"; //Your addon's name
const ADDON_DESC = "Adds many songs into Vertex Client PE."; //Your addon's description
const ADDON_VERSION = "1.0"; //Your addon's version
const TARGET_VERSION = "1.9"; //Your addon's target Vertex Client PE version (in this case we use Vertex Client PE v1.9)

var modules = [];
var songs = [];
var tiles = [];

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

//registerSong(new Song("", "", "","")); 
registerSong(new Song("Why We Lose (feat. Coleman Trapp) [NCS Release]", "Cartoon", "http://files-cdn.nocopyrightsounds.co.uk/Cartoon%20-%20Why%20We%20Lose%20%28ft.%20Coleman%20Trapp%29.mp3"));
registerSong(new Song("Eternal Minds [NCS Release]", "Waysons", "http://files-cdn.nocopyrightsounds.co.uk/Waysons%20-%20Eternal%20Minds.mp3"));
registerSong(new Song("Change Your Ways (feat. Charlotte Haining) [NCS Release]", "High Maintenance", "http://files-cdn.nocopyrightsounds.co.uk/High%20Maintenance%20-%20Change%20Your%20Ways%20%28feat.%20Charlotte%20Haining%29.mp3"));
registerSong(new Song("Aperture [NCS Release]", "Unison", "http://files-cdn.nocopyrightsounds.co.uk/Unison-Aperture.mp3"));
registerSong(new Song("Vibe [NCS Release]", "Ash O’Connor", "http://files-cdn.nocopyrightsounds.co.uk/Ash%20OConnor%20-%20Vibe.mp3"));
registerSong(new Song("You. & Me? [NCS Release]", "ZEST", "http://files-cdn.nocopyrightsounds.co.uk/ZEST%20-%20You.%20%26%20I.mp3"));
registerSong(new Song("Which Direction? [NCS Release]", "Anikdote", "http://files-cdn.nocopyrightsounds.co.uk/ANIKDOTE%20-%20Which%20Direction_%20.mp3"));
registerSong(new Song("Blinded (feat. Kosta & Theo Hoarau) [NCS Release]", "Fytch", "http://files-cdn.nocopyrightsounds.co.uk/Fytch%20-%20Blinded%20%28ft.%20Kosta%20%26%20Theo%20Hoarau%29.mp3"));
registerSong(new Song("This Life (feat. Johnning) [NCS Release]", "OLWIK", "http://files-cdn.nocopyrightsounds.co.uk/OLWIK%20-%20This%20Life%20%28feat%20Johnning%29.mp3"));
registerSong(new Song("Alone [NCS Release]", "Main Reaktor", "http://files-cdn.nocopyrightsounds.co.uk/Main%20Reaktor%20-%20Alone.mp3"));
registerSong(new Song("Skyline", "Audioscribe", "http://files-cdn.nocopyrightsounds.co.uk/Skyline%20by%20Audioscribe.mp3"));
registerSong(new Song("Adventure Time [NCS Release]", "Music Predators", "http://files-cdn.nocopyrightsounds.co.uk/Music%20Predators%20-%20Adventure%20Time.mp3"));
registerSong(new Song("Last Summer [NCS Release]", "Warptech", "http://files-cdn.nocopyrightsounds.co.uk/Warptech%20-%20Last%20Summer.mp3"));
registerSong(new Song("California (feat. Corey Saxon) [NCS Release]", "Luke Carpenter & John Ross", "http://files-cdn.nocopyrightsounds.co.uk/Luke%20Carpenter%20%26%20John%20Ross%20-%20California%20%28feat.%20Corey%20Saxon%29.mp3"));
registerSong(new Song("Loud & Clear (feat. Richard Caddock) [NCS Release]", "Joe Garston", "http://files-cdn.nocopyrightsounds.co.uk/Joe%20Garston%20-%20Loud%20%26%20Clear%20%28feat.%20Richard%20Caddock%29.mp3"));
registerSong(new Song("Steeper [NCS Release]", "Ash O’Connor & Curbi", "http://files-cdn.nocopyrightsounds.co.uk/Ash%20O%27Connor%20%26%20Curbi%20-%20Steeper.mp3"));
registerSong(new Song("Saved Me Now [NCS Release]", "Matthew Blake feat. Katie Boyle", "http://files-cdn.nocopyrightsounds.co.uk/Matthew%20Blake%20feat.%20Katies%20Ambition%20-%20Saved%20Me%20Now.mp3"));
registerSong(new Song("Hold On (feat. Ranja) [NCS Release]", "Elliot Berger", "http://files-cdn.nocopyrightsounds.co.uk/Elliot%20Berger%20-%20Hold%20On%20ft.%20Ranja.mp3"));
registerSong(new Song("Stay With Me (Krys Talk Remix) [NCS Release]", "Mendum", "http://files-cdn.nocopyrightsounds.co.uk/Mendum%20-%20Stay%20With%20Me%20%28Krys%20Talk%20Remix%29.mp3"));
registerSong(new Song("Up In Flumes [NCS Release]", "T-Mass", "http://files-cdn.nocopyrightsounds.co.uk/T-Mass%2C%20Up%20in%20Flumes.mp3"));
registerSong(new Song("Handsonic (feat. Jordan Virelli) [NCS Release]", "Vena Cava", "http://files-cdn.nocopyrightsounds.co.uk/Vena%20Cava%20feat.%20Jorden%20Virelli%20-%20Handsonic.mp3"));
registerSong(new Song("Rubik [NCS Release]", "Distrion & Electro-Light", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Electro-Light%20-%20Rubik%20.mp3"));
registerSong(new Song("Levitate (feat. Joe Erickson)", "JPB", "http://files-cdn.nocopyrightsounds.co.uk/JPB%20-%20Levitate%20%28feat.%20Joe%20Erickson%29.mp3"));
registerSong(new Song("The Edge [NCS Release]", "Electro Light ft. Kathryn MacLean", "http://files-cdn.nocopyrightsounds.co.uk/Electro%20Light%20feat.%20Kathryn%20MacLean%20-%20The%20Edge.mp3"));
registerSong(new Song("Away [NCS Release]", "Subtact", "http://files-cdn.nocopyrightsounds.co.uk/Subtact%20-%20Away.mp3"));

registerTile({
	text: "NoCopyrightSounds",
	color: "red",
	icon: android.R.drawable.ic_media_play,
	forceLightColor: false,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		var uri = android.net.Uri.parse("http://nocopyrightsounds.co.uk/");
		var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get().startActivity(intent);
	}
});

/*
var exampleModule = {
	name: "Example toggleable module",
	desc: "Example description.",
	category: Category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
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
		net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("registerAddon", [ADDON_NAME, ADDON_DESC, ADDON_VERSION, TARGET_VERSION, modules, songs, tiles]);
	}
	if(Launcher.isMcpeMaster()) {
		com.mcbox.pesdk.mcpelauncher.ScriptManager.callScriptMethod("registerAddon", [ADDON_NAME, ADDON_DESC, ADDON_VERSION, TARGET_VERSION, modules, songs, tiles]);
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

function registerTile(obj) {
	obj.source = ADDON_NAME;
	tiles.push(obj);
}

function callFunction(functionName, propArray) {
	if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
		net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod(functionName, propArray);
	}
	if(Launcher.isMcpeMaster()) {
		com.mcbox.pesdk.mcpelauncher.ScriptManager.callScriptMethod(functionName, propArray);
	}
}