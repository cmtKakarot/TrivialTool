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
	$(".suck").show();
	$(".res").show();
	$("body").css("backgroundImage","url(../src/images/wallpaper/black.jpg)");
}

function randomize() {
	r = Math.floor((Math.random() * vec.length));
	i = vec[r];
	j = Math.floor((Math.random() * CategoryMatrix[i].length));
}

function show_sol() {
	document.getElementById("Last").innerHTML = CategoryMatrix[i][j].sols[0];
	$(".suck").show();
}

function check_valid() {
	$("#errS").attr("src", "");
	var k
	var Song = CategoryMatrix[i][j];
	var sol = $("#Sol").val();
	for(k = 0; k < Song.sols.length; k++) {
		if(Song.sols[k].toLowerCase().replace(/[^0-9a-z]/gi, '') == sol.toLowerCase().replace(/[^0-9a-z]/gi, '')) {
			objection = false;
			++Nused
			CategoryMatrix[i][j].used = true;
			randomize();
			$("#Sol").val("");
			if (Nused < Ntot) {
				while(CategoryMatrix[i][j].used == true) {
					randomize();
				}
			$("#Song").attr("src", CategoryMatrix[i][j].link);
			show_cat_F();
			}
			else show_res();
		}
	}
	if(objection) {
		$("#Sol").val("");
		var h = Math.floor((Math.random() * Missclick.length))
		$("#errS").attr("src", Missclick[h].link);
		}
	objection = true;
}

function ResetGame() {
	var ir, ic;
	for(ir = 0; ir < CategoryMatrix.length; ++ir) {
		for(ic = 0; ic < CategoryMatrix[ir].length; ++ic) {
			CategoryMatrix[ir][ic].used = false;
		}
	}
	Nused = 0;
	vec = [];
	i = 0;
	j = 0;
	r = 0;
	objection = true;
	solr = 0;	
}
	
//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------

var Nused = 0;
var Ntot;
var vec = [];
var i = 0;
var j = 0;
var r = 0;
var objection = true;
var solr = 0;

//---------------------------------------------------------------------------------------
//--------------------------------- MAIN CODE -------------------------------------------
//---------------------------------------------------------------------------------------

$(document).ready(function() {
	$(".game").hide()
    $("#Acc").click(function() {
		var h2 = Math.floor((Math.random() * Ganbatte.length))
		$("#Ganbatte").attr("src", Ganbatte[h2].link);
		vec = act_catV();
		$(".cat").hide();
		Ntot = numero(vec);
		randomize();
		$(".game").show();
		$("#Song").prop("volume", 0.35);
		$("#Song").attr("src", CategoryMatrix[i][j].link);
		show_cat_F();
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
	$("#Discard").click(function() {
		++Nused
		CategoryMatrix[i][j].used = true;
		show_sol();
		if (Nused == Ntot) show_res();
		else {
			randomize();
			$("#Sol").val("");
			while(CategoryMatrix[i][j].used == true) {
				randomize();
			}
			$("#Song").attr("src", CategoryMatrix[i][j].link);
			show_cat_F();
		}
	});
	$("#Back").click(function(){
		$("#Song").trigger("pause");
		$(".res").hide();
		$(".suck").hide();
		$(".game").hide();
		$("body").css("backgroundImage","url(../src/images/wallpaper/black.jpg)");
		$(".cat").show();

		ResetGame();
	});
	$("#Back2").click(function(){
		$(".res").hide();
		$(".suck").hide();
		$(".game").hide();
		$("body").css("backgroundImage","url(../src/images/wallpaper/black.jpg)");
		$(".cat").show();
		ResetGame();
	});
});
