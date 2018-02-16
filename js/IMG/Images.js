//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE DATABASE --------------------------------------
//---------------------------------------------------------------------------------------

//Poner canciones aqui que quiero que suenen de background
 var XmasVec = [
	new XmasSongData("../../src/music/anime/17.mp3",205),
	new XmasSongData("../../src/music/mario/1.mp3",244),
	new XmasSongData("../../src/music/mario/43.mp3",178),
	new XmasSongData("../../src/music/atlus/5.mp3",254),
	new XmasSongData("../../src/music/atlus/6.mp3",236),
	new XmasSongData("../../src/music/atlus/3.mp3",264),
	new XmasSongData("../../src/music/sonic/6.mp3",243),
	new XmasSongData("../../src/music/sonic/8.mp3",258),
	new XmasSongData("../../src/music/anime/58.mp3",223),
];

//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------
 
var iter = 0;
var i = 0;
var j = 0;
var r = 0;
var x = 0;
var end = 0;
var tei = 0;
var itot = 30;
var tej = 0;
var first = true;


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
		ImageMat[rot][ran].time += 15;
		ImageVec.push(ImageMat[rot][ran])
		ImageMat[rot][ran].used2 = true;
		ns = ns + 1;
		rot = rot + 1;
		if(rot == ImageMat.length) {
			rot = 0;
		}
	}
 }

function next() {
	$("#Sol").val("");
	document.getElementById("Last").innerHTML = ""
    ++Nused
    ImageVec[x].used = true;
    if (Nused < ImageVec.length) {
		x = Math.floor((Math.random() * ImageVec.length));
		while(ImageVec[x].used == true) {
			x = Math.floor((Math.random() * ImageVec.length));
        }
        $("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
        document.getElementById("demo").innerHTML = ImageVec[x].time;
        $("#demo").show()
     }
     else {
		 end = 1;
		 //mostrar resultados
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

function check_valid() {
	var Image = ImageVec[x];
	var sol = $("#Sol").val();
	if(Image.sols[0].toLowerCase().replace(/[^0-9a-z]/gi, '') == sol.toLowerCase().replace(/[^0-9a-z]/gi, '')) {
		next();
	}
	else {
		//document.getElementById('complete').innerHTML = "";
		$("#Sol").val("");
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
	$("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
	document.getElementById("demo").innerHTML = ImageVec[x].time;
	$("#Song").attr("src", XmasVec[r].link);
	$("#Sol").show();
	interval = setInterval(function() {
			--ImageVec[x].time;
			document.getElementById("demo").innerHTML = ImageVec[x].time;
			if(ImageVec[x].time == -1) {
				$("#demo").hide()
				document.getElementById("Last").innerHTML = "Solution: " + ImageVec[x].sols[0]
			}
			else if(ImageVec[x].time == -6) {
				next();
			} 
		},1000);
		interval2 = setInterval(function() {
			--XmasVec[r].time;
			if(XmasVec[r].time <= 0 && end == 0) {
				next_xmas()
			}
		},1000);
	$("#Sol").keyup(function(event){
        if(event.keyCode == 13) check_valid();
    });
});
