import wsa from './websocketAPI.js';

var games = {
    sss: "ss"
}

function NewGame (sessionID, isRandom, isPublic) {
    let siker = false;
    var a = "nincs";
    var response = "Létezik a név. Addjon meg egy újat!";
    a = "nincs";
    siker = true;
    NewGameGenerate(sessionID, isPublic);
    /*if (isRandom) {
        sessionID = generateUID()
    }
    else {
        try {
            a = games[sessionID];
            sessionID = sessionID+generateUID();
        }
        catch {
            if (a === "nincs")
            {
                siker = true;
                NewGameGenerate(sessionID, isPublic);
            }
        }
    }
    while (!siker) {
        console.log("porpg")
        
    }*/
    
}

function generateUID() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return (firstPart + secondPart).toUpperCase();
}

function numToSSColumn(num){
    let s = '', t;
  
    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = (num - t)/26 | 0;
    }
    return s.toLowerCase() || undefined;
  }

function NewGameGenerate (sessionID, isPublic) {
    /*
    function MakeCRDs() {
        var coords = {
            
        }

        for (let index = 1; index < 11; index++) {
            let row = numToSSColumn(index);
            for (let col = 0; col < 11; col++) {
                var id =  row+col;                
                if (col === 0) {
                    txt = row.toUpperCase();
                           
                }
                else {
                    coords += {
                        id, id
                    }        
                }     
                console.log(coords);
                
            }
        }
    } */
    
    
    games += {
        playersData: {
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
            },
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
    }
}

wsa.initilaliseWebSocketServer();

wsa.EmitEvents.registerEventHandler('TESZT_EVENT', (socket, data) =>{
    console.log(JSON.stringify(data));
    NewGame("node", false, false);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', 'ÜZENET A SZERVERTŐL:' + JSON.parse(games)), socket);
});



// Az adatokat hova tehetem meg úgy az egész kódot majd? (Követem a kulzorod, szóval látom)

//Adatokat? Miről beszélsz?

// A játékosok adatairól amit a szerveren tartanak

//Mysql. w3schools-on fent van minden
//keresd: `w3schools nodejs mysql`
// Rendben. És a függvényeket, amelyik pl lekezeli amikor lőtt valaki? 
//Ugyanígy (remélem így írják)
/*
 simán meghívsz egy evnetet. szerveroldalon regisztráltam a 'TESZT_EVENT'-et, kliens oldalról meghívod
 Szintén fordítva. Szerverről meghívod a klienst.
 Fontos, hogy a kliensnél a ws.onopen => {}-be rakd dolgaidat. Ennek hatására csak akkor futnak / futhatnak le,
 ha már csatlakozott a kliens a szerverhez

 Köszi!
 
 Jólvan, akkor viszlát, testem.
 Hali!
 */