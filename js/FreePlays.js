
//---------------------------------------------------------------------------------------
//--------------------------------- SONG STRUCTURE --------------------------------------
//---------------------------------------------------------------------------------------

function SongData(link, sols) {
	this.link = link;
	this.sols = sols;
	this.used = false;
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
    new SongData("../src/music/atlus/36.mp3", ["Persona 5","Blooming Villain"]),
    new SongData("../src/music/atlus/37.mp3", ["Catherine","It's a golden show"]),
    new SongData("../src/music/atlus/38.mp3", ["etrian odyssey 4","etrian odyssey iv","faith is my pillar"])
    ];
    
var Anime = [
    new SongData("../src/music/anime/1.mp3", ["Haikyuu","Team Of Soil Fertility","Chimu No Jiriki","Haikyu"]),
    new SongData("../src/music/anime/2.mp3", ["Kuroko no Basket","Gyakushuu","Kuroko no Basuke"]),
    new SongData("../src/music/anime/3.mp3", ["Clannad After Story","Toki Wo Kizamu Uta"]),
    new SongData("../src/music/anime/4.mp3", ["your name","Kimi no Na wa", "Zen Zen Zense"]),
    new SongData("../src/music/anime/5.mp3", ["Shingeki no Kyojin","Attack on Titan","Wings of Freedom"]),
    new SongData("../src/music/anime/6.mp3", ["Katekyo Hitman Reborn!","Katekyo Hitman Reborn","Tsuna Awakens"]),
    new SongData("../src/music/anime/7.mp3", ["Full Metal Alchemist: Brotherhood","FMA: B","Shunkan Sentimental","FMAB"]),
    new SongData("../src/music/anime/8.mp3", ["Kuroko no Basket","Sessen","Kuroko no Basuke"]),
    new SongData("../src/music/anime/9.mp3", ["Kuroko no Basket","Can do it","Kuroko no Basuke"]),
    new SongData("../src/music/anime/10.mp3", ["Haikyuu","Imagination","Haikyu"]),
    new SongData("../src/music/anime/11.mp3", ["Kill la Kill","Before my body is dry"]),
    new SongData("../src/music/anime/12.mp3", ["Boku no Hero Academia","My Hero Academy","You say run"]),
    new SongData("../src/music/anime/13.mp3", ["Boku no Hero Academia","My Hero Academy","You can become a Hero"]),
    new SongData("../src/music/anime/14.mp3", ["Naruto Shippuden","Shoryu"]),
    new SongData("../src/music/anime/15.mp3", ["Bleach","What Can You See In Their Eyes"]),
    new SongData("../src/music/anime/16.mp3", ["Bleach","Pleasure of Combat"]),
    new SongData("../src/music/anime/17.mp3", ["Death Parade","Flyers"]),
    new SongData("../src/music/anime/18.mp3", ["The Melancholy of Haruhi Suzumiya","Haruhi Suzumiya","God Knows"]),
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
    new SongData("../src/music/anime/31.mp3", ["Kuroko no Basket","Under the Hoop","Kuroko no Basuke"]),
    new SongData("../src/music/anime/32.mp3", ["Shingeki no Kyojin","Attack on Titan","Armored Titan"]),
    new SongData("../src/music/anime/33.mp3", ["Shingeki no Kyojin","Attack on Titan","XL-TT"]),
    new SongData("../src/music/anime/34.mp3", ["Fairy Tail","Fairy Tail 2016"]),
    new SongData("../src/music/anime/35.mp3", ["Code Geass","Madder Sky"]),
    new SongData("../src/music/anime/36.mp3", ["Death Note","L's Theme"]),
    new SongData("../src/music/anime/37.mp3", ["Kuroko no Basket","Triple Threat","Kuroko no Basuke"]),
    new SongData("../src/music/anime/38.mp3", ["Fairy Tail","Against Magic"]),
    new SongData("../src/music/anime/39.mp3", ["Fairy Tail","Three Dragon Slayers"]),
    new SongData("../src/music/anime/40.mp3", ["Fairy Tail","Invoke Magic"]),
    new SongData("../src/music/anime/41.mp3", ["Parasyte","Hypnotik","Parasyte the Maxim","Kiseiju"]),
    new SongData("../src/music/anime/42.mp3", ["Parasyte","Next to you","Parasyte the Maxim","Kiseiju"]),
    new SongData("../src/music/anime/43.mp3", ["Clannad","Hurry, Starfish!"]),
    new SongData("../src/music/anime/44.mp3", ["Clannad","Roaring Tides"]),
    new SongData("../src/music/anime/45.mp3", ["mirai nikki","Minene Uryuu's death"]),
    new SongData("../src/music/anime/46.mp3", ["Puella Magi Madoka Magica","Sayaka Miki's theme","decretum","madoka magica"]),
    new SongData("../src/music/anime/47.mp3", ["guilty crown","release my soul"]),
    new SongData("../src/music/anime/48.mp3", ["guilty crown","the everlasting","everlasting"]),
    new SongData("../src/music/anime/49.mp3", ["steins;gate","steins gate","gate of steiner"]),
    new SongData("../src/music/anime/50.mp3", ["steins;gate","steins gate","hacking to the gate"]),
    new SongData("../src/music/anime/51.mp3", ["tokyo ghoul","glassy sky"]),
	new SongData("../src/music/anime/52.mp3", ["Dragon Ball Z","Bola de Drac Z","We got the power"])
    ];

var Remix = [ 
    new SongData("../src/music/remix/1.mp3", ["Undertale","Megalovania"]),
    new SongData("../src/music/remix/2.mp3", ["Undertale","Heartache"]),
    new SongData("../src/music/remix/3.mp3", ["Touhou 10","Suwako's Theme", "Native Faith"]),
    new SongData("../src/music/remix/4.mp3", ["Super Mario RPG","Forest Maze", "Mario RPG"]),
    new SongData("../src/music/remix/5.mp3", ["Final Fantasy IX","Final Fantasy 9","FF IX","FF 9", "Battle 1", "You're not alone"]),
    new SongData("../src/music/remix/6.mp3", ["Ducktales","Moon", "The Moon"]),
    new SongData("../src/music/remix/7.mp3", ["Kingdom Hearts","Dearly Beloved"]),
    new SongData("../src/music/remix/8.mp3", ["Megaman 2", "Willy Stage"]),
    new SongData("../src/music/remix/9.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The man with the machine gun"]),
    new SongData("../src/music/remix/10.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight"]),
    new SongData("../src/music/remix/11.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Force Your Way"]),
    new SongData("../src/music/remix/12.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X", "Fight With Seymour"]),
    new SongData("../src/music/remix/13.mp3", ["Kingdom Hearts","Simple and Clean", "Hikari"]),
    new SongData("../src/music/remix/14.mp3", ["The Legend of Zelda: Ocarina of Time","Ocarina of Time", "Song of Storms"]),
    new SongData("../src/music/remix/15.mp3", ["Super Mario World", "Overworld"]),
    new SongData("../src/music/remix/16.mp3", ["Red","Blue","Yellow","RBY","Title Theme"]),
    new SongData("../src/music/remix/17.mp3", ["The Legend of Zelda: Ocarina of Time","Ocarina of Time", "Lost Woods"]),
    new SongData("../src/music/remix/18.mp3", ["Donkey Kong 64","DK 64", "DK Rap"])
    ];
    
var Mario = [
    new SongData("../src/music/mario/1.mp3", ["Super Mario Odyssey","Jump Up, Super Star!","Mario Odyssey"]),
    new SongData("../src/music/mario/2.mp3", ["Super Mario Sunshine","Delfino Plaza","Mario Sunshine"]),
    new SongData("../src/music/mario/3.mp3", ["Super Mario Sunshine","Bianco Hills","Super Mario Sunshine","Mario Sunshine"]),
    new SongData("../src/music/mario/4.mp3", ["Super Mario Sunshine","A Secret Course","Mario Sunshine"]),
    new SongData("../src/music/mario/5.mp3", ["Super Mario Sunshine","Ricco Harbor","Mario Sunshine"]),
    new SongData("../src/music/mario/6.mp3", ["Super Mario Sunshine","Into the Tunnels","Mario Sunshine"]),
    new SongData("../src/music/mario/7.mp3", ["Super Mario Sunshine","Mecha-Bowser","Mario Sunshine"]),
    new SongData("../src/music/mario/8.mp3", ["Super Mario Sunshine","The Manta Storm","Mario Sunshine"]),
    new SongData("../src/music/mario/9.mp3", ["Super Mario Sunshine","Corona Mountain","Mario Sunshine"]),
    new SongData("../src/music/mario/10.mp3", ["Super Mario Sunshine","Final Bowser Battle","Mario Sunshine"]),
    new SongData("../src/music/mario/11.mp3", ["Super Mario Sunshine","Staff Roll","Mario Sunshine"]),
    new SongData("../src/music/mario/12.mp3", ["Super Mario Bros 3","Overworld","Mario Bros 3"]),
    new SongData("../src/music/mario/13.mp3", ["Super Mario Bros 3","Athletic","Mario Bros 3"]),
    new SongData("../src/music/mario/14.mp3", ["Super Mario Bros 3","Underwater","Mario Bros 3"]),
    new SongData("../src/music/mario/15.mp3", ["Super Mario Bros 3","Cursed Kings","Mario Bros 3"]),
    new SongData("../src/music/mario/17.mp3", ["Super Mario Bros 3","Airship Theme","Mario Bros 3"]),
    new SongData("../src/music/mario/18.mp3", ["Super Mario Bros 3","World Map 1","Mario Bros 3"]),
    new SongData("../src/music/mario/19.mp3", ["Super Mario Bros 3","World Map 4","Mario Bros 3"]),
    new SongData("../src/music/mario/20.mp3", ["Super Mario Bros 3","Hammer Bros","Mario Bros 3"]),
    new SongData("../src/music/mario/21.mp3", ["Super Mario Bros 3","Bowser Battle","Mario Bros 3"]),
    new SongData("../src/music/mario/22.mp3", ["Super Mario Galaxy","Starbit Festival","Mario Galaxy"]),
    new SongData("../src/music/mario/23.mp3", ["Super Mario Galaxy","Batterlock","Mario Galaxy"]),
    new SongData("../src/music/mario/24.mp3", ["Super Mario Galaxy","Floater Land","Mario Galaxy"]),
    new SongData("../src/music/mario/25.mp3", ["Super Mario Galaxy","To the Gateway","Mario Galaxy"]),
    new SongData("../src/music/mario/26.mp3", ["Super Mario Galaxy","Hell Prominence","Mario Galaxy"]),
    new SongData("../src/music/mario/27.mp3", ["Super Mario Galaxy","Egg Galaxy","Mario Galaxy"]),
    new SongData("../src/music/mario/28.mp3", ["Super Mario Galaxy","Stardust Road","Mario Galaxy"]),
    new SongData("../src/music/mario/29.mp3", ["Super Mario Galaxy","Wind Garden","Mario Galaxy"]),
    new SongData("../src/music/mario/30.mp3", ["Super Mario Galaxy","Figth to the Death at Koopa's Fort","Mario Galaxy"]),
    new SongData("../src/music/mario/31.mp3", ["Super Mario Galaxy","Staff Roll","Mario Galaxy"]),
    ];
    
var Touhou = [
    new SongData("../src/music/touhou/1.mp3", ["Touhou 6","UN OWEN WAS HER","U.N. OWEN WAS HER?","Flandre's Theme","The Embodiment of Scarlet Devil"]),
    new SongData("../src/music/touhou/2.mp3", ["Touhou 7","The Prismriver Sisters' Theme","Prismriver Sisters' Theme","Phantom Ensemble"]),
    new SongData("../src/music/touhou/3.mp3", ["Touhou 7","Yukari's Theme","Necrofantasia","Perfect Cherry Blossom"]),
    new SongData("../src/music/touhou/4.mp3", ["Touhou 7.5","Demystify Feast","Immaterial and Missing Power"]),
    new SongData("../src/music/touhou/5.mp3", ["Touhou 10","Marisa Kirisame's Theme","Love-colored Master Spark","Imperishable Night"]),
    new SongData("../src/music/touhou/6.mp3", ["Touhou 8","Flight of the Bamboo Cutter","Kaguya's Theme","Imperishable Night","Touhou 8"]),
    new SongData("../src/music/touhou/7.mp3", ["Touhou 8","Mokou's Theme","Reach for the moon","Inmortal smoke","Imperishable Night",]),
    new SongData("../src/music/touhou/8.mp3", ["Touhou 10","Road of the Apotropaic God","Dark Road","Mountain of Faith"]),
    new SongData("../src/music/touhou/9.mp3", ["Touhou 10","Nitori's Theme","The Candid Friend","Candid Friend","Mountain of Faith"]),
    new SongData("../src/music/touhou/10.mp3", ["Touhou 12","Fires of Hokkai","Undefined Fantastic Object"]),
    new SongData("../src/music/touhou/11.mp3", ["Touhou 10","Suwako's Theme","Mountain of Faith","Native Faith"]),
    new SongData("../src/music/touhou/12.mp3", ["Touhou 9","Sakuya's Theme","Flowering Night","Phantasmagoria of Flower View"]),
    new SongData("../src/music/touhou/13.mp3", ["Touhou 11","Utsuho Reiuji's Theme","Solar Sect of Mystic Wisdom","Nuclear Fusion","Subterranean Animism"]),
    new SongData("../src/music/touhou/14.mp3", ["Touhou 4","Bad Apple","Lotus Land Story"])
    ];
    
var Kirby = [
	new SongData("../src/music/kirby/1.mp3", ["Kirby's return to dream land","C-R-O-W-N-E-D","CROWNED","Kirby's return to dreamland"]),
    new SongData("../src/music/kirby/2.mp3", ["Kirby triple deluxe","Masked Dedede","Dedede's Royal Payback"]),
    new SongData("../src/music/kirby/3.mp3", ["Kirby triple deluxe","The World to win"]),
    new SongData("../src/music/kirby/4.mp3", ["Kirby's Dream Land","Green Greens","Kirby's DreamLand"]),
    new SongData("../src/music/kirby/5.mp3", ["Kirby's Dream Land","Mt. Dedede","Kirby's DreamLand"]),
    new SongData("../src/music/kirby/6.mp3", ["Kirby Super Star","Gourmet Race"]),
    new SongData("../src/music/kirby/7.mp3", ["Kirby 64: The Crystal Shards","Gourmet Race", "Kirby 64", "Kirby64"]),
    new SongData("../src/music/kirby/8.mp3", ["Kirby 64: The Crystal Shards","Pop Star","Kirby 64", "Kirby64"])
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
    new SongData("http://trivial2.net16.net/src/music/pokemon/34.mp3", ["X","Y","Emotion"]),
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
    new SongData("http://trivial2.net16.net/src/music/square/1.mp3", ["Kingdom Hearts 2.8","KH 2.8","Simple and Clean", "Simple and Clean Ray of Hope mix"]),
    new SongData("http://trivial2.net16.net/src/music/square/2.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The Landing"]),
    new SongData("http://trivial2.net16.net/src/music/square/3.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Force Your Way"]),
    new SongData("http://trivial2.net16.net/src/music/square/4.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Don't be Afraid"]),
    new SongData("http://trivial2.net16.net/src/music/square/5.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The man with the machine gun"]),
    new SongData("http://trivial2.net16.net/src/music/square/6.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Liberi Fatali"]),
    new SongData("http://trivial2.net16.net/src/music/square/7.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "The stage is set"]),
    new SongData("http://trivial2.net16.net/src/music/square/8.mp3", ["Final Fantasy VIII","Final Fantasy 8", "FF 8","FF VIII", "Waltz for the moon"]),
    new SongData("http://trivial2.net16.net/src/music/square/9.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 1"]),
    new SongData("http://trivial2.net16.net/src/music/square/10.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Battle 2"]),
    new SongData("http://trivial2.net16.net/src/music/square/11.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Hunter's Chance"]),
    new SongData("http://trivial2.net16.net/src/music/square/12.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Someone to protect"]),
    new SongData("http://trivial2.net16.net/src/music/square/13.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Rose of May"]),
    new SongData("http://trivial2.net16.net/src/music/square/14.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "You're not alone"]),
    new SongData("http://trivial2.net16.net/src/music/square/15.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "A Place to call home"]),
    new SongData("http://trivial2.net16.net/src/music/square/16.mp3", ["Final Fantasy IX","Final Fantasy 9", "FF 9","FF IX", "Vamo alla flamenco"]),
    new SongData("http://trivial2.net16.net/src/music/square/17.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII", "Opening theme","Bombing Mission"]),
    new SongData("http://trivial2.net16.net/src/music/square/18.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight"]),
    new SongData("http://trivial2.net16.net/src/music/square/19.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","JENOVA","J-E-N-O-V-A"]),
    new SongData("http://trivial2.net16.net/src/music/square/20.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Gold Saucer"]),
    new SongData("http://trivial2.net16.net/src/music/square/21.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Jenova Absolute"]),
    new SongData("http://trivial2.net16.net/src/music/square/22.mp3", ["Final Fantasy VII","Final Fantasy 7", "FF 7","FF VII","Those who fight further"]),
    new SongData("http://trivial2.net16.net/src/music/square/23.mp3", ["Bravely Second: End Layer","battle against emperor oblivion","Bravely Second"]),
    new SongData("http://trivial2.net16.net/src/music/square/24.mp3", ["Bravely Second: End Layer","Bravely Second","anne form 1"]),
    new SongData("http://trivial2.net16.net/src/music/square/25.mp3", ["Bravely Default: Flying Fairy","love's vagrant"]),
    new SongData("http://trivial2.net16.net/src/music/square/26.mp3", ["Bravely Default: Flying Fairy","bravely default","that person's name is"]),
    new SongData("http://trivial2.net16.net/src/music/square/27.mp3", ["Bravely Default: Flying Fairy","bravely default","You're my Hope"]),
    new SongData("http://trivial2.net16.net/src/music/square/28.mp3", ["Bravely Default: Flying Fairy","bravely default","Baby Bird"]),
    new SongData("http://trivial2.net16.net/src/music/square/29.mp3", ["Bravely Default: Flying Fairy","bravely default","Wind's Course"]),
    new SongData("http://trivial2.net16.net/src/music/square/30.mp3", ["Bravely Default: Flying Fairy","bravely default","Conflict's Chime"]),
    new SongData("http://trivial2.net16.net/src/music/square/31.mp3", ["Bravely Default: Flying Fairy","bravely default","Wicked Flight"]),
    new SongData("http://trivial2.net16.net/src/music/square/32.mp3", ["Bravely Default: Flying Fairy","bravely default","Serpent Eating the Ground"]),
    new SongData("http://trivial2.net16.net/src/music/square/33.mp3", ["Bravely Default: Flying Fairy","bravely default","Fighting to the End"]),
    new SongData("http://trivial2.net16.net/src/music/square/34.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Oui are Al Bhed"]),
    new SongData("http://trivial2.net16.net/src/music/square/35.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Normal Battle"]),
    new SongData("http://trivial2.net16.net/src/music/square/36.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Calm Before the Storm"]),
    new SongData("http://trivial2.net16.net/src/music/square/37.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Tidus's Theme"]),
    new SongData("http://trivial2.net16.net/src/music/square/38.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Rikku's Theme"]),
    new SongData("http://trivial2.net16.net/src/music/square/39.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Yuna's Theme"]),
    new SongData("http://trivial2.net16.net/src/music/square/40.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Suteki Da Ne"]),
    new SongData("http://trivial2.net16.net/src/music/square/41.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","A Contest of Aeons"]),
    new SongData("http://trivial2.net16.net/src/music/square/42.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Someday The Dream Will End"]),
    new SongData("http://trivial2.net16.net/src/music/square/43.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","To Zanarkand"]),
    new SongData("http://trivial2.net16.net/src/music/square/44.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Assault"]),
    new SongData("http://trivial2.net16.net/src/music/square/45.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Decisive Battle"]),
    new SongData("http://trivial2.net16.net/src/music/square/46.mp3", ["Final Fantasy X","Final Fantasy 10", "FF 10","FF X","Blitz Off!"]),
    new SongData("http://trivial2.net16.net/src/music/square/47.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Dearly Beloved"]),
    new SongData("http://trivial2.net16.net/src/music/square/48.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Destati"]),
    new SongData("http://trivial2.net16.net/src/music/square/49.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Hikari (Orchestra)"]),
    new SongData("http://trivial2.net16.net/src/music/square/50.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Destiny's Force"]),
    new SongData("http://trivial2.net16.net/src/music/square/51.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Squirming Evil"]),
    new SongData("http://trivial2.net16.net/src/music/square/52.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Gummi Ship Level 3"]),
    new SongData("http://trivial2.net16.net/src/music/square/53.mp3", ["Kingdom Hearts","Kingdom Hearts 1", "KH","KH 1","Hollow Bastion"]),
    ];
    
var Sonic = [
    new SongData("http://trivial2.net16.net/src/music/sonic/1.mp3", ["Sonic The Hedgehog 2006","Sonic The Hedgehog","Sonic 2006","Solaris Phase 2"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/2.mp3", ["Sonic Generations","Rooftop Run (Modern)"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/3.mp3", ["Sonic Generations","Rooftop Run (Classic)"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/4.mp3", ["Sonic Adventure 2","Escape From the City"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/5.mp3", ["Sonic Adventure 2 Battle","Live and Learn"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/6.mp3", ["Sonic Colors","Reach for the stars"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/7.mp3", ["Sonic Colors","Final Boss Phase 2"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/8.mp3", ["Sonic Generations","City Escape (Modern)"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/9.mp3", ["Sonic The Hedgehog 3 & Knuckles","Sonic The Hedgehog 3","Sonic 3","Ice Cap"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/10.mp3", ["Sonic The Hedgehog","Sonic 1","Metropolis Zone"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/11.mp3", ["Sonic Heroes","Sonic Heroes Theme"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/12.mp3", ["Sonic Unleashed","Spagonia Day","Rooftop Run"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/13.mp3", ["Sonic Adventure 2","It doesn't matter"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/14.mp3", ["Sonic and The Black Knight","Sonic & The Black Knight","Knights of the wind", "Sonic Black Knight"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/15.mp3", ["Sonic Adventure 2","That's the way I like it","Metal Harbor"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/16.mp3", ["Sonic Generations","Crisis City (Modern)"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/17.mp3", ["Sonic The Hedgehog 2006","Sonic The Hedgehog","Sonic 2006","Dreams of an Absolution"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/18.mp3", ["Sonic Unleashed","Perfect Dark Gaia"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/19.mp3", ["Sonic Adventure 2 Battle","Sonic Vs Shadow"]),
    new SongData("http://trivial2.net16.net/src/music/sonic/11.mp3", ["Sonic Heroes","What I'm made of"])
    ];
    
var SpikeChun = [
	new SongData("../src/music/spikechun/1.mp3", ["Nine Hours, Nine Persons, Nine Doors","999"]),
	new SongData("../src/music/spikechun/2.mp3", ["Nine Hours, Nine Persons, Nine Doors","999","Unary Game"]),
	new SongData("../src/music/spikechun/3.mp3", ["Nine Hours, Nine Persons, Nine Doors","999","Binary Game"]),
	new SongData("../src/music/spikechun/4.mp3", ["Nine Hours, Nine Persons, Nine Doors","999","Riddle and Puzzle"]),
	new SongData("../src/music/spikechun/5.mp3", ["Nine Hours, Nine Persons, Nine Doors","999","Trepidation"]),
	new SongData("../src/music/spikechun/6.mp3", ["Nine Hours, Nine Persons, Nine Doors","999","Morphogenetic Sorrow"]),
	new SongData("../src/music/spikechun/7.mp3", ["Virtue's Last Reward","VLR","Ambidexterity"]),
	new SongData("../src/music/spikechun/8.mp3", ["Virtue's Last Reward","VLR","Pantry"]),
	new SongData("../src/music/spikechun/9.mp3", ["Virtue's Last Reward","VLR","Sinesterness"]),
	new SongData("../src/music/spikechun/10.mp3", ["Virtue's Last Reward","VLR","Placidity"]),
	new SongData("../src/music/spikechun/11.mp3", ["Virtue's Last Reward","VLR","Strain"]),
	new SongData("../src/music/spikechun/12.mp3", ["Virtue's Last Reward","VLR","Confession"]),
	new SongData("../src/music/spikechun/13.mp3", ["Virtue's Last Reward","VLR","Clarification"]),
	new SongData("../src/music/spikechun/14.mp3", ["Virtue's Last Reward","VLR","Blue Bird"]),
	new SongData("../src/music/spikechun/15.mp3", ["Zero Time Dilemma","ZTD","Trash Disposal"]),
	new SongData("../src/music/spikechun/16.mp3", ["Zero Time Dilemma","ZTD","Make your decision"]),
	new SongData("../src/music/spikechun/17.mp3", ["Zero Time Dilemma","ZTD","Reminiscence"]),
	new SongData("../src/music/spikechun/18.mp3", ["Zero Time Dilemma","ZTD","Extreme Urgency"]),
	new SongData("../src/music/spikechun/19.mp3", ["Danganronpa","Punishment"]),
	new SongData("../src/music/spikechun/20.mp3", ["Danganronpa","Beautiful days"]),
	new SongData("../src/music/spikechun/21.mp3", ["Danganronpa","Class trial"]),
	new SongData("../src/music/spikechun/22.mp3", ["Danganronpa","Distrust"]),
	new SongData("../src/music/spikechun/23.mp3", ["Danganronpa","Welcome to despair Academy"]),
	new SongData("../src/music/spikechun/24.mp3", ["Danganronpa","Beautiful Morning"]),
	new SongData("../src/music/spikechun/25.mp3", ["Danganronpa","Climaz Reasoning"]),
	new SongData("../src/music/spikechun/26.mp3", ["Danganronpa 2","Beautiful Ruin"]),
	new SongData("../src/music/spikechun/27.mp3", ["Danganronpa 2","Monomi's Lesson"]),
	new SongData("../src/music/spikechun/28.mp3", ["Danganronpa 2","Ikoroshia"]),
	new SongData("../src/music/spikechun/29.mp3", ["Danganronpa 2","Dive Drive"]),
	new SongData("../src/music/spikechun/30.mp3", ["Danganronpa 2","Welcome to DANGAN Island"]),
	new SongData("../src/music/spikechun/31.mp3", ["Danganronpa Ultra Despair Girls","Ultra Despair Girls","Wonderful Dead"]),
	new SongData("../src/music/spikechun/32.mp3", ["Danganronpa Ultra Despair Girls","Ultra Despair Girls","Welcome to TOWA Tower"]),
	new SongData("../src/music/spikechun/33.mp3", ["Danganronpa Ultra Despair Girls","Ultra Despair Girls","Warriors of Hope"]),
	new SongData("../src/music/spikechun/34.mp3", ["Danganronpa Ultra Despair Girls","Ultra Despair Girls","Alice in the Childrens Land"])
	];

var K3 = [
    new SongData("http://trivial2.net16.net/src/music/k3/1.mp3", ["One Piece","Overtaken"]),
    new SongData("http://trivial2.net16.net/src/music/k3/2.mp3", ["One Piece","The very very very strongest"]),
    new SongData("http://trivial2.net16.net/src/music/k3/3.mp3", ["One Piece","Brand New World"]),
    new SongData("http://trivial2.net16.net/src/music/k3/4.mp3", ["One Piece","We go"]),
    new SongData("http://trivial2.net16.net/src/music/k3/5.mp3", ["One Piece","Crazy Rainbow Star"]),
    new SongData("http://trivial2.net16.net/src/music/k3/6.mp3", ["Detective Conan","Detectiu Conan"]),
    new SongData("http://trivial2.net16.net/src/music/k3/7.mp3", ["Corrector Yui"]),
    new SongData("http://trivial2.net16.net/src/music/k3/8.mp3", ["Dragon Ball Z","Bola de Drac Z"]),
    new SongData("http://trivial2.net16.net/src/music/k3/9.mp3", ["Dragon Ball Z","Bola de Drac Z"]),
    new SongData("http://trivial2.net16.net/src/music/k3/10.mp3", ["Dragon Ball Z","Bola de Drac Z"]),
    new SongData("http://trivial2.net16.net/src/music/k3/11.mp3", ["Bob the builder","Bob el manetes"]),
    new SongData("http://trivial2.net16.net/src/music/k3/12.mp3", ["Bobobo-bo Bo-bobo","Bobobo"]),
    new SongData("http://trivial2.net16.net/src/music/k3/13.mp3", ["Bobobo-bo Bo-bobo","Bobobo"]),
    new SongData("http://trivial2.net16.net/src/music/k3/14.mp3", ["Detective Conan","Detectiu Conan"]),
    new SongData("http://trivial2.net16.net/src/music/k3/15.mp3", ["New Dr Slump","New Doctor Slump","Dr Slump 2","Doctor Slump 2"]),
    new SongData("http://trivial2.net16.net/src/music/k3/16.mp3", ["Dr Slump","Doctor Slump"]),
    new SongData("http://trivial2.net16.net/src/music/k3/17.mp3", ["Dragon Ball","Bola de Drac"]),
    new SongData("http://trivial2.net16.net/src/music/k3/18.mp3", ["Dragon Ball Z","Bola de Drac Z"]),
    new SongData("http://trivial2.net16.net/src/music/k3/19.mp3", ["Doraemon"]),
    new SongData("http://trivial2.net16.net/src/music/k3/20.mp3", ["Doraemon"]),
    new SongData("http://trivial2.net16.net/src/music/k3/21.mp3", ["Doraemon"]),
    new SongData("http://trivial2.net16.net/src/music/k3/22.mp3", ["Fruits Basket"]),
    new SongData("http://trivial2.net16.net/src/music/k3/23.mp3", ["Fushigi Yugi"]),
    new SongData("http://trivial2.net16.net/src/music/k3/24.mp3", ["Fushigi Yugi"]),
    new SongData("http://trivial2.net16.net/src/music/k3/25.mp3", ["Hattori Ninja","Ninja Hatori","Hattori el ninja"]),
    new SongData("http://trivial2.net16.net/src/music/k3/26.mp3", ["Inuyasha"]),
    new SongData("http://trivial2.net16.net/src/music/k3/27.mp3", ["Inuyasha"]),
    new SongData("http://trivial2.net16.net/src/music/k3/28.mp3", ["Inuyasha"]),
    new SongData("http://trivial2.net16.net/src/music/k3/29.mp3", ["Kamikaze Kaitou Jeanne","Jeanne la lladre Kamikaze","Jeanne, la lladre Kamikaze"]),
    new SongData("http://trivial2.net16.net/src/music/k3/30.mp3", ["Keroro"]),
    new SongData("http://trivial2.net16.net/src/music/k3/31.mp3", ["Keroro"]),
    new SongData("http://trivial2.net16.net/src/music/k3/32.mp3", ["Kimagure Orange Road"]),
    new SongData("http://trivial2.net16.net/src/music/k3/33.mp3", ["Kiteretsu"]),
    new SongData("http://trivial2.net16.net/src/music/k3/34.mp3", ["Kochikame","Kochira Katsushika-ku Kameari Koen Mae Hashutsujo"]),
    new SongData("http://trivial2.net16.net/src/music/k3/35.mp3", ["The Law of Ueki","La Llei de Ueki","Falco"]),
    new SongData("http://trivial2.net16.net/src/music/k3/36.mp3", ["Love Hina"]),
    new SongData("http://trivial2.net16.net/src/music/k3/37.mp3", ["Ojamajo Doremi","La magica Doremi","Ojamajo Carnival"]),
    new SongData("http://trivial2.net16.net/src/music/k3/38.mp3", ["Yuyu Hakusho","Yuyu Hakusho Els defensors del mes enlla"]),
    new SongData("http://trivial2.net16.net/src/music/k3/39.mp3", ["Slam Dunk","Slam Dunk: La Gran Esmaixada"]),
    new SongData("http://trivial2.net16.net/src/music/k3/40.mp3", ["Shin Chan"]),
    new SongData("http://trivial2.net16.net/src/music/k3/41.mp3", ["Shin Chan"]),
    new SongData("http://trivial2.net16.net/src/music/k3/42.mp3", ["Code Lyoko","Codi Lyoko"]),
    new SongData("http://trivial2.net16.net/src/music/k3/43.mp3", ["CatDog","Gat i Gos","Gatigos"]),
    new SongData("http://trivial2.net16.net/src/music/k3/44.mp3", ["Galactik Football","Futbol Galactic"]),
    new SongData("http://trivial2.net16.net/src/music/k3/45.mp3", ["Card Captor Sakura","Sakura, la caçadora de cartes","Sakura la caçadora de cartes"]),
    new SongData("http://trivial2.net16.net/src/music/k3/46.mp3", ["Card Captor Sakura","Sakura, la caçadora de cartes","Sakura la caçadora de cartes"]),
    new SongData("http://trivial2.net16.net/src/music/k3/47.mp3", ["Card Captor Sakura","Sakura, la caçadora de cartes","Sakura la caçadora de cartes"]),
	new SongData("http://trivial2.net16.net/src/music/k3/48.mp3", ["Tsubasa Reservoir Chronicle","Tsubasa les croniques perdudes"]),
	new SongData("http://trivial2.net16.net/src/music/k3/49.mp3", ["Tsubasa Reservoir Chronicle","Tsubasa les croniques perdudes"]),
	new SongData("http://trivial2.net16.net/src/music/k3/50.mp3", ["Sailor Moon"]),
	new SongData("http://trivial2.net16.net/src/music/k3/51.mp3", ["Detective Conan","Detectiu Conan"]),
	new SongData("http://trivial2.net16.net/src/music/k3/52.mp3", ["Hey Arnold"]),
	new SongData("http://trivial2.net16.net/src/music/k3/53.mp3", ["Get Backers"]),
	new SongData("http://trivial2.net16.net/src/music/k3/54.mp3", ["Ninja Boy Rantaro","Nintama Rantaro","Rantaro"]),
	new SongData("http://trivial2.net16.net/src/music/k3/55.mp3", ["DNA2","DNA 2","DNA"])
];

var Disney = [
	new SongData("http://trivial2.net16.net/src/music/disney/1.mp3", ["The Little Mermaid","Under the sea"]),
    new SongData("http://trivial2.net16.net/src/music/disney/2.mp3", ["The Lion King","I Just Can't Wait to be King"]),
    new SongData("http://trivial2.net16.net/src/music/disney/3.mp3", ["The Lion King","Circle of Life"]),
    new SongData("http://trivial2.net16.net/src/music/disney/4.mp3", ["Aladdin","A Whole New World"]),
    new SongData("http://trivial2.net16.net/src/music/disney/5.mp3", ["Tangled","Then Will My Life Begin","Enredados"]),
    new SongData("http://trivial2.net16.net/src/music/disney/6.mp3", ["I'll make a man out of you","Mulan"]),
    new SongData("http://trivial2.net16.net/src/music/disney/7.mp3", ["Hercules","Zero to Hero"]),
    new SongData("http://trivial2.net16.net/src/music/disney/8.mp3", ["Tarzan","Song of a Man"]),
    new SongData("http://trivial2.net16.net/src/music/disney/9.mp3", ["Tarzan","You'll be in my heart"]),
    new SongData("http://trivial2.net16.net/src/music/disney/10.mp3", ["Mulan","A girl worth fighting for"]),
    new SongData("http://trivial2.net16.net/src/music/disney/11.mp3", ["Aladdin","Prince Ali"]),
    new SongData("http://trivial2.net16.net/src/music/disney/12.mp3", ["Toy Story","You've got a friend on me"]),
    new SongData("http://trivial2.net16.net/src/music/disney/13.mp3", ["Snow White","Whistle while you work","Blancanieves"]),
    new SongData("http://trivial2.net16.net/src/music/disney/14.mp3", ["Aladdin","One jump ahead"]),
    new SongData("http://trivial2.net16.net/src/music/disney/15.mp3", ["Mary Poppins","Supercalifragilisticexpialidocious"]),
    new SongData("http://trivial2.net16.net/src/music/disney/16.mp3", ["Phineas and Ferb","A-G-L-E-T","Phineas y Ferb"]),
    new SongData("http://trivial2.net16.net/src/music/disney/17.mp3", ["Phineas and Ferb","Evil Love","Phineas y Ferb"]),
    new SongData("http://trivial2.net16.net/src/music/disney/18.mp3", ["Phineas and Ferb","Gitchi Gitchi Goo","Phineas y Ferb"]),
    new SongData("http://trivial2.net16.net/src/music/disney/19.mp3", ["Phineas and Ferb","Phineas y Ferb"]),
    new SongData("http://trivial2.net16.net/src/music/disney/20.mp3", ["Hannah Montana","You've got the best of both worlds"]),
    new SongData("http://trivial2.net16.net/src/music/disney/21.mp3", ["Wizards of Waverly Place","Los magos de Waverly Place"]),
    new SongData("http://trivial2.net16.net/src/music/disney/22.mp3", ["Camp Rock","We Rock"]),
    new SongData("http://trivial2.net16.net/src/music/disney/23.mp3", ["The Nightmare before Christmas","What's This?"]),
    new SongData("http://trivial2.net16.net/src/music/disney/24.mp3", ["Hercules","A star is born"]),
    new SongData("http://trivial2.net16.net/src/music/disney/25.mp3", ["Camp Rock","Gotta find you"]),
    new SongData("http://trivial2.net16.net/src/music/disney/26.mp3", ["The Lion King","Hakuna Matata"]),
    new SongData("http://trivial2.net16.net/src/music/disney/27.mp3", ["Tarzan","Trashin the camp"]),
    new SongData("http://trivial2.net16.net/src/music/disney/28.mp3", ["Aladdin","Friend like me"]),
    new SongData("http://trivial2.net16.net/src/music/disney/29.mp3", ["Lilo & Stitch","Lilo y Stitch","He Mele no Lilo"]),
    new SongData("http://trivial2.net16.net/src/music/disney/30.mp3", ["Lilo & Stitch","Lilo y Stitch","Hawaiian Roller Coaster Ride"]),
    new SongData("http://trivial2.net16.net/src/music/disney/31.mp3", ["Frozen","Let it Go"]),
    new SongData("http://trivial2.net16.net/src/music/disney/32.mp3", ["Frozen","For the first time in forever"]),
    new SongData("http://trivial2.net16.net/src/music/disney/33.mp3", ["Frozen","Do you want to build a Snowman"]),
    new SongData("http://trivial2.net16.net/src/music/disney/34.mp3", ["High School Musical","High School Musical 1", "Bop to the top"]),
    new SongData("http://trivial2.net16.net/src/music/disney/35.mp3", ["High School Musical","High School Musical 1", "Stick to the status quo"]),
    new SongData("http://trivial2.net16.net/src/music/disney/36.mp3", ["High School Musical","High School Musical 1", "We're all in this together"]),
    new SongData("http://trivial2.net16.net/src/music/disney/37.mp3", ["High School Musical","High School Musical 1", "What I've been looking for"]),
    new SongData("http://trivial2.net16.net/src/music/disney/38.mp3", ["High School Musical","High School Musical 1", "Breaking Free"]),
    new SongData("http://trivial2.net16.net/src/music/disney/39.mp3", ["High School Musical 2", "What Time is it"]),
    new SongData("http://trivial2.net16.net/src/music/disney/40.mp3", ["Kim possible"]),
    new SongData("http://trivial2.net16.net/src/music/disney/41.mp3", ["Tarzan","Strangers Like me"]),
    new SongData("http://trivial2.net16.net/src/music/disney/42.mp3", ["Beauty and the Beast","La bella y la bestia","Gaston"]),
    new SongData("http://trivial2.net16.net/src/music/disney/43.mp3", ["Beauty and the Beast","La bella y la bestia","Tale as old as time"]),
    new SongData("http://trivial2.net16.net/src/music/disney/44.mp3", ["The Jungle Book","El libro de la selva","Bare Necessities"]),
    new SongData("http://trivial2.net16.net/src/music/disney/45.mp3", ["The Jungle Book","El libro de la selva","I wanna be like you"]),
    new SongData("http://trivial2.net16.net/src/music/disney/46.mp3", ["Moana","How far i'll go"]),
    new SongData("http://trivial2.net16.net/src/music/disney/47.mp3", ["Zootopia","Try Everything"]),
	new SongData("http://trivial2.net16.net/src/music/disney/48.mp3", ["Jhonny Test"])
	];

var Indie = [
	new SongData("../src/music/indie/1.mp3", ["Shovel knight","In the halls of the usurper","Pridemor keep"]), 
    new SongData("../src/music/indie/2.mp3", ["Shovel knight","high above the land","the flying machine"]),
    new SongData("../src/music/indie/3.mp3", ["Shovel knight","plague of shadows","waltz for one"]), 
    new SongData("../src/music/indie/4.mp3", ["bastion","set sail","setting sail","coming home"]), 
	new SongData("../src/music/indie/5.mp3", ["bastion","spike in a rail"]), 
    new SongData("../src/music/indie/6.mp3", ["transistor","impossible"]), 
    new SongData("../src/music/indie/7.mp3", ["transistor","the spine"]),
    new SongData("../src/music/indie/8.mp3", ["lisa","the end is nigh"]), 
    new SongData("../src/music/indie/9.mp3", ["lisa","goodbye baby"]), 
    new SongData("../src/music/indie/10.mp3", ["lisa","summer love"]), 
    new SongData("../src/music/indie/11.mp3", ["Crypt of the Necrodancer","For Whom the Knell Tolls","dead ringer"]),
    new SongData("../src/music/indie/12.mp3", ["Crypt of the Necrodancer","The Wight to Remain"]) 
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
    if (!$("#SpikeChun").is(":hidden")) vec.push(8);
    if (!$("#Sonic").is(":hidden")) vec.push(9);
    if (!$("#K3").is(":hidden")) vec.push(10);
    if (!$("#Disney").is(":hidden")) vec.push(11);
    return vec;
}

function show_res() {
	$("#Song").trigger("pause");
	$(".game").hide();
	$(".suck").show();
	$(".res").show();
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

var CategoryMatrix = [Atlus,Anime,Remix,Mario,Touhou,Kirby,Pokemon,Square,SpikeChun,Sonic,K3,Disney];
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
		$("#Song").prop("volume", 0.25);
		$("#Song").attr("src", CategoryMatrix[i][j].link);
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
		}
	});
	$("#Back").click(function(){
		$("#Song").trigger("pause");
		$(".cat").show();
		$(".res").hide();
		$(".suck").hide();
		$(".game").hide();
		ResetGame();
	});
});
