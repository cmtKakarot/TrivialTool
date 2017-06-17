//---------------------------------------------------------------------------------------
//--------------------------------- SONG STRUCTURE --------------------------------------
//---------------------------------------------------------------------------------------

function SongData(link, sols) {
	this.link = link;
	this.sols = sols;
	this.used = false;
	this.time = 60;
}

function ErrorData(link) {
	this.link = link;
	this.last = false
}

//---------------------------------------------------------------------------------------
//--------------------------------- SONGS DATABASE --------------------------------------
//---------------------------------------------------------------------------------------

var Atlus = [
    new SongData("./src/music/atlus/1.mp3", ["Persona4","Persona 4","Time To Make History"]),
    new SongData("./src/music/atlus/2.mp3", ["Persona4","Persona 4","Reach Out To The Truth"]),
    new SongData("./src/music/atlus/3.mp3", ["PersonaQ","Persona Q","Maze of Life"]),
    new SongData("./src/music/atlus/4.mp3", ["Persona4","Persona 4","Shadow World"]),
    new SongData("./src/music/atlus/5.mp3", ["Persona5","Persona 5","Life Will Change"]),
    new SongData("./src/music/atlus/6.mp3", ["Persona5","Persona 5","Last Surprise"]),
    new SongData("./src/music/atlus/7.mp3", ["Persona5","Persona 5","Rivers in the desert"])
    ];
    
var Anime = [
    new SongData("./src/music/anime/1.mp3", ["Haikyuu","Team Of Soil Fertility","Chimu No Jiriki","Haikyu"]),
    new SongData("./src/music/anime/2.mp3", ["Kuroko","Gyakushuu","Kuroko no Basket"]),
    new SongData("./src/music/anime/3.mp3", ["Clannad After Story","Toki Wo Kizamu Uta"]),
    new SongData("./src/music/anime/4.mp3", ["your name","Kimi no Na wa", "Zen Zen Zense"]),
    new SongData("./src/music/anime/5.mp3", ["Shingeki no Kyojin","Attack on Titan","Wings of Freedom"]),
    new SongData("./src/music/anime/6.mp3", ["Katekyo Hitman Reborn","Katekyo Hitman Reborn!","Tsuna Awakens"]),
    new SongData("./src/music/anime/7.mp3", ["Full Metal Alchemist: Brotherhood","FMA: B","Shunkan Sentimental","FMAB"]),
    new SongData("./src/music/anime/8.mp3", ["Kuroko","Sessen","Kuroko no Basket"]),
    new SongData("./src/music/anime/9.mp3", ["Kuroko","Can do it","Kuroko no Basket"]),
    new SongData("./src/music/anime/10.mp3", ["Haikyuu","Imagination","Haikyu"]),
    new SongData("./src/music/anime/11.mp3", ["Before my body is dry","Kill la Kill"])
    ];

var Remix = [ 
    new SongData("./src/music/remix/1.mp3", ["Megalovania","Undertale"]),
    new SongData("./src/music/remix/2.mp3", ["Undertale","Heartache"]),
    new SongData("./src/music/remix/3.mp3", ["Native Faith","Suwako's Theme", "Touhou 10"]),
    new SongData("./src/music/remix/4.mp3", ["Forest Maze","Super Mario RPG", "Mario RPG"]),
    new SongData("./src/music/remix/5.mp3", ["Final Fantasy IX","Final Fantasy 9", "Battle 1", "You're not alone"]),
    new SongData("./src/music/remix/6.mp3", ["Ducktales","Moon", "The Moon"])
    ];
    
var NintendoNew = [
    new SongData("./src/music/newtendo/1.mp3", ["Fountain of Dreams","The Fountain of Dreams","Super Smash Bros Melee","Melee"]),
    new SongData("./src/music/newtendo/2.mp3", ["XenobladeX","Xenoblade X","Uncontrollable"]),
    new SongData("./src/music/newtendo/3.mp3", ["Dual Destinies","Keep Pressing On","Pursuit","Phoenix Wright 5", "Phoenix Wright Dual Destinies", "Phoenix Wright: Dual Destinies"]),
    new SongData("./src/music/newtendo/4.mp3", ["Battlefield","Super Smash Bros Brawl","Brawl","SSBB"])
    ];
    
var Touhou = [
    new SongData("./src/music/touhou/1.mp3", ["UN OWEN WAS HER","U.N. OWEN WAS HER?","Flandre's Theme","The Embodiment of Scarlet Devil","Touhou 6"]),
    new SongData("./src/music/touhou/2.mp3", ["The Prismriver Sisters' Theme","Prismriver Sisters' Theme","Phantom Ensemble","Touhou 7"]),
    new SongData("./src/music/touhou/3.mp3", ["Yukari's Theme","Necrofantasia","Perfect Cherry Blossom","Touhou 7"]),
    new SongData("./src/music/touhou/4.mp3", ["Demystify Feast","Touhou 7.5","Immaterial and Missing Power"]),
    new SongData("./src/music/touhou/5.mp3", ["Marisa Kirisame's Theme","Love-colored Master Spark","Imperishable Night","Touhou 8"]),
    new SongData("./src/music/touhou/6.mp3", ["Flight of the Bamboo Cutter","Kaguya's Theme","Imperishable Night","Touhou 8"]),
    new SongData("./src/music/touhou/7.mp3", ["Mokou's Theme","Reach for the moon","Inmortal smoke","Imperishable Night","Touhou 8"]),
    new SongData("./src/music/touhou/8.mp3", ["Road of the Apotropaic God","Dark Road","Mountain of Faith","Touhou 10"]),
    new SongData("./src/music/touhou/9.mp3", ["Nitori's Theme","The Candid Friend","Candid Friend","Mountain of Faith","Touhou 10"]),
    new SongData("./src/music/touhou/10.mp3", ["Fires of Hokkai","Touhou 12","Undefined Fantastic Object"]),
    new SongData("./src/music/touhou/11.mp3", ["Suwako's Theme","Touhou 10","Mountain of Faith","Native Faith"]),
    new SongData("./src/music/touhou/12.mp3", ["Sakuya's Theme","Flowering Night","Phantasmagoria of Flower View","Touhou 9"]),
    new SongData("./src/music/touhou/13.mp3", ["Utsuho Reiuji's Theme","Solar Sect of Mystic Wisdom","Nuclear Fusion","Subterranean Animism","Touhou 11"]),
    new SongData("./src/music/touhou/14.mp3", ["Bad Apple","Touhou 4","Lotus Land Story"])
    ];
    
var Kirby = [
	new SongData("./src/music/kirby/1.mp3", ["C-R-O-W-N-E-D","CROWNED","Kirby's return to dream land","Kirby's return to dreamland"]),
    new SongData("./src/music/kirby/2.mp3", ["Masked Dedede","Dedede's Royal Payback","Kirby triple deluxe"]),
    new SongData("./src/music/kirby/3.mp3", ["The World to win","Kirby triple deluxe"]),
    new SongData("./src/music/kirby/4.mp3", ["Green Greens","Kirby's Dream Land","Kirby's DreamLand"]),
    new SongData("./src/music/kirby/5.mp3", ["Mt. Dedede","Kirby's Dream Land","Kirby's DreamLand"]),
    new SongData("./src/music/kirby/6.mp3", ["Gourmet Race","Kirby Super Star"]),
    new SongData("./src/music/kirby/7.mp3", ["Gourmet Race","Kirby 64: The Crystal Shards", "Kirby 64", "Kirby64"]),
    new SongData("./src/music/kirby/8.mp3", ["Pop Star","Kirby 64: The Crystal Shards", "Kirby 64", "Kirby64"])
	];
    
var Pokemon = [
    new SongData("./src/music/pokemon/1.mp3", ["Omega Ruby","Omega Rubi","Alpha Sapphire","ORAS","Alfa Zafiro","Battle! Champion"]),
    new SongData("./src/music/pokemon/2.mp3", ["Omega Ruby","Omega Rubi","Alpha Sapphire","ORAS","Alfa Zafiro","Battle! Rival"])
	];
	
var	Square = [
    new SongData("./src/music/square/1.mp3", ["Kingdom Hearts 2.8","KH 2.8", "KH2.8","Simple and Clean", "Simple and Clean Ray of Hope mix"]),
    new SongData("./src/music/square/2.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The Landing"]),
    new SongData("./src/music/square/3.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Force Your Way"]),
    new SongData("./src/music/square/4.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Don't be Afraid"]),
    new SongData("./src/music/square/5.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The man with the machine gun"]),
    new SongData("./src/music/square/6.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Liberi Fatali"]),
    new SongData("./src/music/square/7.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The stage is set"]),
    new SongData("./src/music/square/8.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Waltz for the moon"]),
    new SongData("./src/music/square/9.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 1"]),
    new SongData("./src/music/square/10.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 2"]),
    new SongData("./src/music/square/11.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Hunter's Chance"]),
    new SongData("./src/music/square/12.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Someone to protect"]),
    new SongData("./src/music/square/13.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Rose of May"]),
    new SongData("./src/music/square/14.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "You're not alone"]),
    new SongData("./src/music/square/15.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "A Place to call home"]),
    new SongData("./src/music/square/16.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Vamo alla flamenco"]),
    new SongData("./src/music/square/17.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII", "Opening theme","Bombing Mission"]),
    new SongData("./src/music/square/18.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight"]),
    new SongData("./src/music/square/19.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","JENOVA","J-E-N-O-V-A"]),
    new SongData("./src/music/square/20.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Gold Saucer"]),
    new SongData("./src/music/square/21.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Jenova Absolute"]),
    new SongData("./src/music/square/22.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight further"])
    ];
	
var	Missclick = [
	new ErrorData("./src/music/other/err1.mp3"),
	new ErrorData("./src/music/other/err2.wav")
	];
	
	

//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCS ------------------------------------------
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

function act_catV() {
    var vec = [];
    if (!$("#Atlus").is(":hidden")) vec.push(0);
    if (!$("#Anime").is(":hidden")) vec.push(1);
    if (!$("#Remix").is(":hidden")) vec.push(2);
    if (!$("#NNintendo").is(":hidden")) vec.push(3);
    if (!$("#Touhou").is(":hidden")) vec.push(4);
    if (!$("#Kirby").is(":hidden")) vec.push(5);
    if (!$("#Pokemon").is(":hidden")) vec.push(6);
    if (!$("#Square").is(":hidden")) vec.push(7);
    return vec;
}

function show_res(x) {
	$("#Song").trigger("pause");
	$(".game").hide();
	$(".suck").hide();
	clearInterval(x)
	document.getElementById("score2").innerHTML = score;
	var HhitS;
	if(NGo == 0) HhitS = 0;
	else HhitS = (Hhit/NGo) * 100;
	document.getElementById("sh").innerHTML = HhitS;
	var Ndones = (Hhit/Ntot) * 100;
	document.getElementById("ss").innerHTML = Ndones;
	$(".res").show();
}

function randomize() {
	r = Math.floor((Math.random() * vec.length));
	i = vec[r];
	j = Math.floor((Math.random() * CategoryMatrix[i].length));
}

function show_sol() {
	$(".suck").show();
	solr = Math.floor((Math.random() * CategoryMatrix[i][j].sols.length));
	document.getElementById("Last").innerHTML = CategoryMatrix[i][j].sols[solr];
}

//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------

var CategoryMatrix = [Atlus,Anime,Remix,NintendoNew,Touhou,Kirby,Pokemon,Square];
var Nused = 0;
var Ntot;
var NGo = 0;
var Hhit = 0;
var score = 0;
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
        $("#Acc").click(function() {
            vec = act_catV();
            $(".cat").hide();
            document.getElementById("score").innerHTML = score;
            Ntot = numero(vec);
			randomize();
            $(".game").show();
            var x = setInterval(function() {
                --CategoryMatrix[i][j].time;
                document.getElementById("demo").innerHTML = CategoryMatrix[i][j].time;
                if(CategoryMatrix[i][j].time <= 0) {
					 CategoryMatrix[i][j].used = true;
					 ++Nused;
					 score = score - 20;
					 
					 $("#Skip").click();
				 }
            },1000);
            $("#Song").prop("volume", 0.25);
            $("#Song").attr("src", CategoryMatrix[i][j].link);
            $("#Skip").click(function() {
                if(Nused == Ntot) show_res(i,j);
				else {
					document.getElementById("score").innerHTML = score;
					randomize();
					$("#Sol").val("");
					while(CategoryMatrix[i][j].used == true) {
						randomize();
					}
					$("#Song").attr("src", CategoryMatrix[i][j].link);
				}
            });
            $("#Discard").click(function() {
				score = score - 40;
				++Nused;
				CategoryMatrix[i][j].used = true;
				show_sol();
                if(Nused == Ntot) show_res(i,j);
				else {
					document.getElementById("score").innerHTML = score;
					randomize();
					$("#Sol").val("");
					while(CategoryMatrix[i][j].used == true) {
						randomize();
					}
					$("#Song").attr("src", CategoryMatrix[i][j].link);
				}
            });
            $("#Go").click(function() {
				$("#errS").attr("src", "");
                ++NGo;
                var k
                var Song = CategoryMatrix[i][j];
                var sol = $("#Sol").val();
                for(k = 0; k < Song.sols.length; k++) {
                    if(Song.sols[k].toLowerCase() == sol.toLowerCase()) {
						objection = false;
						++Hhit;
						++Nused;
                        score = score + CategoryMatrix[i][j].time;
                        document.getElementById("score").innerHTML = score;
                        CategoryMatrix[i][j].used = true;
                        randomize();
                        $("#Sol").val("");
                        if (Nused != Ntot) {
							while(CategoryMatrix[i][j].used == true) {
								randomize();
							}
							$("#Song").attr("src", CategoryMatrix[i][j].link);
						}
						else show_res(i,j);
                    }
				}
				if(objection) {
					var h = Math.floor((Math.random() * Missclick.length))
					$("#errS").attr("src", Missclick[h].link);
            	}
            	objection = true;
        });
    });
    $("#Sol").keyup(function(event){
        if(event.keyCode == 13) $("#Go").click();
    });
    $(".cat").click(function(){
        $(this).hide();
    });
    $("#Reset").click(function(){
		$(".cat").show();
	});
});
