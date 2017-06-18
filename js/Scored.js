//---------------------------------------------------------------------------------------
//--------------------------------- SONG STRUCTURE --------------------------------------
//---------------------------------------------------------------------------------------

function SongData(link, sols) {
	this.link = link;
	this.sols = sols;
	this.used1 = false;
	this.used2 = false;
	this.time = 90;
}

function SoundData(link) {
	this.link = link;
	this.last = false
}

//---------------------------------------------------------------------------------------
//--------------------------------- SONGS DATABASE --------------------------------------
//---------------------------------------------------------------------------------------

var Atlus = [
    new SongData("../src/music/atlus/1.mp3", ["Persona 4","Time To Make History"]),
    new SongData("../src/music/atlus/2.mp3", ["Persona 4","Reach Out To The Truth"]),
    new SongData("../src/music/atlus/3.mp3", ["Persona Q","Maze of Life"]),
    new SongData("../src/music/atlus/4.mp3", ["Persona 4","Shadow World"]),
    new SongData("../src/music/atlus/5.mp3", ["Persona 5","Life Will Change"]),
    new SongData("../src/music/atlus/6.mp3", ["Persona 5","Last Surprise"]),
    new SongData("../src/music/atlus/7.mp3", ["Persona 5","Rivers in the desert"]),
    new SongData("../src/music/atlus/8.mp3", ["Persona 4 Arena","Reach out to the Truth"]),
    new SongData("../src/music/atlus/9.mp3", ["Persona 4 Arena","Princess Amagi"]),
    new SongData("../src/music/atlus/10.mp3", ["Persona 4 Arena","Best Friends"]),
    new SongData("../src/music/atlus/11.mp3", ["Persona 3","The Battle for Everyone Souls"]),
    new SongData("../src/music/atlus/12.mp3", ["Persona 3","Mass Destruction"]),
    new SongData("../src/music/atlus/13.mp3", ["Persona 4 Dancing All Night","Dancing all night","Junes Theme (Vocal Version)"]),
    new SongData("../src/music/atlus/14.mp3", ["Persona 4 Dancing All Night","Dancing all night","DANCE"]),
    new SongData("../src/music/atlus/15.mp3", ["Persona 4","Snowflakes"]),
    new SongData("../src/music/atlus/16.mp3", ["Persona 3","Time"]),
    new SongData("../src/music/atlus/17.mp3", ["Persona 4","I'll face myself"]),
    new SongData("../src/music/atlus/18.mp3", ["Persona 3","Danger Zone"]),
    new SongData("../src/music/atlus/19.mp3", ["Persona 4","Backside of the TV"]),
    new SongData("../src/music/atlus/20.mp3", ["Persona 5","Will Power"]),
    new SongData("../src/music/atlus/21.mp3", ["Persona 3","Burn my Dread"]),
    new SongData("../src/music/atlus/22.mp3", ["Persona 5","Beneath the mask"]),
    new SongData("../src/music/atlus/23.mp3", ["Persona 4","Heaven"]),
    new SongData("../src/music/atlus/24.mp3", ["Persona 3","Burn my Dread"]),
    new SongData("../src/music/atlus/25.mp3", ["Persona 4","Electronica in the velvet room"]),
    new SongData("../src/music/atlus/26.mp3", ["Persona 4","Like a dream come True"]),
    new SongData("../src/music/atlus/27.mp3", ["Persona 4","Signs of love"]),
    new SongData("../src/music/atlus/28.mp3", ["Persona 3","Heartful Cry"]),
    new SongData("../src/music/atlus/29.mp3", ["Persona 4 Arena","Now I Know"]),
    new SongData("../src/music/atlus/30.mp3", ["Persona 3","Iwatodai Station"]),
    new SongData("../src/music/atlus/31.mp3", ["Persona 5","Keeper of Lust"]),
    new SongData("../src/music/atlus/32.mp3", ["Persona 4","Never More"]),
    new SongData("../src/music/atlus/33.mp3", ["Persona 4","A New World Fool"]),
    new SongData("../src/music/atlus/34.mp3", ["Persona 5","The days when my mother was there"]),
    new SongData("../src/music/atlus/35.mp3", ["Persona 3","Master of Tartarus"]),
    new SongData("../src/music/atlus/34.mp3", ["Persona 5","Blooming Villain"]),
    ];
    
var Anime = [
    new SongData("../src/music/anime/1.mp3", ["Haikyuu","Team Of Soil Fertility","Chimu No Jiriki","Haikyu"]),
    new SongData("../src/music/anime/2.mp3", ["Kuroko","Gyakushuu","Kuroko no Basket"]),
    new SongData("../src/music/anime/3.mp3", ["Clannad After Story","Toki Wo Kizamu Uta"]),
    new SongData("../src/music/anime/4.mp3", ["your name","Kimi no Na wa", "Zen Zen Zense"]),
    new SongData("../src/music/anime/5.mp3", ["Shingeki no Kyojin","Attack on Titan","Wings of Freedom"]),
    new SongData("../src/music/anime/6.mp3", ["Katekyo Hitman Reborn","Katekyo Hitman Reborn!","Tsuna Awakens"]),
    new SongData("../src/music/anime/7.mp3", ["Full Metal Alchemist: Brotherhood","FMA: B","Shunkan Sentimental","FMAB"]),
    new SongData("../src/music/anime/8.mp3", ["Kuroko","Sessen","Kuroko no Basket"]),
    new SongData("../src/music/anime/9.mp3", ["Kuroko","Can do it","Kuroko no Basket"]),
    new SongData("../src/music/anime/10.mp3", ["Haikyuu","Imagination","Haikyu"]),
    new SongData("../src/music/anime/11.mp3", ["Before my body is dry","Kill la Kill"]),
    new SongData("../src/music/anime/12.mp3", ["Boku no Hero Academia","My Hero Academy","You say run"]),
    new SongData("../src/music/anime/13.mp3", ["Boku no Hero Academia","My Hero Academy","You can become a Hero"]),
    new SongData("../src/music/anime/14.mp3", ["One Piece","Overtaken"]),
    new SongData("../src/music/anime/15.mp3", ["One Piece","The very very very strongest"]),
    new SongData("../src/music/anime/16.mp3", ["One Piece","Brand New World"]),
    new SongData("../src/music/anime/17.mp3", ["One Piece","We go"]),
    new SongData("../src/music/anime/18.mp3", ["One Piece","Crazy Rainbow Star"]),
    new SongData("../src/music/anime/19.mp3", ["Mirai Nikki","Battle Theme"]),
    new SongData("../src/music/anime/20.mp3", ["Sword Art Online","SAO","Swordland"]),
    new SongData("../src/music/anime/21.mp3", ["Sword Art Online","SAO","Luminous Sword"]),
    new SongData("../src/music/anime/22.mp3", ["Sword Art Online 2","SAO 2","Light Your Sword","SAO II","Sword Art Online II"]),
    new SongData("../src/music/anime/23.mp3", ["Sword Art Online 2","SAO 2","Gunland","SAO II","Sword Art Online II"]),
    new SongData("../src/music/anime/24.mp3", ["Angel Beats","My Soul Your Beats","My Soul Your Beats (Yui ver)"]),
    new SongData("../src/music/anime/25.mp3", ["Clannad","Nagisa"]),
    new SongData("../src/music/anime/26.mp3", ["Haikyuu","Evolution","Haikyu"]),
    new SongData("../src/music/anime/27.mp3", ["Shingeki no Kyojin","Attack on Titan","Counterattack Mankind"]),
    new SongData("../src/music/anime/28.mp3", ["One Piece","After Eating, the Grand Line"]),
    new SongData("../src/music/anime/29.mp3", ["No Game No Life","All of you is all of me"]),
    new SongData("../src/music/anime/30.mp3", ["One Piece","World's number one oden store"]),
    new SongData("../src/music/anime/31.mp3", ["Kuroko","Under the hoop","Kuroko no Basket"]),
    new SongData("../src/music/anime/32.mp3", ["Shingeki no Kyojin","Attack on Titan","Armored Titan"]),
    new SongData("../src/music/anime/33.mp3", ["Shingeki no Kyojin","Attack on Titan","XL-TT"]),
    new SongData("../src/music/anime/34.mp3", ["Fairy Tail","Fairy Tail 2016","Main Theme"]),
    new SongData("../src/music/anime/35.mp3", ["Madder Sky","Code Geass"]),
    new SongData("../src/music/anime/36.mp3", ["Death Note","L's Theme"]),
    new SongData("../src/music/anime/37.mp3", ["Kuroko","Triple Threat","Kuroko no Basket"]),
    new SongData("../src/music/anime/38.mp3", ["Fairy Tail","Against Magic"]),
    new SongData("../src/music/anime/39.mp3", ["Fairy Tail","Three Dragon Slayers"]),
    new SongData("../src/music/anime/40.mp3", ["Fairy Tail","Invoke Magic"]),
    new SongData("../src/music/anime/41.mp3", ["Parasyte","Hypnotik","Parasyte the Maxim","Kiseiju"]),
    new SongData("../src/music/anime/42.mp3", ["Parasyte","Next to you","Parasyte the Maxim","Kiseiju"]),
    new SongData("../src/music/anime/43.mp3", ["Clannad","Hurry, Starfish!"]),
    new SongData("../src/music/anime/44.mp3", ["Clannad","Roaring Tides"])
    ];

var Remix = [ 
    new SongData("../src/music/remix/1.mp3", ["Megalovania","Undertale"]),
    new SongData("../src/music/remix/2.mp3", ["Undertale","Heartache"]),
    new SongData("../src/music/remix/3.mp3", ["Native Faith","Suwako's Theme", "Touhou 10"]),
    new SongData("../src/music/remix/4.mp3", ["Forest Maze","Super Mario RPG", "Mario RPG"]),
    new SongData("../src/music/remix/5.mp3", ["Final Fantasy IX","Final Fantasy 9", "Battle 1", "You're not alone"]),
    new SongData("../src/music/remix/6.mp3", ["Ducktales","Moon", "The Moon"])
    ];
    
var Mario = [
    new SongData("../src/music/mario/1.mp3", ["Jump Up, Super Star!","Super Mario Odyssey","Mario Odyssey"]),
    new SongData("../src/music/mario/2.mp3", ["Delfino Plaza","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/3.mp3", ["Bianco Hills","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/4.mp3", ["A Secret Course","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/5.mp3", ["Ricco Harbor","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/6.mp3", ["Into the Tunnels","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/7.mp3", ["Mecha-Bowser","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/8.mp3", ["The Manta Storm","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/9.mp3", ["Corona Mountain","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/10.mp3", ["Final Bowser Battle","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/10.mp3", ["Staff Roll","Super Mario Sunshine","Mario Sunshine"]),
    ];
    
var Touhou = [
    new SongData("../src/music/touhou/1.mp3", ["UN OWEN WAS HER","U.N. OWEN WAS HER?","Flandre's Theme","The Embodiment of Scarlet Devil","Touhou 6"]),
    new SongData("../src/music/touhou/2.mp3", ["The Prismriver Sisters' Theme","Prismriver Sisters' Theme","Phantom Ensemble","Touhou 7"]),
    new SongData("../src/music/touhou/3.mp3", ["Yukari's Theme","Necrofantasia","Perfect Cherry Blossom","Touhou 7"]),
    new SongData("../src/music/touhou/4.mp3", ["Demystify Feast","Touhou 7.5","Immaterial and Missing Power"]),
    new SongData("../src/music/touhou/5.mp3", ["Marisa Kirisame's Theme","Love-colored Master Spark","Imperishable Night","Touhou 8"]),
    new SongData("../src/music/touhou/6.mp3", ["Flight of the Bamboo Cutter","Kaguya's Theme","Imperishable Night","Touhou 8"]),
    new SongData("../src/music/touhou/7.mp3", ["Mokou's Theme","Reach for the moon","Inmortal smoke","Imperishable Night","Touhou 8"]),
    new SongData("../src/music/touhou/8.mp3", ["Road of the Apotropaic God","Dark Road","Mountain of Faith","Touhou 10"]),
    new SongData("../src/music/touhou/9.mp3", ["Nitori's Theme","The Candid Friend","Candid Friend","Mountain of Faith","Touhou 10"]),
    new SongData("../src/music/touhou/10.mp3", ["Fires of Hokkai","Touhou 12","Undefined Fantastic Object"]),
    new SongData("../src/music/touhou/11.mp3", ["Suwako's Theme","Touhou 10","Mountain of Faith","Native Faith"]),
    new SongData("../src/music/touhou/12.mp3", ["Sakuya's Theme","Flowering Night","Phantasmagoria of Flower View","Touhou 9"]),
    new SongData("../src/music/touhou/13.mp3", ["Utsuho Reiuji's Theme","Solar Sect of Mystic Wisdom","Nuclear Fusion","Subterranean Animism","Touhou 11"]),
    new SongData("../src/music/touhou/14.mp3", ["Bad Apple","Touhou 4","Lotus Land Story"])
    ];
    
var Kirby = [
	new SongData("../src/music/kirby/1.mp3", ["C-R-O-W-N-E-D","CROWNED","Kirby's return to dream land","Kirby's return to dreamland"]),
    new SongData("../src/music/kirby/2.mp3", ["Masked Dedede","Dedede's Royal Payback","Kirby triple deluxe"]),
    new SongData("../src/music/kirby/3.mp3", ["The World to win","Kirby triple deluxe"]),
    new SongData("../src/music/kirby/4.mp3", ["Green Greens","Kirby's Dream Land","Kirby's DreamLand"]),
    new SongData("../src/music/kirby/5.mp3", ["Mt. Dedede","Kirby's Dream Land","Kirby's DreamLand"]),
    new SongData("../src/music/kirby/6.mp3", ["Gourmet Race","Kirby Super Star"]),
    new SongData("../src/music/kirby/7.mp3", ["Gourmet Race","Kirby 64: The Crystal Shards", "Kirby 64", "Kirby64"]),
    new SongData("../src/music/kirby/8.mp3", ["Pop Star","Kirby 64: The Crystal Shards", "Kirby 64", "Kirby64"])
	];
    
var Pokemon = [
    new SongData("http://trivial2.net16.net/src/music/pokemon/1.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Champion"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/2.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Rival"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/3.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Zinnia"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/4.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Wally"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/5.mp3", ["Sun","Moon","Battle! Legend Red"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/6.mp3", ["Sun","Moon","Battle! Champion"]),   
    new SongData("http://trivial2.net16.net/src/music/pokemon/7.mp3", ["Sun","Moon","Battle! Kahuna"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/8.mp3", ["Sun","Moon","Battle! Hau"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/9.mp3", ["X","Y","Snowbelee City"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/10.mp3", ["X","Y","Battle! Gym Leader"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/11.mp3", ["X","Y","Battle! Lyssandre"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/12.mp3", ["X","Y","Battle! Diantha"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/13.mp3", ["Black","White","Battle! N"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/14.mp3", ["Black","White","Battle! Reshiram","Battle! Zekrom","Battle! Kyurem"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/15.mp3", ["Black","White","Battle! Elite Four"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/16.mp3", ["Diamond","Pearl","Battle! Cynthia"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/17.mp3", ["Diamond","Pearl","Battle! Team Galactic Boss"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/18.mp3", ["Sun","Moon","Battle! Gladion"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/19.mp3", ["Heart Gold","Soul Silver","HGSS","Battle! Champion","Battle! Red"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/20.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Ho-oh"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/21.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Rayquaza"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/22.mp3", ["Diamond","Pearl","Battle! Rival"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/23.mp3", ["Heart Gold","Soul Silver","HGSS","Battle! Rival"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/24.mp3", ["Fire Red","Leaf Green","FRLG","Battle! Champion"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/25.mp3", ["X","Y","Professor Sycanore's Theme"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/26.mp3", ["Black 2","White 2","Battle! Rival"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/27.mp3", ["Black","White","Emotion"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/28.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Gym Leader"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/29.mp3", ["Black","White","Last Pokemon"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/30.mp3", ["Heart Gold","Soul Silver","HGSS","Battle! Team Rocket"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/31.mp3", ["Omega Ruby","Alpha Sapphire","ORAS","Battle! Elite Four"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/32.mp3", ["Red","Blue","Yellow","RBY","Indigo Plateau"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/33.mp3", ["X","Y","Battle! Mewtwo"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/34.mp3", ["X","Y","Battle! Emotion"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/35.mp3", ["Red","Blue","Yellow","RBY","Opening"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/36.mp3", ["Red","Blue","Yellow","RBY","Pallet Town"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/37.mp3", ["Red","Blue","Yellow","RBY","Professor Oak"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/38.mp3", ["Red","Blue","Yellow","RBY","Oak's Research Lab"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/39.mp3", ["Red","Blue","Yellow","RBY","Rival appears"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/40.mp3", ["Red","Blue","Yellow","RBY","Victory Fanfare"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/41.mp3", ["Heart Gold","Soul Silver","HGSS","Battle! Kanto Gym Leader"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/42.mp3", ["Fire Red","Leaf Green","FRLG","Battle! Gym Leader"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/43.mp3", ["Ruby","Sapphire","Emerald", "Battle! Rival"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/44.mp3", ["Ruby","Sapphire","Emerald", "Opening"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/45.mp3", ["Ruby","Sapphire","Emerald", "Title Screen"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/46.mp3", ["Ruby","Sapphire","Emerald", "Petalburg City"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/47.mp3", ["Colosseum","Battle! Cipher Admin"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/48.mp3", ["Colosseum","First Battle"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/49.mp3", ["Colosseum","Normal Battle"]),
    new SongData("http://trivial2.net16.net/src/music/pokemon/50.mp3", ["Black 2","White 2","Battle! Cynthia"])
	];
	
var	Square = [
    new SongData("../src/music/square/1.mp3", ["Kingdom Hearts 2.8","KH 2.8", "KH2.8","Simple and Clean", "Simple and Clean Ray of Hope mix"]),
    new SongData("../src/music/square/2.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The Landing"]),
    new SongData("../src/music/square/3.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Force Your Way"]),
    new SongData("../src/music/square/4.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Don't be Afraid"]),
    new SongData("../src/music/square/5.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The man with the machine gun"]),
    new SongData("../src/music/square/6.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Liberi Fatali"]),
    new SongData("../src/music/square/7.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The stage is set"]),
    new SongData("../src/music/square/8.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Waltz for the moon"]),
    new SongData("../src/music/square/9.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 1"]),
    new SongData("../src/music/square/10.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 2"]),
    new SongData("../src/music/square/11.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Hunter's Chance"]),
    new SongData("../src/music/square/12.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Someone to protect"]),
    new SongData("../src/music/square/13.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Rose of May"]),
    new SongData("../src/music/square/14.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "You're not alone"]),
    new SongData("../src/music/square/15.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "A Place to call home"]),
    new SongData("../src/music/square/16.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Vamo alla flamenco"]),
    new SongData("../src/music/square/17.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII", "Opening theme","Bombing Mission"]),
    new SongData("../src/music/square/18.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight"]),
    new SongData("../src/music/square/19.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","JENOVA","J-E-N-O-V-A"]),
    new SongData("../src/music/square/20.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Gold Saucer"]),
    new SongData("../src/music/square/21.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Jenova Absolute"]),
    new SongData("../src/music/square/22.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight further"])
    ];
	
var	Missclick = [
	new SoundData("../src/music/other/err1.mp3"),
	new SoundData("../src/music/other/err2.wav"),
	new SoundData("../src/music/other/err3.wav")
	];
	
var Ganbatte = [
	new SoundData("../src/music/other/go1.wav"),
	new SoundData("../src/music/other/go2.wav"),
	new SoundData("../src/music/other/go3.wav"),
	new SoundData("../src/music/other/go4.wav")
	];

	 
	

//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCTIONS --------------------------------------
//---------------------------------------------------------------------------------------

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

function show_res() {
	$("#Song").trigger("pause");
	$(".game").hide();
	$(".suck").hide();
	clearInterval(interval)
	document.getElementById("score2").innerHTML = score;
	var HhitS;
	if(NGo == 0) HhitS = 0;
	else HhitS = (Hhit/NGo) * 100;
	document.getElementById("sh").innerHTML = HhitS;
	var Ndones = (Hhit/20) * 100;
	document.getElementById("ss").innerHTML = Ndones;
	$(".res").show();
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
	solr = Math.floor((Math.random() * vSong[x].sols.length));
	document.getElementById("Last").innerHTML = vSong[x].sols[solr];
}

function check_valid() {
	$("#errS").attr("src", "");
	++NGo;
	var k
	var Song = vSong[x];
	var sol = $("#Sol").val();
	for(k = 0; k < Song.sols.length; k++) {
		if(Song.sols[k].toLowerCase() == sol.toLowerCase()) {
			objection = false;
			++Hhit;
			++Nused;
			if (vSong[x].time >= 83) score = score + (100 * multiplier);
			else score = score + (vSong[x].time * multiplier);
			document.getElementById("score").innerHTML = score;
			vSong[x].used2 = true;
			x = Math.floor((Math.random() * vSong.length));
			$("#Sol").val("");
			if (Nused < vSong.length) {
				while(vSong[x].used2) {
					x = Math.floor((Math.random() * vSong.length));
				}
			$("#Song").attr("src", vSong[x].link);
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
	
//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------

var CategoryMatrix = [Atlus,Anime,Remix,Mario,Touhou,Kirby,Pokemon,Square];
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

//---------------------------------------------------------------------------------------
//--------------------------------- MAIN CODE -------------------------------------------
//---------------------------------------------------------------------------------------

$(document).ready(function() {
		$(".game").hide()
        $("#Acc").click(function() {
			var h2 = Math.floor((Math.random() * Ganbatte.length))
			$("#Ganbatte").attr("src", Ganbatte[h2].link);
            vec = act_catV();
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
					 vSong[x].used2 = true;
					 ++Nused;
					 score = score - 30;
					 $("#Skip").click();
				 }
            },1000);
            $("#Song").prop("volume", 0.25);
            $("#Song").attr("src", vSong[x].link);
            $("#Skip").click(function() {
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
				}
            });
            $("#Discard").click(function() {
				score = score - 30;
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
				}
            });
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
});
