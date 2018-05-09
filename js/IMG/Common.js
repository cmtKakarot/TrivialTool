//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE STRUCTURE -------------------------------------
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
//---------------------------------------------------------------------------------------
//--------------------------------- IMAGE DATABASE --------------------------------------
//---------------------------------------------------------------------------------------
 
//26
var EricVec = [
	new ImageData("../../src/images/imt/2.png", ["Final Fantasy X"], "Eric"),
    new ImageData("../../src/images/imt/1.png", ["Metal Gear Solid 3"], "Eric"),
    new ImageData("../../src/images/imt/1.jpg", ["Persona 4"], "Eric"),
    new ImageData("../../src/images/imt/29.jpg", ["Metal Gear Solid 2"], "Eric"),
    new ImageData("../../src/images/imt/20.png", ["Dofus"], "Eric"),
    new ImageData("../../src/images/imt/30.jpg", ["Skyward Sword"], "Eric"),
    new ImageData("../../src/images/imt/31.jpg", ["Rust"], "Eric"),
    new ImageData("../../src/images/imt/21.png", ["Dissidia NT"], "Eric"),
    new ImageData("../../src/images/imt/32.jpg", ["Fire Emblem Heroes"], "Eric"),
    new ImageData("../../src/images/imt/33.jpg", ["Clash Royale"], "Eric"),
    new ImageData("../../src/images/imt/34.jpg", ["Kid Icarus Uprising"], "Eric"),
    new ImageData("../../src/images/imt/35.jpg", ["Baten Kaitos"], "Eric"),
    new ImageData("../../src/images/imt/70.jpg", ["Osu!"], "Eric"),
    new ImageData("../../src/images/imt/71.jpg", ["Persona 5: Dancing Star Night"], "Eric"),
    new ImageData("../../src/images/imt/72.jpg", ["Osu!"], "Eric"),
    new ImageData("../../src/images/imt/73.jpg", ["Persona 4: Dancing all Night"], "Eric"),
    new ImageData("../../src/images/imt/74.jpg", ["Soul Calibur 2"], "Eric"),
    new ImageData("../../src/images/imt/75.jpg", ["Tekken x Street Fighter"], "Eric"),
    new ImageData("../../src/images/imt/76.jpg", ["Okami"], "Eric"),
    new ImageData("../../src/images/imt/77.jpg", ["Ultimate Marvel vs Capcom 3"], "Eric"),
    new ImageData("../../src/images/imt/78.jpg", ["Persona 4: Arena"], "Eric"),
    new ImageData("../../src/images/imt/79.jpg", ["Tony Hawk's Pro Skater 2"], "Eric"),
    new ImageData("../../src/images/imt/80.jpg", ["Metal Gear Solid V"], "Eric"),
    new ImageData("../../src/images/imt/81.jpg", ["Super Smash Bros Brawl"], "Eric"),
    new ImageData("../../src/images/imt/82.jpg", ["Kingdom Hears 3D"], "Eric"),
    new ImageData("../../src/images/imt/83.jpg", ["Soul Calibur 4"], "Eric"),
    new ImageData("../../src/images/imt/84.jpg", ["Osu Tatakae Ouendan 2"], "Eric"),
    new ImageData("../../src/images/imt/112.jpg", ["Breath of the Wild"], "Eric"),
    new ImageData("../../src/images/imt/147.jpg", ["Stanley Parable"], "Eric"),
    new ImageData("../../src/images/imt/148.jpg", ["Stanley Parable"], "Eric"),
    new ImageData("../../src/images/imt/156.jpg", ["Death Stranding"], "Eric"),
];

//10
var FerVec = [
	new ImageData("../../src/images/imt/3.png", ["Mario Party 4"], "Fernando"),
    new ImageData("../../src/images/imt/4.png", ["Final Fantasy VII"], "Fernando"),
    new ImageData("../../src/images/imt/5.png", ["Street Fighter II"], "Fernando"),
    new ImageData("../../src/images/imt/6.png", ["Call of duty Black Ops 2"], "Fernando"),
    new ImageData("../../src/images/imt/11.png", ["Touhou 12"], "Fernando"),
    new ImageData("../../src/images/imt/65.jpg", ["Conker's bad fur day"], "Fernando"),
    new ImageData("../../src/images/imt/66.jpg", ["Halo 2"], "Fernando"),
    new ImageData("../../src/images/imt/67.jpg", ["Metroid prime"], "Fernando"),
    new ImageData("../../src/images/imt/68.jpg", ["Shadow of the Colossus"], "Fernando"),
    new ImageData("../../src/images/imt/69.jpg", ["Wii Fit"], "Fernando"),
];

//29
var MarcVec = [
	new ImageData("../../src/images/imt/2.jpg", ["Golden Sun 2"], "Marc"),
    new ImageData("../../src/images/imt/7.png", ["Bravely Default"], "Marc"),
    new ImageData("../../src/images/imt/3.jpg", ["Tales of Phantasia"], "Marc"),
    new ImageData("../../src/images/imt/4.jpg", ["Dragon Ball Adventure"], "Marc"),
    new ImageData("../../src/images/imt/5.jpg", ["Fire Emblem Echoes"], "Marc"),
    new ImageData("../../src/images/imt/6.jpg", ["Ace Attorney: Dual Destinies"], "Marc"),
    new ImageData("../../src/images/imt/7.jpg", ["Monster Hunter 4 Ultimate"], "Marc"),
    new ImageData("../../src/images/imt/8.jpg", ["Pokemon X/Y"], "Marc"),
    new ImageData("../../src/images/imt/9.jpg", ["Virtue's Last Reward"], "Marc"),
    new ImageData("../../src/images/imt/8.png", ["Pokemon Crystal"], "Marc"),
    new ImageData("../../src/images/imt/10.jpg", ["Fire Emblem: Path of Radiance"], "Marc"),
    new ImageData("../../src/images/imt/11.jpg", ["Fire Emblem: Path of Radiance"], "Marc"),
    new ImageData("../../src/images/imt/12.jpg", ["Mario Kart: Double Dash"], "Marc"),
    new ImageData("../../src/images/imt/13.jpg", ["Link's Awakening"], "Marc"),
    new ImageData("../../src/images/imt/14.jpg", ["Link's Awakening"], "Marc"),
    new ImageData("../../src/images/imt/15.jpg", ["Metroid Prime"], "Marc"),
    new ImageData("../../src/images/imt/16.jpg", ["Metroid Prime 2"], "Marc"),
    new ImageData("../../src/images/imt/9.png", ["Metroid Prime 3"], "Marc"),
    new ImageData("../../src/images/imt/10.png", ["Metroid Prime Hunters"], "Marc"),
    new ImageData("../../src/images/imt/17.jpg", ["Metroid Federation Forces"], "Marc"),
    new ImageData("../../src/images/imt/37.jpg", ["Persona 5"], "Marc"),
    new ImageData("../../src/images/imt/38.jpg", ["Persona 4"], "Marc"),
    new ImageData("../../src/images/imt/39.jpg", ["Mario Power Tennis GBA"], "Marc"),
    new ImageData("../../src/images/imt/40.jpg", ["Kid Icarus Uprising"], "Marc"),
    new ImageData("../../src/images/imt/29.png", ["Ace Attorney: Apollo Justice"], "Marc"),
    new ImageData("../../src/images/imt/41.jpg", ["Ace Attorney: Spirit of Justice"], "Marc"),
    new ImageData("../../src/images/imt/42.jpg", ["Pokemon OR/AS"], "Marc"),
    new ImageData("../../src/images/imt/43.jpg", ["Pokemon Sun/Moon"], "Marc"),
    new ImageData("../../src/images/imt/44.jpg", ["Pokemon Ultra Sun/Moon"], "Marc"),
    new ImageData("../../src/images/imt/45.jpg", ["Xenoblade Chronicles X"], "Marc"),
    new ImageData("../../src/images/imt/67.png", ["Xenoblade Chronicles"], "Marc"),
    new ImageData("../../src/images/imt/68.png", ["persona 3 portable"], "Marc"),
    new ImageData("../../src/images/imt/188.jpg", ["persona 3"], "Marc"),
    new ImageData("../../src/images/imt/189.jpg", ["Fire Emblem: Sword of Seals"], "Marc"),
    new ImageData("../../src/images/imt/69.png", ["Fire Embem: Geneology of Holy War"], "Marc"),
    new ImageData("../../src/images/imt/70.png", ["Fire Embem: Sacred Stones"], "Marc"),
    new ImageData("../../src/images/imt/190.jpg", ["Fire Emblem: Radiant Dawn"], "Marc"),
    new ImageData("../../src/images/imt/71.png", ["Advance Wars"], "Marc"),
];

//44
var GrewVec = [
	new ImageData("../../src/images/imt/18.jpg", ["Dragon Ball Xenoverse 2"], "Gerard"),
    new ImageData("../../src/images/imt/12.png", ["Pikmin"], "Gerard"),
    new ImageData("../../src/images/imt/19.jpg", ["Smash Bros 4 3DS"], "Gerard"),
    new ImageData("../../src/images/imt/13.png", ["AC: Happy Home Designer"], "Gerard"),
    new ImageData("../../src/images/imt/20.jpg", ["Dr Luigi"], "Gerard"),
    new ImageData("../../src/images/imt/21.jpg", ["Earthbound"], "Gerard"),
    new ImageData("../../src/images/imt/22.jpg", ["Luigi's Mansion 2"], "Gerard"),
    new ImageData("../../src/images/imt/23.jpg", ["Luigi's Mansion 2"], "Gerard"),
    new ImageData("../../src/images/imt/24.jpg", ["Luigi's Mansion"], "Gerard"),
    new ImageData("../../src/images/imt/25.jpg", ["NintendoLand"], "Gerard"),
    new ImageData("../../src/images/imt/26.jpg", ["Pikmin 2"], "Gerard"),
    new ImageData("../../src/images/imt/27.jpg", ["Pikmin 3"], "Gerard"),
    new ImageData("../../src/images/imt/28.jpg", ["Smash Bros 4 WiiU"], "Gerard"),
    new ImageData("../../src/images/imt/35.png", ["Banjo Tooie"], "Gerard"),
    new ImageData("../../src/images/imt/90.jpg", ["Bioshock"], "Gerard"),
    new ImageData("../../src/images/imt/91.jpg", ["Cuphead"], "Gerard"),
    new ImageData("../../src/images/imt/36.png", ["Danganronpa"], "Gerard"),
    new ImageData("../../src/images/imt/37.png", ["Ultra Despair Girls"], "Gerard"),
    new ImageData("../../src/images/imt/92.jpg", ["Danganronpa V3"], "Gerard"),
    new ImageData("../../src/images/imt/93.jpg", ["Danganronpa V3"], "Gerard"),
    new ImageData("../../src/images/imt/94.jpg", ["A Dad Dating Simulator"], "Gerard"),
    new ImageData("../../src/images/imt/95.jpg", ["Hatoful Boyfriend"], "Gerard"),
    new ImageData("../../src/images/imt/96.jpg", ["Hey you, Pikachu!"], "Gerard"),
    new ImageData("../../src/images/imt/97.jpg", ["Limbo"], "Gerard"),
    new ImageData("../../src/images/imt/98.jpg", ["Majora's Mask"], "Gerard"),
    new ImageData("../../src/images/imt/38.png", ["Persona 5"], "Gerard"),
    new ImageData("../../src/images/imt/99.jpg", ["Owlboy"], "Gerard"),
    new ImageData("../../src/images/imt/39.png", ["Ocarina of Time"], "Gerard"),
    new ImageData("../../src/images/imt/100.jpg", ["Yooka Laylee"], "Gerard"),
    new ImageData("../../src/images/imt/101.jpg", ["Ori and the blind forest"], "Gerard"),
    new ImageData("../../src/images/imt/102.jpg", ["Super Mario Maker"], "Gerard"),
    new ImageData("../../src/images/imt/103.jpg", ["Super Mario Maker"], "Gerard"),
    new ImageData("../../src/images/imt/104.jpg", ["One Thousand Lies"], "Gerard"),
    new ImageData("../../src/images/imt/105.jpg", ["Sonic Forces"], "Gerard"),
    new ImageData("../../src/images/imt/106.jpg", ["Xenoblade Chronicles 2"], "Gerard"),
    new ImageData("../../src/images/imt/107.jpg", ["Second Life"], "Gerard"),
    new ImageData("../../src/images/imt/108.jpg", ["Metal Gear Solid"], "Gerard"),
    new ImageData("../../src/images/imt/113.jpg", ["Tony Hawk's Pro Skater"], "Gerard"),
    new ImageData("../../src/images/imt/114.jpg", ["Shrek Game Boy"], "Gerard"),
    new ImageData("../../src/images/imt/115.jpg", ["Shenmue"], "Gerard"),
    new ImageData("../../src/images/imt/116.jpg", ["Parappa the Rapper"], "Gerard"),
    new ImageData("../../src/images/imt/117.jpg", ["WarioWare: Smooth Moves"], "Gerard"),
    new ImageData("../../src/images/imt/118.jpg", ["Grush"], "Gerard"),
    new ImageData("../../src/images/imt/119.jpg", ["Metroid"], "Gerard"),
];

//10
var KanoVec = [
	new ImageData("../../src/images/imt/14.png", ["A Hat in Time"], "Kano"),
    new ImageData("../../src/images/imt/15.png", ["Danganronpa V3"], "Kano"),
    new ImageData("../../src/images/imt/16.png", ["Enter the Gungeon"], "Kano"),
    new ImageData("../../src/images/imt/17.png", ["Civilization VI"], "Kano"),
    new ImageData("../../src/images/imt/18.png", ["Ori and the Blind Forest"], "Kano"),
    new ImageData("../../src/images/imt/19.png", ["Shovel Knight"], "Kano"),
    new ImageData("../../src/images/imt/109.jpg", ["Garry's Mod"], "Kano"),
    new ImageData("../../src/images/imt/110.jpg", ["Overwatch"], "Kano"),
    new ImageData("../../src/images/imt/41.png", ["Portal 2"], "Kano"),
    new ImageData("../../src/images/imt/111.jpg", ["Sonic Generations"], "Kano"),
];

//17
var YerayVec = [
    new ImageData("../../src/images/imt/22.png", ["Ocarina of Time"], "Yeray"),
    new ImageData("../../src/images/imt/23.png", ["A Hat in Time"], "Yeray"),
    new ImageData("../../src/images/imt/24.png", ["Sonic Adventure 2"], "Yeray"),
    new ImageData("../../src/images/imt/25.png", ["Spyro 2"], "Yeray"),
    new ImageData("../../src/images/imt/36.jpg", ["Ratchet and Clank: Tools of Destruction"], "Yeray"),
    new ImageData("../../src/images/imt/26.png", ["Portal"], "Yeray"),
    new ImageData("../../src/images/imt/27.png", ["Kingdom Hearts 1"], "Yeray"),
    new ImageData("../../src/images/imt/28.png", ["Castle Crashers"], "Yeray"),
    new ImageData("../../src/images/imt/85.jpg", ["Final Fantasy VII"], "Yeray"),
    new ImageData("../../src/images/imt/86.jpg", ["Phoenix Wright: Ace Attorney"], "Yeray"),
    new ImageData("../../src/images/imt/87.jpg", ["Touhou 8"], "Yeray"),
    new ImageData("../../src/images/imt/88.jpg", ["Final Fantasy VIII"], "Yeray"),
    new ImageData("../../src/images/imt/89.jpg", ["Binding of Isaac"], "Yeray"),
    new ImageData("../../src/images/imt/32.png", ["Persona 5"], "Yeray"),
    new ImageData("../../src/images/imt/33.png", ["Sonic R"], "Yeray"),
    new ImageData("../../src/images/imt/34.png", ["Undertale"], "Yeray"),
    new ImageData("../../src/images/imt/40.png", ["A Link to the Past"], "Yeray"),
    new ImageData("../../src/images/imt/149.jpg", ["Majora's Mask"], "Yeray"),
    new ImageData("../../src/images/imt/150.jpg", ["Pokemon Yellow"], "Yeray"),
    new ImageData("../../src/images/imt/66.png", ["Final Fantasy IX"], "Yeray"),
];

//20
var EliraVec = [
    new ImageData("../../src/images/imt/46.jpg", ["Danganronpa 2"], "Elira"),
    new ImageData("../../src/images/imt/47.jpg", ["Banjo Tooie"], "Elira"),
    new ImageData("../../src/images/imt/48.jpg", ["Bastion"], "Elira"),
    new ImageData("../../src/images/imt/49.jpg", ["Bravely Default"], "Elira"),
    new ImageData("../../src/images/imt/50.jpg", ["Child of Light"], "Elira"),
    new ImageData("../../src/images/imt/51.jpg", ["Final Fantasy: Crystal Chronicles"], "Elira"),
    new ImageData("../../src/images/imt/52.jpg", ["Diddy Kong Racing"], "Elira"),
    new ImageData("../../src/images/imt/53.jpg", ["Donkey Kong 64"], "Elira"),
    new ImageData("../../src/images/imt/54.jpg", ["Donkey Kong 64"], "Elira"),
    new ImageData("../../src/images/imt/55.jpg", ["Final Fantasy VIII"], "Elira"),
    new ImageData("../../src/images/imt/56.jpg", ["Kingdom Hearts 258/2"], "Elira"),
    new ImageData("../../src/images/imt/57.jpg", ["Ori and the blind forest"], "Elira"),
    new ImageData("../../src/images/imt/30.png", ["Majora's Mask"], "Elira"),
    new ImageData("../../src/images/imt/58.jpg", ["Smash Bros Melee"], "Elira"),
    new ImageData("../../src/images/imt/31.png", ["Mickey Mania"], "Elira"),
    new ImageData("../../src/images/imt/59.jpg", ["Persona 4"], "Elira"),
    new ImageData("../../src/images/imt/60.jpg", ["Pokemon OR/AS"], "Elira"),
    new ImageData("../../src/images/imt/61.jpg", ["Pokemon GO"], "Elira"),
    new ImageData("../../src/images/imt/62.jpg", ["Sushi Striker"], "Elira"),
    new ImageData("../../src/images/imt/63.jpg", ["Twilight Princess"], "Elira"),
    new ImageData("../../src/images/imt/64.jpg", ["Xenoblade Chronicles X"], "Elira"),
 ];
 
 var MarcPQVec = [
	new ImageData("../../src/images/imt/120.jpg", ["Dark Souls"], "MarcPQ"),
	new ImageData("../../src/images/imt/121.jpg", ["Golden Sun 2"], "MarcPQ"),
	new ImageData("../../src/images/imt/122.jpg", ["Ib"], "MarcPQ"),
	new ImageData("../../src/images/imt/123.jpg", ["Yugioh Forbidden Memories"], "MarcPQ"),
	new ImageData("../../src/images/imt/124.jpg", ["Devil Daggers"], "MarcPQ"),
	new ImageData("../../src/images/imt/126.jpg", ["Digimon Rumble Arena"], "MarcPQ"),
	new ImageData("../../src/images/imt/127.jpg", ["Earthworm Jim"], "MarcPQ"),
	new ImageData("../../src/images/imt/128.jpg", ["Lost Magic"], "MarcPQ"),
	new ImageData("../../src/images/imt/129.jpg", ["Xenoblade Chronicles 2"], "MarcPQ"),
	new ImageData("../../src/images/imt/130.jpg", ["LSD Dream Emulator"], "MarcPQ"),
	new ImageData("../../src/images/imt/132.jpg", ["Spec Ops: The Line"], "MarcPQ"),
	new ImageData("../../src/images/imt/139.jpg", ["Pandora's Tower"], "MarcPQ"),
];

var CrisPQVec = [
	new ImageData("../../src/images/imt/125.jpg", ["Talmit's adventure"], "CrisPQ"),
	new ImageData("../../src/images/imt/133.jpg", ["Kula World"], "CrisPQ"),
	new ImageData("../../src/images/imt/131.jpg", ["The Blue Brothers"], "CrisPQ"),
	new ImageData("../../src/images/imt/134.jpg", ["Bomberman Generation"], "CrisPQ"),
	new ImageData("../../src/images/imt/135.jpg", ["Final Fantasy Tactics"], "CrisPQ"),
	new ImageData("../../src/images/imt/136.jpg", ["Dragon's Lair"], "CrisPQ"),
	new ImageData("../../src/images/imt/137.jpg", ["Hamtaro Ham Ham Games"], "CrisPQ"),
	new ImageData("../../src/images/imt/138.jpg", ["The Witch's House"], "CrisPQ"),
	new ImageData("../../src/images/imt/140.jpg", ["Shining Force"], "CrisPQ"),
	new ImageData("../../src/images/imt/141.jpg", ["Final Fantasy: Echoes of Time"], "CrisPQ"),
	new ImageData("../../src/images/imt/142.jpg", ["Final Fantasy 12: Revenant Wings"], "CrisPQ"),
	new ImageData("../../src/images/imt/143.jpg", ["Another Code R"], "CrisPQ"),
	new ImageData("../../src/images/imt/144.jpg", ["Bubble Bobble"], "CrisPQ"),
	new ImageData("../../src/images/imt/145.jpg", ["Frogger"], "CrisPQ"),
	new ImageData("../../src/images/imt/146.jpg", ["Advance Wars: Dark Conflict"], "CrisPQ"),
];

var Cp2Vec = [
	new ImageData("../../src/images/imt/42.png", ["Bioshock"], "Cp2"),
	new ImageData("../../src/images/imt/43.png", ["Borderlands 2"], "Cp2"),
	new ImageData("../../src/images/imt/44.png", ["Civilization VI"], "Cp2"),
	new ImageData("../../src/images/imt/45.png", ["Doom"], "Cp2"),
	new ImageData("../../src/images/imt/46.png", ["Dark souls 3"], "Cp2"),
	new ImageData("../../src/images/imt/47.png", ["Mirror's Edge"], "Cp2"),
	new ImageData("../../src/images/imt/48.png", ["Ori and the blind forest"], "Cp2"),
	new ImageData("../../src/images/imt/49.png", ["Sacred"], "Cp2"),
	new ImageData("../../src/images/imt/50.png", ["Team Fortress 2"], "Cp2"),
	new ImageData("../../src/images/imt/51.png", ["The witcher 3: Wild hunt"], "Cp2"),
	new ImageData("../../src/images/imt/52.png", ["Fallout 4"], "Cp2"),
	new ImageData("../../src/images/imt/53.png", ["Half life 2"], "Cp2"),
	new ImageData("../../src/images/imt/54.png", ["Mass Effect 3"], "Cp2"),
	new ImageData("../../src/images/imt/55.png", ["GTA Vice City"], "Cp2"),
];

var AlbertVec = [
	new ImageData("../../src/images/imt/56.png", ["Advance Wars"], "Albert"),
	new ImageData("../../src/images/imt/57.png", ["Animal Crossing"], "Albert"),
	new ImageData("../../src/images/imt/58.png", ["Battalion Wars"], "Albert"),
	new ImageData("../../src/images/imt/59.png", ["Final Fantasy: Crystal Chronicles"], "Albert"),
	new ImageData("../../src/images/imt/60.png", ["Fire Emblem 7"], "Albert"),
	new ImageData("../../src/images/imt/61.png", ["Pokemon Channel"], "Albert"),
	new ImageData("../../src/images/imt/62.png", ["Pokemon Esmeralda"], "Albert"),
	new ImageData("../../src/images/imt/63.png", ["Pokemon Heart Gold"], "Albert"),
	new ImageData("../../src/images/imt/64.png", ["Minish Cap"], "Albert"),
	new ImageData("../../src/images/imt/65.png", ["Wind Waker"], "Albert"),
];

var SejuVec = [
	new ImageData("../../src/images/imt/151.jpg", ["Metal Gear: Peace Walker"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/152.jpg", ["Monmusu Quest"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/153.jpg", ["League of Legends"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/154.jpg", ["Pyre"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/155.jpg", ["Risk of Rain"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/157.jpg", ["Habbo Hotel"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/158.jpg", ["Travian"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/159.jpg", ["Metin 2"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/160.jpg", ["Lost Odyssey"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/161.jpg", ["Mass Effect"], "Sejuani Mainer"),
	new ImageData("../../src/images/imt/162.jpg", ["Dragon's Dogma"], "Sejuani Mainer"),
];

var FeriVec = [
	new ImageData("../../src/images/imt/163.jpg", ["Phoenix Wright: Ace Attorney"], "Toni"),
	new ImageData("../../src/images/imt/164.jpg", ["Pokemon: Trading Card Game"], "Toni"),
	new ImageData("../../src/images/imt/165.jpg", ["Steins Gate"], "Toni"),
	new ImageData("../../src/images/imt/166.jpg", ["Persona 4"], "Toni"),
	new ImageData("../../src/images/imt/167.jpg", ["Pokemon Stadium"], "Toni"),
	new ImageData("../../src/images/imt/168.jpg", ["Mario Party 2"], "Toni"),
	new ImageData("../../src/images/imt/169.jpg", ["Shovel Knight"], "Toni"),
	new ImageData("../../src/images/imt/170.jpg", ["Pokemon Snap"], "Toni"),
	new ImageData("../../src/images/imt/171.jpg", ["Fire Emblem Echoes"], "Toni"),
	new ImageData("../../src/images/imt/172.jpg", ["Xenoblade Chronicles"], "Toni"),
];

var BansVec = [
	new ImageData("../../src/images/imt/173.jpg", ["Nemesis 2"], "Bans"),
	new ImageData("../../src/images/imt/174.jpg", ["Rekka summer carnival 92"], "Bans"),
	new ImageData("../../src/images/imt/175.jpg", ["Metroid"], "Bans"),
	new ImageData("../../src/images/imt/176.jpg", ["Bionic commando"], "Bans"),
	new ImageData("../../src/images/imt/177.jpg", ["Uforia"], "Bans"),
	new ImageData("../../src/images/imt/178.jpg", ["Maze of galious"], "Bans"),
	new ImageData("../../src/images/imt/179.jpg", ["Rogue dawn Homebrew"], "Bans"),
	new ImageData("../../src/images/imt/180.jpg", ["R-type 3"], "Bans"),
	new ImageData("../../src/images/imt/181.jpg", ["Shinning force 2"], "Bans"),
	new ImageData("../../src/images/imt/182.jpg", ["Sega rally"], "Bans"),
	new ImageData("../../src/images/imt/183.jpg", ["Panzer dragoon"], "Bans"),
	new ImageData("../../src/images/imt/184.jpg", ["Flashback"], "Bans"),
	new ImageData("../../src/images/imt/185.jpg", ["Dune 2 battle for arrakis"], "Bans"),
	new ImageData("../../src/images/imt/186.jpg", ["Streets of rage 2"], "Bans"),
	new ImageData("../../src/images/imt/187.jpg", ["F-zero"], "Bans"),
];

var VynVec = [
	new ImageData("../../src/images/imt/72.png", ["Don't Starve Together"], "Victor"),
	new ImageData("../../src/images/imt/73.png", ["Final Fantasy 4"], "Victor"),
	new ImageData("../../src/images/imt/191.jpg", ["Ys Origin"], "Victor"),
	new ImageData("../../src/images/imt/192.jpg", ["Yooka-Laylee"], "Victor"),
	new ImageData("../../src/images/imt/193.jpg", ["Torchlight II"], "Victor"),
	new ImageData("../../src/images/imt/194.jpg", ["Sanctum 2"], "Victor"),
	new ImageData("../../src/images/imt/195.jpg", ["Guilty Gear Xrd Revelator"], "Victor"),
	new ImageData("../../src/images/imt/196.jpg", ["Human Fall Flat"], "Victor"),
	new ImageData("../../src/images/imt/197.jpg", ["Ibb & Obb"], "Victor"),
	new ImageData("../../src/images/imt/198.jpg", ["Warframe"], "Victor"),
];

//---------------------------------------------------------------------------------------
//--------------------------------- GLOBAL VARIABLES ------------------------------------
//---------------------------------------------------------------------------------------
 
var ImageVec = [];
var ImageMat = [MarcPQVec,CrisPQVec,SejuVec,VynVec,EricVec,BansVec,FerVec,GrewVec,KanoVec,MarcVec,YerayVec,EliraVec,Cp2Vec,AlbertVec,FeriVec];
var interval;
var interval2;
var Nused = 0;
var Nused2 = 0;

//---------------------------------------------------------------------------------------
//--------------------------------- SOME FUNCTIONS --------------------------------------
//---------------------------------------------------------------------------------------

