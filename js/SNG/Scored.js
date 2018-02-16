//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCTIONS --------------------------------------
//---------------------------------------------------------------------------------------
function numero(vec) {
    var suma = 0;
    for(var t = 0; t < vec.length; ++t) {
        for(var s = 0; s < CategoryMatrix[vec[t]].length; ++s) {
            ++suma;
        }
    }
    return suma;
}

function show_res() {
	$("#Song").trigger("pause");
	$(".game").hide();
	$(".combo").hide();
	$(".suck").show();
	clearInterval(interval)
	document.getElementById("score2").innerHTML = score;
	var HhitS;
	if(NGo == 0) HhitS = 0;
	else HhitS = (Hhit/NGo) * 100;
	document.getElementById("sh").innerHTML = HhitS;
	var Ndones = (Hhit/20) * 100;
	document.getElementById("ss").innerHTML = Ndones;
	$(".res").show();
	$("body").css("backgroundImage","url(../src/images/wallpaper/black.jpg)");
}

function randomize() {
	r = Math.floor((Math.random() * vec.length));
	i = vec[r];
	j = Math.floor((Math.random() * CategoryMatrix[i].length));
}

function InitvSong() {
	var iter;
	for(iter = 0; iter < 20; ++iter) {
		randomize();
		while(CategoryMatrix[i][j].used1) {
			randomize();
		}
		vSong.push(CategoryMatrix[i][j]);
		CategoryMatrix[i][j].used1 = true;
	}
}

function show_sol() {
	$(".suck").show();
	document.getElementById("Last").innerHTML = vSong[x].sols[0];
}

function check_combo() {
	if(combo == 2) $("#c1").show();
	if(combo == 4) $("#c2").show();
	if(combo == 6) $("#c3").show();
	if(combo == 8) $("#c4").show();
	if(combo == 10) $("#c5").show();
	if(combo == 12) $("#c6").show();
	if(combo == 14) $("#c7").show();
	if(combo == 16) $("#c8").show();
	if(combo == 18) $("#c9").show();
	if(combo == 20) $("#c10").show();
}

function check_valid() {
	$("#errS").attr("src", "");
	++NGo;
	var k;
	var Song = vSong[x];
	var sol = $("#Sol").val();
	for(k = 0; k < Song.sols.length; k++) {
		if(Song.sols[k].toLowerCase().replace(/[^0-9a-z]/gi, '') == sol.toLowerCase().replace(/[^0-9a-z]/gi, '')) {
			comboBreak = 0;
			objection = false;
			++Hhit;
			++Nused;
			if (vSong[x].time >= 83) score = score + (100 * multiplier * combo);
			else score = score + (vSong[x].time * multiplier * combo);
            combo = combo + 1;
            check_combo();
			document.getElementById("score").innerHTML = score;
			vSong[x].used2 = true;
			x = Math.floor((Math.random() * vSong.length));
			$("#Sol").val("");
			if (Nused < vSong.length) {
				while(vSong[x].used2) {
					x = Math.floor((Math.random() * vSong.length));
				}
			$("#Song").attr("src", vSong[x].link);
			get_category_S();
			document.getElementById('complete').innerHTML = "";
			show_cat();
			$("#Sol").focus();
			}
			else show_res();
		}
	}
	if(objection) {
		++comboBreak;
		if(comboBreak == 3) {
			combo = 1;
			combo_break = 0;
			$(".combo").hide();
		}
		document.getElementById('complete').innerHTML = "";
		$("#Sol").val("");
		var h = Math.floor((Math.random() * Missclick.length))
		$("#errS").attr("src", Missclick[h].link);
	}
	objection = true;
}

function Error_20(){
	alert("You need to add more categories! Press Reset");
	vec = [];
}

function ResetGame() {
	var ir, ic;
	for(ir = 0; ir < CategoryMatrix.length; ++ir) {
		for(ic = 0; ic < CategoryMatrix[ir].length; ++ic) {
			CategoryMatrix[ir][ic].used1 = false;
			CategoryMatrix[ir][ic].used2 = false;
		}
	}
	Nused = 0;
	NGo = 0;
	Hhit = 0;
	score = 0;
	vec = [];
	i = 0;
	j = 0;
	r = 0;
	x = 0;
	objection = true;
	solr = 0;
	multiplier = 1;
	interval
	vSong = [];
	combo = 1;
	omboBreak = 0;
	$("#Sol").val("");
}

//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------

var Nused = 0;
var NGo = 0;
var Hhit = 0;
var score = 0;
var vec = [];
var i = 0;
var j = 0;
var r = 0;
var x = 0;
var objection = true;
var solr = 0;
var multiplier = 1;
var interval
var vSong = [];
var combo = 1;
var comboBreak = 0;

//---------------------------------------------------------------------------------------
//--------------------------------- MAIN CODE -------------------------------------------
//---------------------------------------------------------------------------------------

$(document).ready(function() {
	$(".game").hide();
	$(".combo").hide();
	$("#Acc").click(function() {
		vec = act_catV();
		Ntot = numero(vec);
		if(Ntot < 20) Error_20();
		else {
			var h2 = Math.floor((Math.random() * Ganbatte.length))
			$("#Ganbatte").attr("src", Ganbatte[h2].link);
			InitvSong();
			multiplier = (vec.length)/(CategoryMatrix.length);
			$(".cat").hide();
			document.getElementById("score").innerHTML = score;
			x = Math.floor((Math.random() * vSong.length));
			$(".game").show();
			interval = setInterval(function() {
				--vSong[x].time;
				document.getElementById("demo").innerHTML = vSong[x].time;
				if(vSong[x].time <= 0) {
					 $("#Discard").click();
				 }
			},1000);
			$("#Song").prop("volume", 0.35);
			$("#Song").attr("src", vSong[x].link);
			get_category_S();
			show_cat();
			$("#Sol").focus();
		}
    });
    $("#Sol").keyup(function(event){
        if(event.keyCode == 13) check_valid();
    });
    $(".cat").click(function(){
        $(this).hide();
    });
    $("#Reset").click(function(){
		$(".cat").show();
	});
	$("#Skip").click(function() {
		combo = 1;
		combo_break = 0;
		$(".combo").hide();
		if (Nused == 20) show_res();
		else {
			document.getElementById("score").innerHTML = score;
			randomize();
			$("#Sol").val("");
			x = x + 1;
			if (x == 20) x = 0;
			while(vSong[x].used2 == true) {
				x = x + 1;
			}
			$("#Song").attr("src", vSong[x].link);
			get_category_S();
			document.getElementById('complete').innerHTML = "";
			show_cat();
			$("#Sol").focus();
		}
	});
	$("#Discard").click(function() {
		score = score - 30;
        combo = 1;
		combo_break = 0;
		$(".combo").hide();
		++Nused;
		vSong[x].used2 = true;
		show_sol();
		if (Nused == 20) show_res();
		else {
			document.getElementById("score").innerHTML = score;
			x = Math.floor((Math.random() * vSong.length));
			$("#Sol").val("");
			while(vSong[x].used2 == true) {
				x = Math.floor((Math.random() * vSong.length));
			}
			$("#Song").attr("src", vSong[x].link);
			get_category_S();
			document.getElementById('complete').innerHTML = "";
			show_cat();
			$("#Sol").focus();
		}
	});
	$("#Back2").click(function(){
		$("#Song").trigger("pause");
		$(".res").hide();
		$(".suck").hide();
		$(".game").hide();
		$(".cat").show();
		$("body").css("backgroundImage","url(../src/images/wallpaper/black.jpg)");
		ResetGame()
	});
	$("#Sol").on("input", function() {
		if ($("#Sol").val().length >= 3) EditDatalist()
		if ($("#Sol").val().length >= 3 && word_in_sols($("#Sol").val())) document.getElementById('complete').innerHTML = "";
		else if ($("#Sol").val().length < 3) document.getElementById('complete').innerHTML = "";
	});
});
