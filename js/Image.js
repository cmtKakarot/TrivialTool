//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE STRUCTURE --------------------------------------
//---------------------------------------------------------------------------------------
 
function ImageData(link, sols, author) {
    this.link = link;
    this.author = author;
    this.sols = sols;
    this.used = false;
    this.used2 = false;
    this.time = 15;
}
 
function XmasSongData(link, time) {
	this.link = link;
	this.time = time;
	this.ttime = time;
	this.used = false;
}

function MemeSongData(link) {
	this.link = link;
	this.used = false;
}

//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE DATABASE --------------------------------------
//---------------------------------------------------------------------------------------
 
var TestVec = [
	new ImageData("../src/images/imt/0T.jpg", ["Shrek"], "Veyron"),
	new ImageData("../src/images/imt/1T.jpg", ["Shrek"], "Veyron"),
	new ImageData("../src/images/imt/2T.jpg", ["Shrek"], "Veyron"),
	new ImageData("../src/images/imt/3T.jpg", ["Shrek"], "Veyron"),
	new ImageData("../src/images/imt/4T.png", ["Shrek"], "Veyron"),
	];
 
//26
var EricVec = [
	new ImageData("../src/images/imt/2.png", ["Final Fantasy X"], "Eric"),
    new ImageData("../src/images/imt/1.png", ["Metal Gear Solid 3"], "Eric"),
    new ImageData("../src/images/imt/1.jpg", ["Persona 4"], "Eric"),
    new ImageData("../src/images/imt/29.jpg", ["Metal Gear Solid 2"], "Eric"),
    new ImageData("../src/images/imt/20.png", ["Dofus"], "Eric"),
    new ImageData("../src/images/imt/30.jpg", ["Skyward Sword"], "Eric"),
    new ImageData("../src/images/imt/31.jpg", ["Rust"], "Eric"),
    new ImageData("../src/images/imt/21.png", ["Dissidia NT"], "Eric"),
    new ImageData("../src/images/imt/32.jpg", ["Fire Emblem Heroes"], "Eric"),
    new ImageData("../src/images/imt/33.jpg", ["Clash Royale"], "Eric"),
    new ImageData("../src/images/imt/34.jpg", ["Kid Icarus Uprising"], "Eric"),
    new ImageData("../src/images/imt/35.jpg", ["Baten Kaitos"], "Eric"),
    new ImageData("../src/images/imt/70.jpg", ["Osu!"], "Eric"),
    new ImageData("../src/images/imt/71.jpg", ["Persona 5: Dancing Star Night"], "Eric"),
    new ImageData("../src/images/imt/72.jpg", ["Osu!"], "Eric"),
    new ImageData("../src/images/imt/73.jpg", ["Persona 4: Dancing all Night"], "Eric"),
    new ImageData("../src/images/imt/74.jpg", ["Soul Calibur 2"], "Eric"),
    new ImageData("../src/images/imt/75.jpg", ["Tekken x Street Fighter"], "Eric"),
    new ImageData("../src/images/imt/76.jpg", ["Okami"], "Eric"),
    new ImageData("../src/images/imt/77.jpg", ["Ultimate Marvel vs Capcom 3"], "Eric"),
    new ImageData("../src/images/imt/78.jpg", ["Persona 4: Arena"], "Eric"),
    new ImageData("../src/images/imt/79.jpg", ["Tony Hawk's Pro Skater 2"], "Eric"),
    new ImageData("../src/images/imt/80.jpg", ["Metal Gear Solid V"], "Eric"),
    new ImageData("../src/images/imt/81.jpg", ["Super Smash Bros Brawl"], "Eric"),
    new ImageData("../src/images/imt/82.jpg", ["Kingdom Hears 3D"], "Eric"),
    new ImageData("../src/images/imt/83.jpg", ["Soul Calibur 4"], "Eric"),
    new ImageData("../src/images/imt/84.jpg", ["Osu Tatakae Ouendan 2"], "Eric"),
    new ImageData("../src/images/imt/112.jpg", ["Breath of the Wild"], "Eric"),
];

//10
var FerVec = [
	new ImageData("../src/images/imt/3.png", ["Mario Party 4"], "Fernando"),
    new ImageData("../src/images/imt/4.png", ["Final Fantasy VII"], "Fernando"),
    new ImageData("../src/images/imt/5.png", ["Street Fighter II"], "Fernando"),
    new ImageData("../src/images/imt/6.png", ["Call of duty Black Ops 2"], "Fernando"),
    new ImageData("../src/images/imt/11.png", ["Touhou 8"], "Fernando"),
    new ImageData("../src/images/imt/65.jpg", ["Conker's bad fur day"], "Fernando"),
    new ImageData("../src/images/imt/66.jpg", ["Halo 2"], "Fernando"),
    new ImageData("../src/images/imt/67.jpg", ["Metroid prime"], "Fernando"),
    new ImageData("../src/images/imt/68.jpg", ["Shadow of the Colossus"], "Fernando"),
    new ImageData("../src/images/imt/69.jpg", ["Wii Fit"], "Fernando"),
];

//29
var MarcVec = [
	new ImageData("../src/images/imt/2.jpg", ["Golden Sun 2"], "Marc"),
    new ImageData("../src/images/imt/7.png", ["Bravely Default"], "Marc"),
    new ImageData("../src/images/imt/3.jpg", ["Tales of Phantasia"], "Marc"),
    new ImageData("../src/images/imt/4.jpg", ["Dragon Ball Adventure"], "Marc"),
    new ImageData("../src/images/imt/5.jpg", ["Fire Emblem Echoes"], "Marc"),
    new ImageData("../src/images/imt/6.jpg", ["Ace Attorney: Dual Destinies"], "Marc"),
    new ImageData("../src/images/imt/7.jpg", ["Monster Hunter 4 Ultimate"], "Marc"),
    new ImageData("../src/images/imt/8.jpg", ["Pokemon X/Y"], "Marc"),
    new ImageData("../src/images/imt/9.jpg", ["Virtue's Last Reward"], "Marc"),
    new ImageData("../src/images/imt/8.png", ["Pokemon Crystal"], "Marc"),
    new ImageData("../src/images/imt/10.jpg", ["Fire Emblem: Path of Radiance"], "Marc"),
    new ImageData("../src/images/imt/11.jpg", ["Fire Emblem: Path of Radiance"], "Marc"),
    new ImageData("../src/images/imt/12.jpg", ["Mario Kart: Double Dash"], "Marc"),
    new ImageData("../src/images/imt/13.jpg", ["Link's Awakening"], "Marc"),
    new ImageData("../src/images/imt/14.jpg", ["Link's Awakening"], "Marc"),
    new ImageData("../src/images/imt/15.jpg", ["Metroid Prime"], "Marc"),
    new ImageData("../src/images/imt/16.jpg", ["Metroid Prime 2"], "Marc"),
    new ImageData("../src/images/imt/9.png", ["Metroid Prime 3"], "Marc"),
    new ImageData("../src/images/imt/10.png", ["Metroid Prime Hunters"], "Marc"),
    new ImageData("../src/images/imt/17.jpg", ["Metroid Federation Forces"], "Marc"),
    new ImageData("../src/images/imt/37.jpg", ["Persona 5"], "Marc"),
    new ImageData("../src/images/imt/38.jpg", ["Persona 4"], "Marc"),
    new ImageData("../src/images/imt/39.jpg", ["Mario Power Tennis GBA"], "Marc"),
    new ImageData("../src/images/imt/40.jpg", ["Kid Icarus Uprising"], "Marc"),
    new ImageData("../src/images/imt/29.png", ["Ace Attorney: Apollo Justice"], "Marc"),
    new ImageData("../src/images/imt/41.jpg", ["Ace Attorney: Spirit of Justice"], "Marc"),
    new ImageData("../src/images/imt/42.jpg", ["Pokemon OR/AS"], "Marc"),
    new ImageData("../src/images/imt/43.jpg", ["Pokemon Sun/Moon"], "Marc"),
    new ImageData("../src/images/imt/44.jpg", ["Pokemon Ultra Sun/Moon"], "Marc"),
    new ImageData("../src/images/imt/45.jpg", ["Xenoblade Chronicle X"], "Marc"),
];

//44
var GrewVec = [
	new ImageData("../src/images/imt/18.jpg", ["Dragon Ball Veyronverse 2"], "Gerard"),
    new ImageData("../src/images/imt/12.png", ["Pikmin"], "Gerard"),
    new ImageData("../src/images/imt/19.jpg", ["Smash Bros 4 3DS"], "Gerard"),
    new ImageData("../src/images/imt/13.png", ["AC: Happy Home Designer"], "Gerard"),
    new ImageData("../src/images/imt/20.jpg", ["Dr Luigi"], "Gerard"),
    new ImageData("../src/images/imt/21.jpg", ["Earthbound"], "Gerard"),
    new ImageData("../src/images/imt/22.jpg", ["Luigi's Mansion 2"], "Gerard"),
    new ImageData("../src/images/imt/23.jpg", ["Luigi's Mansion 2"], "Gerard"),
    new ImageData("../src/images/imt/24.jpg", ["Luigi's Mansion"], "Gerard"),
    new ImageData("../src/images/imt/25.jpg", ["NintendoLand"], "Gerard"),
    new ImageData("../src/images/imt/26.jpg", ["Pikmin 2"], "Gerard"),
    new ImageData("../src/images/imt/27.jpg", ["Pikmin 3"], "Gerard"),
    new ImageData("../src/images/imt/28.jpg", ["Smash Bros 4 WiiU"], "Gerard"),
    new ImageData("../src/images/imt/35.png", ["Banjo Tooie"], "Gerard"),
    new ImageData("../src/images/imt/90.jpg", ["Bioshock"], "Gerard"),
    new ImageData("../src/images/imt/91.jpg", ["Cuphead"], "Gerard"),
    new ImageData("../src/images/imt/36.png", ["Danganronpa"], "Gerard"),
    new ImageData("../src/images/imt/37.png", ["Ultra Despair Girls"], "Gerard"),
    new ImageData("../src/images/imt/92.jpg", ["Danganronpa V3"], "Gerard"),
    new ImageData("../src/images/imt/93.jpg", ["Danganronpa V3"], "Gerard"),
    new ImageData("../src/images/imt/94.jpg", ["A Dad Dating Simulator"], "Gerard"),
    new ImageData("../src/images/imt/95.jpg", ["Hatoful Boyfriend"], "Gerard"),
    new ImageData("../src/images/imt/96.jpg", ["Hey you, Pikachu!"], "Gerard"),
    new ImageData("../src/images/imt/97.jpg", ["Limbo"], "Gerard"),
    new ImageData("../src/images/imt/98.jpg", ["Majora's Mask"], "Gerard"),
    new ImageData("../src/images/imt/38.png", ["Persona 5"], "Gerard"),
    new ImageData("../src/images/imt/99.jpg", ["Owlboy"], "Gerard"),
    new ImageData("../src/images/imt/39.png", ["Ocarina of Time"], "Gerard"),
    new ImageData("../src/images/imt/100.jpg", ["Yooka Laylee"], "Gerard"),
    new ImageData("../src/images/imt/101.jpg", ["Ori and the blind forest"], "Gerard"),
    new ImageData("../src/images/imt/102.jpg", ["Super Mario Maker"], "Gerard"),
    new ImageData("../src/images/imt/103.jpg", ["Super Mario Maker"], "Gerard"),
    new ImageData("../src/images/imt/104.jpg", ["One Thousand Lies"], "Gerard"),
    new ImageData("../src/images/imt/105.jpg", ["Sonic Forces"], "Gerard"),
    new ImageData("../src/images/imt/106.jpg", ["Xenosuk Chronicles 2"], "Gerard"),
    new ImageData("../src/images/imt/107.jpg", ["Second Life"], "Gerard"),
    new ImageData("../src/images/imt/108.jpg", ["Metal Gear Solid"], "Gerard"),
    new ImageData("../src/images/imt/113.jpg", ["Tony Hawk's Pro Skater"], "Gerard"),
    new ImageData("../src/images/imt/114.jpg", ["Shrek Game Boy"], "Gerard"),
    new ImageData("../src/images/imt/115.jpg", ["Shenmue"], "Gerard"),
    new ImageData("../src/images/imt/116.jpg", ["Parappa the Rapper"], "Gerard"),
    new ImageData("../src/images/imt/117.jpg", ["WarioWare: Smooth Moves"], "Gerard"),
    new ImageData("../src/images/imt/118.jpg", ["Grush"], "Gerard"),
    new ImageData("../src/images/imt/119.jpg", ["Metroid"], "Gerard"),
];

//10
var KanoVec = [
	new ImageData("../src/images/imt/14.png", ["A Hat in Time"], "Kano"),
    new ImageData("../src/images/imt/15.png", ["Danganronpa V3"], "Kano"),
    new ImageData("../src/images/imt/16.png", ["Enter the Gungeon"], "Kano"),
    new ImageData("../src/images/imt/17.png", ["Civilization VI"], "Kano"),
    new ImageData("../src/images/imt/18.png", ["Ori and the Blind Forest"], "Kano"),
    new ImageData("../src/images/imt/19.png", ["Shovel Knight"], "Kano"),
    new ImageData("../src/images/imt/109.jpg", ["Garry's Mod"], "Kano"),
    new ImageData("../src/images/imt/110.jpg", ["Overwatch"], "Kano"),
    new ImageData("../src/images/imt/41.png", ["Portal 2"], "Kano"),
    new ImageData("../src/images/imt/111.jpg", ["Sonic Generations"], "Kano"),
];

//17
var YerayVec = [
    new ImageData("../src/images/imt/22.png", ["Majora's Mask"], "Yeray"),
    new ImageData("../src/images/imt/23.png", ["A Hat in Time"], "Yeray"),
    new ImageData("../src/images/imt/24.png", ["Sonic Adventure 2"], "Yeray"),
    new ImageData("../src/images/imt/25.png", ["Spyro 2"], "Yeray"),
    new ImageData("../src/images/imt/36.jpg", ["Ratchet and Clank: Tools of Destruction"], "Yeray"),
    new ImageData("../src/images/imt/26.png", ["Portal"], "Yeray"),
    new ImageData("../src/images/imt/27.png", ["Kingdom Hearts 1"], "Yeray"),
    new ImageData("../src/images/imt/28.png", ["Castle Crashers"], "Yeray"),
    new ImageData("../src/images/imt/85.jpg", ["Final Fantasy VII"], "Yeray"),
    new ImageData("../src/images/imt/86.jpg", ["Phoenix Wright: Ace Attorney"], "Yeray"),
    new ImageData("../src/images/imt/87.jpg", ["Touhou 8"], "Yeray"),
    new ImageData("../src/images/imt/88.jpg", ["Final Fantasy 8"], "Yeray"),
    new ImageData("../src/images/imt/89.jpg", ["Binding of Isaac"], "Yeray"),
    new ImageData("../src/images/imt/32.png", ["Persona 5"], "Yeray"),
    new ImageData("../src/images/imt/33.png", ["Sonic R"], "Yeray"),
    new ImageData("../src/images/imt/34.png", ["Undertale"], "Yeray"),
    new ImageData("../src/images/imt/40.png", ["A Link to the Past"], "Yeray"),
];

//20
var EliraVec = [
    new ImageData("../src/images/imt/46.jpg", ["Danganronpa 2"], "Elira"),
    new ImageData("../src/images/imt/47.jpg", ["Banjo Tooie"], "Elira"),
    new ImageData("../src/images/imt/48.jpg", ["Bastion"], "Elira"),
    new ImageData("../src/images/imt/49.jpg", ["Bravely Default"], "Elira"),
    new ImageData("../src/images/imt/50.jpg", ["Child of Light"], "Elira"),
    new ImageData("../src/images/imt/51.jpg", ["Crystal Chronicles"], "Elira"),
    new ImageData("../src/images/imt/52.jpg", ["Diddy Kong Racing"], "Elira"),
    new ImageData("../src/images/imt/53.jpg", ["Donkey Kong 64"], "Elira"),
    new ImageData("../src/images/imt/54.jpg", ["Donkey Kong 64"], "Elira"),
    new ImageData("../src/images/imt/55.jpg", ["Final Fantasy VIII"], "Elira"),
    new ImageData("../src/images/imt/56.jpg", ["Kingdom Hearts 258/2"], "Elira"),
    new ImageData("../src/images/imt/57.jpg", ["Ori and the blind forest"], "Elira"),
    new ImageData("../src/images/imt/30.png", ["Majora's Mask"], "Elira"),
    new ImageData("../src/images/imt/58.jpg", ["Smash Bros Melee"], "Elira"),
    new ImageData("../src/images/imt/31.png", ["Mickey Mania"], "Elira"),
    new ImageData("../src/images/imt/59.jpg", ["Persona 4"], "Elira"),
    new ImageData("../src/images/imt/60.jpg", ["Pokemon OR/AS"], "Elira"),
    new ImageData("../src/images/imt/61.jpg", ["Pokemon GO"], "Elira"),
    new ImageData("../src/images/imt/62.jpg", ["Sushi Striker"], "Elira"),
    new ImageData("../src/images/imt/63.jpg", ["Twilight Princess"], "Elira"),
    new ImageData("../src/images/imt/64.jpg", ["Xenoblade Chronicles X"], "Elira"),
 ];
 
 var MarcPQVec = [
	new ImageData("../src/images/imt/120.jpg", ["Dark Souls"], "MarcPQ"),
	new ImageData("../src/images/imt/121.jpg", ["Golden Sun 2"], "MarcPQ"),
	new ImageData("../src/images/imt/122.jpg", ["Ib"], "MarcPQ"),
	new ImageData("../src/images/imt/123.jpg", ["Yugioh Forbidden Memories"], "MarcPQ"),
	new ImageData("../src/images/imt/124.jpg", ["Devil Daggers"], "MarcPQ"),
	new ImageData("../src/images/imt/126.jpg", ["Digimon Rumble Arena"], "MarcPQ"),
	new ImageData("../src/images/imt/127.jpg", ["Earthworm Jim"], "MarcPQ"),
	new ImageData("../src/images/imt/128.jpg", ["Lost Magic"], "MarcPQ"),
	new ImageData("../src/images/imt/129.jpg", ["Xenoblade Chronicles 2"], "MarcPQ"),
	new ImageData("../src/images/imt/130.jpg", ["LSD Dream Emulator"], "MarcPQ"),
	new ImageData("../src/images/imt/132.jpg", ["Spec Ops: The Line"], "MarcPQ"),
	new ImageData("../src/images/imt/139.jpg", ["Pandora's Tower"], "MarcPQ"),
];

var CrisPQVec = [
	new ImageData("../src/images/imt/125.jpg", ["Talmit's adventure"], "CrisPQ"),
	new ImageData("../src/images/imt/133.jpg", ["Kula World"], "CrisPQ"),
	new ImageData("../src/images/imt/131.jpg", ["The Blue Brothers"], "CrisPQ"),
	new ImageData("../src/images/imt/134.jpg", ["Bomberman Generation"], "CrisPQ"),
	new ImageData("../src/images/imt/135.jpg", ["Final Fantasy Tactics"], "CrisPQ"),
	new ImageData("../src/images/imt/136.jpg", ["Dragon's Lair"], "CrisPQ"),
	new ImageData("../src/images/imt/137.jpg", ["Hamtaro Ham Ham Games"], "CrisPQ"),
	new ImageData("../src/images/imt/138.jpg", ["The Witch's House"], "CrisPQ"),
	new ImageData("../src/images/imt/140.jpg", ["Shining Force"], "CrisPQ"),
	new ImageData("../src/images/imt/141.jpg", ["Final Fantasy: Echoes of Time"], "CrisPQ"),
	new ImageData("../src/images/imt/142.jpg", ["Final Fantasy 12: Revenant Wings"], "CrisPQ"),
	new ImageData("../src/images/imt/143.jpg", ["Another Code R"], "CrisPQ"),
	new ImageData("../src/images/imt/144.jpg", ["Bubble Bobble"], "CrisPQ"),
	new ImageData("../src/images/imt/145.jpg", ["Frogger"], "CrisPQ"),
	new ImageData("../src/images/imt/146.jpg", ["Advance Wars: Dark Conflict"], "CrisPQ"),
];

var Cp2Vec = [
	new ImageData("../src/images/imt/42.png", ["Bioshock"], "Cp2"),
	new ImageData("../src/images/imt/43.png", ["Borderlands 2"], "Cp2"),
	new ImageData("../src/images/imt/44.png", ["Civilization VI"], "Cp2"),
	new ImageData("../src/images/imt/45.png", ["Doom"], "Cp2"),
	new ImageData("../src/images/imt/46.png", ["Dark souls 3"], "Cp2"),
	new ImageData("../src/images/imt/47.png", ["Mirror's Edge"], "Cp2"),
	new ImageData("../src/images/imt/48.png", ["Ori and the blind forest"], "Cp2"),
	new ImageData("../src/images/imt/49.png", ["Sacred"], "Cp2"),
	new ImageData("../src/images/imt/50.png", ["Team Fortress 2"], "Cp2"),
	new ImageData("../src/images/imt/51.png", ["The witcher 3: Wild hunt"], "Cp2"),
	new ImageData("../src/images/imt/52.png", ["Fallout 4"], "Cp2"),
	new ImageData("../src/images/imt/53.png", ["Half life 2"], "Cp2"),
	new ImageData("../src/images/imt/54.png", ["Mass Effect 3"], "Cp2"),
	new ImageData("../src/images/imt/55.png", ["GTA Vice City"], "Cp2"),
];

 var XmasVec = [
	new XmasSongData("../src/music/other/xmas1.mp3",174),
	new XmasSongData("../src/music/other/xmas2.mp3",213),
	new XmasSongData("../src/music/other/xmas3.mp3",182),
	new XmasSongData("../src/music/other/xmas4.mp3",283),
	new XmasSongData("../src/music/other/xmas5.mp3",121),
	new XmasSongData("../src/music/other/xmas6.mp3",217),
	new XmasSongData("../src/music/other/xmas7.mp3",321),
];
	

var VeyronVec = [
	new MemeSongData("../src/music/other/veyron1.ogg"),
];

var IvanVec = [
	new MemeSongData("../src/music/other/ivan1.ogg"),
	new MemeSongData("../src/music/other/ivan2.ogg"),
	new MemeSongData("../src/music/other/ivan3.ogg"),
	new MemeSongData("../src/music/other/ivan4.ogg"),
	new MemeSongData("../src/music/other/ivan5.ogg"),
	new MemeSongData("../src/music/other/ivan6.ogg"),
];
	
//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------
 
var Nused = 0;
var Nused2 = 0;
var NGo = 0;
var Hhit = 0;
var score = 0;
var i = 0;
var j = 0;
var r = 0;
var x = 0;
var objection = true;
var solr = 0;
var interval;
var interval2;
var solvec = [];
var ImageVec = [];
var ImageMat = [EricVec,FerVec,GrewVec,KanoVec,MarcVec,YerayVec,EliraVec,MarcPQVec,CrisPQVec,Cp2Vec];
//var ImageMat = [Cp2Vec];
//var ImageMat = [TestVec];
var itot = 100;

//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCTIONS --------------------------------------
//---------------------------------------------------------------------------------------
 
 function fill_vec() {
	var ns = 0;
	var rot = 0;
	while (ns < itot) {
		var ran = Math.floor((Math.random() * ImageMat[rot].length));
		while(ImageMat[rot][ran].used2) {
			ran = Math.floor((Math.random() * ImageMat[rot].length));
		}
		ImageVec.push(ImageMat[rot][ran])
		ImageMat[rot][ran].used2 = true;
		ns = ns + 1;
		rot = rot + 1;
		if(rot == ImageMat.length) {
			rot = 0;
		}
	}
 }
 
 function show_name() {
	document.getElementById("Last").innerHTML = "Imagen de " + ImageVec[x].author
	$(".suck").show();
}

 function show_meme() {
	i = Math.floor((Math.random() * 100));
	if (i <= 5) {
		if(!VeyronVec[0].used) {
			$("#Song2").attr("src", VeyronVec[0].link);
			$("body").css("backgroundImage","url(../src/images/other/veyron.png)");
			VeyronVec[0].used = true;
		}
	}
	else if (i <= 10) {
		j = Math.floor((Math.random() * IvanVec.length));
		if(!IvanVec[j].used) {
			$("#Song2").attr("src", IvanVec[j].link);
			$("body").css("backgroundImage","url(../src/images/other/ivan.png)");
			IvanVec[j].used = true;
		}
	}	 
}

function next() {
	$("body").css("backgroundImage","url(../src/images/other/xmas.png)");
	show_meme();
    ++Nused
    ImageVec[x].used = true;
    x = Math.floor((Math.random() * ImageVec.length));
    if (Nused < ImageVec.length) {
		while(ImageVec[x].used == true) {
			x = Math.floor((Math.random() * ImageVec.length));
        }
        solvec.push(ImageVec[x].sols[0]);
        show_name();
        $("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
        document.getElementById("demo").innerHTML = ImageVec[x].time;
        $("#demo").show()
     }
}
 
function next_xmas() {
    ++Nused2
    XmasVec[r].used = true;
    r = Math.floor((Math.random() * XmasVec.length));
    if (Nused2 < XmasVec.length) {
		while(XmasVec[r].used == true) {
			r = Math.floor((Math.random() * XmasVec.length));
        }
        $("#Song").attr("src", XmasVec[r].link);
     }
     else {
		 Nused2 = 0;
		 for(var it = 0; it < XmasVec.length; it++) {
			 XmasVec[it].used = false;
			 XmasVec[it].time = XmasVec[it].ttime;
		 }
		 r = Math.floor((Math.random() * XmasVec.length));
		 $("#Song").attr("src", XmasVec[r].link);
	 }
}

//---------------------------------------------------------------------------------------
//--------------------------------- MAIN CODE -------------------------------------------
//---------------------------------------------------------------------------------------
 
$(document).ready(function() {
	$("#Song").prop("volume", 0.25);
	fill_vec();
	x = Math.floor((Math.random() * ImageVec.length));
	r = Math.floor((Math.random() * XmasVec.length));
	solvec.push(ImageVec[x].sols[0]);
	$("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
	document.getElementById("demo").innerHTML = ImageVec[x].time;
	$("#Song").attr("src", XmasVec[r].link);
	interval = setInterval(function() {
			--ImageVec[x].time;
			document.getElementById("demo").innerHTML = ImageVec[x].time;
			if(ImageVec[x].time == -1) {
				$("#demo").hide()
				document.getElementById("Last").innerHTML = "Solución: " + ImageVec[x].sols[0]
			}
			else if(ImageVec[x].time == -6) {
				next();
			} 
		},1000);
	show_name();
		interval2 = setInterval(function() {
			--XmasVec[r].time;
			if(XmasVec[r].time <= 0) {
				next_xmas()
			}
		},1000);
    $("body").keyup(function(event){
        if(event.keyCode == 13) next();
    });
});
