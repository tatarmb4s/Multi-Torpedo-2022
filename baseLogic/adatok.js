//Adatstruktúra
var boatTypes = ["egyes", "kettes1", "kettes2", "harmas1", "harmas2", "negyes", "otos"];
var smt = [1, 2, 3];

// Játékosok adatai
var playersData = {
    player2 : {
        coords : {
            //a
            a1: {
                boat: "none",
                fired: false,
            },
            a2: {
                boat: "none",
                fired: false,
            },
            a3: {
                boat: "none",
                fired: false,
            },
            a4: {
                boat: "none",
                fired: false,
            },
            a5: {
                boat: "none",
                fired: false,
            },
            a6: {
                boat: "none",
                fired: false,
            },
            a7: {
                boat: "none",
                fired: false,
            },
            a8: {
                boat: "none",
                fired: false,
            },
            a9: {
                boat: "none",
                fired: false,
            },
            a10: {
                boat: "none",
                fired: false,
            },
            //b
            b1: {
                boat: "none",
                fired: false,
            },
            b2: {
                boat: "none",
                fired: false,
            },
            b3: {
                boat: "none",
                fired: false,
            },
            b4: {
                boat: "none",
                fired: false,
            },
            b5: {
                boat: "none",
                fired: false,
            },
            b6: {
                boat: "none",
                fired: false,
            },
            b7: {
                boat: "none",
                fired: false,
            },
            b8: {
                boat: "none",
                fired: false,
            },
            b9: {
                boat: "none",
                fired: false,
            },
            b10: {
                boat: "none",
                fired: false,
            },
        
            //C
            c1: {
                boat: "none",
                fired: false,
            },
            c2: {
                boat: "none",
                fired: false,
            },
            c3: {
                boat: "none",
                fired: false,
            },
            c4: {
                boat: "none",
                fired: false,
            },
            c5: {
                boat: "none",
                fired: false,
            },
            c6: {
                boat: "none",
                fired: false,
            },
            c7: {
                boat: "none",
                fired: false,
            },
            c8: {
                boat: "none",
                fired: false,
            },
            c9: {
                boat: "none",
                fired: false,
            },
            c10: {
                boat: "none",
                fired: false,
            },
        
            //d
            d1: {
                boat: "none",
                fired: false,
            },
            d2: {
                boat: "none",
                fired: false,
            },
            d3: {
                boat: "none",
                fired: false,
            },
            d4: {
                boat: "none",
                fired: false,
            },
            d5: {
                boat: "none",
                fired: false,
            },
            d6: {
                boat: "none",
                fired: false,
            },
            d7: {
                boat: "none",
                fired: false,
            },
            d8: {
                boat: "none",
                fired: false,
            },
            d9: {
                boat: "none",
                fired: false,
            },
            d10: {
                boat: "none",
                fired: false,
            },
            
            //e
            e1: {
                boat: "none",
                fired: false,
            },
            e2: {
                boat: "none",
                fired: false,
            },
            e3: {
                boat: "none",
                fired: false,
            },
            e4: {
                boat: "none",
                fired: false,
            },
            e5: {
                boat: "none",
                fired: false,
            },
            e6: {
                boat: "none",
                fired: false,
            },
            e7: {
                boat: "none",
                fired: false,
            },
            e8: {
                boat: "none",
                fired: false,
            },
            e9: {
                boat: "none",
                fired: false,
            },
            e10: {
                boat: "none",
                fired: false,
            },
            
            //f
            f1: {
                boat: "none",
                fired: false,
            },
            f2: {
                boat: "none",
                fired: false,
            },
            f3: {
                boat: "none",
                fired: false,
            },
            f4: {
                boat: "none",
                fired: false,
            },
            f5: {
                boat: "none",
                fired: false,
            },
            f6: {
                boat: "none",
                fired: false,
            },
            f7: {
                boat: "none",
                fired: false,
            },
            f8: {
                boat: "none",
                fired: false,
            },
            f9: {
                boat: "none",
                fired: false,
            },
            f10: {
                boat: "none",
                fired: false,
            },
        
            
            //g
            g1: {
                boat: "none",
                fired: false,
            },
            g2: {
                boat: "none",
                fired: false,
            },
            g3: {
                boat: "none",
                fired: false,
            },
            g4: {
                boat: "none",
                fired: false,
            },
            g5: {
                boat: "none",
                fired: false,
            },
            g6: {
                boat: "none",
                fired: false,
            },
            g7: {
                boat: "none",
                fired: false,
            },
            g8: {
                boat: "none",
                fired: false,
            },
            g9: {
                boat: "none",
                fired: false,
            },
            g10: {
                boat: "none",
                fired: false,
            },
        
            
            //h
            h1: {
                boat: "none",
                fired: false,
            },
            h2: {
                boat: "none",
                fired: false,
            },
            h3: {
                boat: "none",
                fired: false,
            },
            h4: {
                boat: "none",
                fired: false,
            },
            h5: {
                boat: "none",
                fired: false,
            },
            h6: {
                boat: "none",
                fired: false,
            },
            h7: {
                boat: "none",
                fired: false,
            },
            h8: {
                boat: "none",
                fired: false,
            },
            h9: {
                boat: "none",
                fired: false,
            },
            h10: {
                boat: "none",
                fired: false,
            },
        
            
            //i
            i1: {
                boat: "none",
                fired: false,
            },
            i2: {
                boat: "none",
                fired: false,
            },
            i3: {
                boat: "none",
                fired: false,
            },
            i4: {
                boat: "none",
                fired: false,
            },
            i5: {
                boat: "none",
                fired: false,
            },
            i6: {
                boat: "none",
                fired: false,
            },
            i7: {
                boat: "none",
                fired: false,
            },
            i8: {
                boat: "none",
                fired: false,
            },
            i9: {
                boat: "none",
                fired: false,
            },
            i10: {
                boat: "none",
                fired: false,
            },
        
            
            //j
            j1: {
                boat: "none",
                fired: false,
            },
            j2: {
                boat: "none",
                fired: false,
            },
            j3: {
                boat: "none",
                fired: false,
            },
            j4: {
                boat: "none",
                fired: false,
            },
            j5: {
                boat: "none",
                fired: false,
            },
            j6: {
                boat: "none",
                fired: false,
            },
            j7: {
                boat: "none",
                fired: false,
            },
            j8: {
                boat: "none",
                fired: false,
            },
            j9: {
                boat: "none",
                fired: false,
            },
            j10: {
                boat: "none",
                fired: false,
            },  
        },
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

function PutBoat() {
    var bCor = document.getElementById("bcor").value;
    var bType = document.getElementById("boat-type").value;
    var bCell = document.getElementById("boat-cell").value-1;
    var validB = false;

    for (bTypes in boatTypes)
    {
        if (bType === boatTypes[bTypes])
        {
            validB = true;
        }
        //console.log(boatTypes[bTypes]);
    }

    if (validB)
    {
        console.debug("Jo a hajónév")
        try {
            playersData.player2.boats[bType][bCell].pos = bCor;
            console.log(playersData.player2.boats[bType]);
            playersData.player2.coords[bCor].boat = bType;
            console.log(playersData.player2.coords[bCor]);
          } catch (error) {
            console.log("Hiba!")
            console.error(error);
          }
    }
    else {
        console.warn("Rossz hajónevet adott meg!")
    }


}



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
    fn = playersData.player2.coords[fCor].boat;
    // Lőttek e már arra a mezőre?
    ifFired = playersData.player2.coords[fCor].fired;
    if (ifFired){
        console.warn("Ide már lőttek!");
    }
    //Ha a koordinátához nem tartozik hajó
    else if (fn == "none")
    {
        result = "nemtalalt";
        fancyLog("Nem találta el a hajót!", "rgb(255, 0, 0)", '', "rgb(255, 0, 0)")
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

        if (result === "Sullyedt")
        {
            boats = playersData.player2.boats;
            console.log(playersData.player2.boats[fn][fp].fired);
            fancyLog("Elsüllyesztette a hajót: ", "white", fn, "rgba(20, 245, 106)")
            //console.log(sullyedt);
            //console.log(fp);
        }
        else if (result === "Talalt") {
            boats = playersData.player2.boats;
            fancyLog("Eltalálta a hajót: ", "white", fn, "rgba(20, 245, 106)")
        }
        else {
            result = "nemtalalt";
            fancyLog("Nem találta el a hajót: ", "rgb(255, 0, 0)", fn, "rgb(255, 0, 0)")
        }
    
    }
    playersData.player2.coords[fCor].fired = true;
    console.log(result);
    console.log("Hajók állása");
    console.log(playersData.player2.boats);
}

function fancyLog(msg1, color1, msg2, color2) {
    console.log(
        '%c'+msg1+'%c'+msg2, 
        'color: '+color1+'; background: black; font-size: 30px', 
        'color: '+color2+'; background: black; font-size: 30px'
    )
}