//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE STRUCTURE --------------------------------------
//---------------------------------------------------------------------------------------
 
function ImageData(link, sols, author) {
    this.link = link;
    this.author = author;
    this.sols = sols;
    this.used = false;
    this.time = 30;
}
 
function XmasSongData(link, time) {
	this.link = link;
	this.time = time;
	this.ttime = time;
	this.used = false;
}

function MemeSongData(link) {
	this.link = link;
}

//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE DATABASE --------------------------------------
//---------------------------------------------------------------------------------------
 
var ImageVec = [
    new ImageData("../src/images/imt/2.png", ["Final Fantasy X"], "Eric"),
    new ImageData("../src/images/imt/1.png", ["Metal Gear Solid 3"], "Eric"),
    new ImageData("../src/images/imt/1.jpg", ["Persona 4"], "Eric"),
    new ImageData("../src/images/imt/3.png", ["Mario Party 4"], "Fernando"),
    new ImageData("../src/images/imt/4.png", ["Final Fantasy VII"], "Fernando"),
    new ImageData("../src/images/imt/5.png", ["Street Fighter II"], "Fernando"),
    new ImageData("../src/images/imt/6.png", ["Call of duty Black Ops 2"], "Fernando"),
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
    new ImageData("../src/images/imt/11.png", ["Touhou 8"], "Fernando"),
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
    new ImageData("../src/images/imt/29.jpg", ["Metal Gear Solid 2"], "Eric"),
    ];
 
 var XmasVec = [
	new XmasSongData("../src/music/other/xmas1.mp3",174),
	new XmasSongData("../src/music/other/xmas2.mp3",213),
	new XmasSongData("../src/music/other/xmas3.mp3",182),
	new XmasSongData("../src/music/other/xmas4.mp3",283),
	new XmasSongData("../src/music/other/xmas5.mp3",121),
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
 
//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCTIONS --------------------------------------
//---------------------------------------------------------------------------------------
 
 function show_sol() {
	document.getElementById("Last").innerHTML = "Juego anterior: " + ImageVec[x].sols[0] + " (" + ImageVec[x].author + ")";
	$(".suck").show();
}

 function show_meme() {
	i = Math.floor((Math.random() * 100));
	if (i <= 2) {
		$("#Song2").attr("src", VeyronVec[0].link);
		$("body").css("backgroundImage","url(../src/images/other/veyron.png)");
	}
	else if (i <= 4) {
		j = Math.floor((Math.random() * IvanVec.length));
		$("#Song2").attr("src", IvanVec[j].link);
		$("body").css("backgroundImage","url(../src/images/other/ivan.png)");
	}	 
}

function next() {
	$("body").css("backgroundImage","url(../src/images/other/xmas.png)");
	show_sol();
	show_meme();
    ++Nused
    ImageVec[x].used = true;
    x = Math.floor((Math.random() * ImageVec.length));
    if (Nused < ImageVec.length) {
		while(ImageVec[x].used == true) {
			x = Math.floor((Math.random() * ImageVec.length));
        }
        $("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
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
	x = Math.floor((Math.random() * ImageVec.length));
	r = Math.floor((Math.random() * XmasVec.length));
	$("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
	$("#Song").attr("src", XmasVec[r].link);
	interval = setInterval(function() {
			--ImageVec[x].time;
			document.getElementById("demo").innerHTML = ImageVec[x].time;
			if(ImageVec[x].time <= 0) {
				 next()
			 }
		},1000);
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
