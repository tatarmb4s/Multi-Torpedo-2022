//Adatstruktúra

var playersData = {
    player2 : {
        boats : {
            egyes:[
                {
                    pos: "a1",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],

            kettes1:[
                {
                    pos: "b3",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "c3",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],
            kettes2:[
                {
                    pos: "b5",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "b6",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],

            harmas1:[
                {
                    pos: "b9",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "c9",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "d9",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],
            harmas2:[
                {
                    pos: "f10",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "g10",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "h10",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],

            negyes:[
                {
                    pos: "i4",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "i5",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "i6",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "i7",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],

            otos:[
                {
                    pos: "e2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "f2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "g2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "h2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
                {
                    pos: "i2",   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                },
            ],
        }
    }
}

//console.log(playersData.player2.boats.hatos[5-1].x);

/*
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
}*/



function Fire() {
    // Lövés koordinátája
    var fCor = document.getElementById("fcor").value;
    console.log(fCor);

    // Végeredmény maghatározása
    var result = "";

    //Elsüllyedés vizsgálata
    var sullyedt = true;

    // Az objektumban lévő sorszám
    var fp = "Semmi";

    // A koordinátán lévő hajónév lekérése
    //fn = Get(fCor).value;
    fn = "harmas1";

    //Ha a koordinátához nem tartozik hajó
    if (fn == "none")
    {
        result = "nemtalalt";
    }
    else 
    {
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
                    result = "Talalt";
                }
            }
            //Ha a hajó koordinátáján nincs lövés legyen false
            if (boats[fn][fps].fired === false) {
                var sullyedt = false;
            }
        }
        // Ha elsullyedt akkor legyen az eredmény süllyedt
        if (sullyedt)
        {
            result = "Sullyedt";
        }

        if (result === "Sullyedt" | result === "Talalt")
        {
            boats = playersData.player2.boats;
            console.log(playersData.player2.boats[fn][fp].fired );
            console.log(sullyedt);
            console.log(fp);
        }
        else {
            result = "nemtalalt";
        }
    
    }
    console.log(result);
    console.log("Hajók állása");
    console.log(playersData.player2.boats);
}