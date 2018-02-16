//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE STRUCTURE -------------------------------------
//---------------------------------------------------------------------------------------

function MemeSongData(link) {
	this.link = link;
	this.used = false;
}

function CredData(link,author,time) {
    this.link = link;
    this.author = author;
    this.time = time;
}

//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE DATABASE --------------------------------------
//---------------------------------------------------------------------------------------
 
 var XmasVec = [
	new XmasSongData("../../src/music/other/xmas1.mp3",174),
	new XmasSongData("../../src/music/other/xmas2.mp3",213),
	new XmasSongData("../../src/music/other/xmas3.mp3",182),
	new XmasSongData("../../src/music/other/xmas4.mp3",283),
	new XmasSongData("../../src/music/other/xmas5.mp3",121),
	new XmasSongData("../../src/music/other/xmas6.mp3",217),
	new XmasSongData("../../src/music/other/xmas7.mp3",321),
];
	
var EndingVec = [
	new XmasSongData("../../src/music/other/xmasend.mp3",2080),
];

var VeyronVec = [
	new MemeSongData("../../src/music/other/veyron1.ogg"),
];

var IvanVec = [
	new MemeSongData("../../src/music/other/ivan1.ogg"),
	new MemeSongData("../../src/music/other/ivan2.ogg"),
	new MemeSongData("../../src/music/other/ivan3.ogg"),
	new MemeSongData("../../src/music/other/ivan4.ogg"),
	new MemeSongData("../../src/music/other/ivan5.ogg"),
	new MemeSongData("../../src/music/other/ivan6.ogg"),
];

var CredVec = [
	new CredData("../../src/images/icred/background.png","",8),
	new CredData("../../src/images/icred/gremar.jpg","GREWMAN & MARCBRAI",10),
	new CredData("../../src/images/icred/soria.jpg","AMICS DE SORIA",10),
	new CredData("../../src/images/icred/senpq.jpg","SENAIDA & PQBROS",10),
	new CredData("../../src/images/icred/toni.jpg","FERTILAB & FOX",10),
	new CredData("../../src/images/icred/sejua.jpg","SEJUANI MAINER",10),
	new CredData("../../src/images/icred/tiet.jpg","NOT SEJUANI MAINER, MI TIO (BANS) & NOT KAKAROT ",10),
	new CredData("../../src/images/icred/pica.jpg","POCAFERRAN",10),
	new CredData("../../src/images/icred/yeray.jpg","WAIFULOVER",10),
	new CredData("../../src/images/icred/vic.jpg","YERAY'S NAKAMA",10),
	new CredData("../../src/images/icred/kano.jpg","YOUNG KANO",10),
	new CredData("../../src/images/icred/end.png","",1),
]

//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------

var iter = 0;
var i = 0;
var j = 0;
var r = 0;
var x = 0;
var end = 0;
var interval3;
var interval4;
var itot = 105;
var tei = 0;
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
			$("body").css("backgroundImage","url(../../src/images/other/veyron.png)");
			VeyronVec[0].used = true;
		}
	}
	else if (i <= 10) {
		j = Math.floor((Math.random() * IvanVec.length));
		if(!IvanVec[j].used) {
			$("#Song2").attr("src", IvanVec[j].link);
			$("body").css("backgroundImage","url(../../src/images/other/ivan.png)");
			IvanVec[j].used = true;
		}
	}	 
}

function next_cred() {
	iter = iter + 1;
	if(iter < CredVec.length) {
		$("#Image").css("backgroundImage",'url('+CredVec[iter].link+')');
		document.getElementById("Last").innerHTML = CredVec[iter].author;
	}
	else clearInterval(interval3)
}

function show_cred() {
	$("#Image").css("backgroundImage",'url('+CredVec[iter].link+')');
	document.getElementById("Last").innerHTML = CredVec[iter].author
	interval3 = setInterval(function() {
			--CredVec[iter].time;
			if(CredVec[iter].time == -1) {
				next_cred()
			}
		},1000);
	$("#Song").attr("src", "../../src/music/other/xmascred.mp3");
	document.getElementById("TextN").innerHTML = "THANKS ALL FOR PLAYING AND SPECIAL THANKS TO ..."	
}

function next_true_ending() {
    ImageMat[tei][tej].used = true;
    tej = tej + 1;
	if (tej == ImageMat[tei].length) {
		tej = 0;
		tei = tei + 1;
		if (tei == ImageMat.length) {
			$(".game").hide();
			$("#Song").trigger("pause");
		}
	}
    while(ImageMat[tei][tej].used) {
		tej = tej + 1;
		if (tej == ImageMat[tei].length) {
			tej = 0;
			tei = tei + 1;
			if (tei == ImageMat.length) {
				$(".game").hide();
				$("#Song").trigger("pause");
			}
		}
	}
    show_name();
    $("#Image").css("backgroundImage",'url('+ImageMat[tei][tej].link+')');
    document.getElementById("demo").innerHTML = ImageMat[tei][tej].time;
    $("#demo").show()
    document.getElementById("Last").innerHTML = "Imagen de " + ImageMat[tei][tej].author;
}


function next() {
	$("body").css("backgroundImage","url(../../src/images/other/xmas.png)");
    ++Nused
    ImageVec[x].used = true;
    if (Nused < ImageVec.length) {
		//show_meme();
		x = Math.floor((Math.random() * ImageVec.length));
		while(ImageVec[x].used == true) {
			x = Math.floor((Math.random() * ImageVec.length));
        }
        show_name();
        $("#Image").css("backgroundImage",'url('+ImageVec[x].link+')');
        document.getElementById("demo").innerHTML = ImageVec[x].time;
        $("#demo").show()
     }
     else {
		 end = 1;
		 show_cred();
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

function true_ending() {
	clearInterval(interval3)
	$("#Song").attr("src", EndingVec[0].link);
	first = false;
	document.getElementById("TextN").innerHTML = "TRUE ENDING UNLOCKED!"	
	clearInterval(interval);
	clearInterval(interval2);
	while(ImageMat[tei][tej].used) {
		tej = tej + 1;
		if (tej == ImageMat[tei].length) {
			tej = 0;
			tei = tei + 1;
			if (tei == ImageMat.length) {
				$(".game").hide();
				$("#Song").trigger("pause");
			}
		}
	}
	$("#Image").css("backgroundImage",'url('+ImageMat[tei][tej].link+')');
	document.getElementById("demo").innerHTML = ImageMat[tei][tej].time;
	$("#demo").show()
	document.getElementById("Last").innerHTML = "Imagen de " + ImageMat[tei][tej].author;
	interval4 = setInterval(function() {
		--ImageMat[tei][tej].time;
		document.getElementById("demo").innerHTML = ImageMat[tei][tej].time;
		if(ImageMat[tei][tej].time == -1) {
			$("#demo").hide()
			document.getElementById("Last").innerHTML = "Solución: " + ImageMat[tei][tej].sols[0]
		}
		else if(ImageMat[tei][tej].time == -6) {
			next_true_ending();
		} 
	},1000);
			
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
			if(XmasVec[r].time <= 0 && end == 0) {
				next_xmas()
			}
		},1000);
    $("body").keyup(function(event){
        if(event.keyCode == 13) ImageVec[x].time = 0;
    });
    $("body").keyup(function(event){
        if(event.keyCode == 187) {
			if (end == 1) {
				if (first) true_ending();
				else ImageMat[tei][tej].time = 0;
			}
		}
    });
});
