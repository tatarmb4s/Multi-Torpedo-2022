//Adatstruktúra

var playersData = {
    player2 : {
        boats : {
            harmas:[
                {
                    pos: "b1",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "b2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "b3",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ]
        }
    }
}

//console.log(playersData.player2.boats.hatos[5-1].x);


// Lövés koordinátája
var fCor = "b3";
// Végeredmény maghatározása
var result = "";
//Elsüllyedés vizsgálata
var sullyedt = true;
// Az objektumban lévő sorszám
var fp = "Semmi";
// A koordinátán lévő hajónév lekérése
//fn = Get(fCor).value;
fn = "harmas";
//Ha a koordinátához nem tartozik hajó
if (fn == "none")
{
    result = "nemtalalt";
}
// A hajón a találat beírása, és visszatérés vagy találtal, vagy süllyedtel
var boats = playersData.player2.boats;
for(fps in boats[fn])
{
    //Ha a lövés helye egyezik a hajó egyik koordináta értékével
    if (fCor === boats[fn][fps].pos) {
        //Sorszám átadása
        fp = fps;
        // Ha a hajó azon részére még nem lőttek akkor
        if (boats[fn][fps].fired === false) {
            // A hajó ezen részére legyen igaz az hogy lőttek rá
            playersData.player2.boats[fn][fps].fired = true;
            boats = playersData.player2.boats;
        }
    }
    //Ha a hajó koordinátáján nincs lövés legyen false
    if (boats[fn][fps].fired === false) {
        var sullyedt = false;
    }
}

boats = playersData.player2.boats;
console.log(playersData.player2.boats[fn][fp].fired );
console.log(sullyedt);
console.log(fp);
console.log("Hajók állása");
console.log(playersData.player2.boats);


// Lövés koordinátája
var fCor = "b2";
// Végeredmény maghatározása
var result = "";
//Elsüllyedés vizsgálata
var sullyedt = true;
// Az objektumban lévő sorszám
var fp = "Semmi";
// A koordinátán lévő hajónév lekérése
//fn = Get(fCor).value;
fn = "harmas";
//Ha a koordinátához nem tartozik hajó
if (fn == "none")
{
    result = "nemtalalt";
}
// A hajón a találat beírása, és visszatérés vagy találtal, vagy süllyedtel
var boats = playersData.player2.boats;
for(fps in boats[fn])
{
    //Ha a lövés helye egyezik a hajó egyik koordináta értékével
    if (fCor === boats[fn][fps].pos) {
        //Sorszám átadása
        fp = fps;
        // Ha a hajó azon részére még nem lőttek akkor
        if (boats[fn][fps].fired === false) {
            // A hajó ezen részére legyen igaz az hogy lőttek rá
            playersData.player2.boats[fn][fps].fired = true;
            boats = playersData.player2.boats;
        }
    }
    //Ha a hajó koordinátáján nincs lövés legyen false
    if (boats[fn][fps].fired === false) {
        var sullyedt = false;
    }
}

boats = playersData.player2.boats;
console.log(playersData.player2.boats[fn][fp].fired );
console.log(sullyedt);
console.log(fp);
console.log("Hajók állása");
console.log(playersData.player2.boats);


// Lövés koordinátája
var fCor = "b1";
// Végeredmény maghatározása
var result = "";
//Elsüllyedés vizsgálata
var sullyedt = true;
// Az objektumban lévő sorszám
var fp = "Semmi";
// A koordinátán lévő hajónév lekérése
//fn = Get(fCor).value;
fn = "harmas";
//Ha a koordinátához nem tartozik hajó
if (fn == "none")
{
    result = "nemtalalt";
}
// A hajón a találat beírása, és visszatérés vagy találtal, vagy süllyedtel
var boats = playersData.player2.boats;
for(fps in boats[fn])
{
    //Ha a lövés helye egyezik a hajó egyik koordináta értékével
    if (fCor === boats[fn][fps].pos) {
        //Sorszám átadása
        fp = fps;
        // Ha a hajó azon részére még nem lőttek akkor
        if (boats[fn][fps].fired === false) {
            // A hajó ezen részére legyen igaz az hogy lőttek rá
            playersData.player2.boats[fn][fps].fired = true;
            boats = playersData.player2.boats;
        }
    }
    //Ha a hajó koordinátáján nincs lövés legyen false
    if (boats[fn][fps].fired === false) {
        var sullyedt = false;
    }
}

boats = playersData.player2.boats;
console.log(playersData.player2.boats[fn][fp].fired );
console.log(sullyedt);
console.log(fp);
console.log("Hajók állása");
console.log(playersData.player2.boats);