import wsa from './websocketAPI.js';

var games = {
    
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
    
    function MakeCoords() {
        var coords = {};
        for (let index = 1; index < 11; index++) {
            let row = numToSSColumn(index);
            var tableCol = ``;
            for (let col = 0; col < 11; col++) {
                var id =  row+col;
                var txt = id;
                if (col === 0) {
                            
                }
                else {
                    //console.log(id)     
                    coords[id] = {
                        boat: "none",
                        fired: false,
                    }
                }                     
            }
        }
        return coords;
    }

    function MakeBoatCell(times) {
        var boatCells = [];

        for (let i = 0; i <= times-1; i++) {
            var elem = {
                pos: "a1",   // Hajó egyik koordinátája
                fired: false // Eltalálták e már
            }
            boatCells.push(elem);
            //console.log("Hozzaadva a hajocella")
        }
        //console.log(boatCells)
        return boatCells;

    }
    
    games[sessionID] = {
        playersData: {
            player1 : {
                coords : MakeCoords(),
                boats : {
                    egyes:MakeBoatCell(1),
        
                    kettes1:MakeBoatCell(2),
                    kettes2:MakeBoatCell(2),
        
                    harmas1:MakeBoatCell(3),
                    harmas2:MakeBoatCell(3),
        
                    negyes:MakeBoatCell(4),
        
                    otos:MakeBoatCell(5),
                }
            },
            player2 : {
                coords : MakeCoords(),
                boats : {
                    egyes:MakeBoatCell(1),
        
                    kettes1:MakeBoatCell(2),
                    kettes2:MakeBoatCell(2),
        
                    harmas1:MakeBoatCell(3),
                    harmas2:MakeBoatCell(3),
        
                    negyes:MakeBoatCell(4),
        
                    otos:MakeBoatCell(5),
                }
            },
        }
    }
}

wsa.initilaliseWebSocketServer();

wsa.EmitEvents.registerEventHandler('TESZT_EVENT', (socket, data) =>{
    console.log(JSON.stringify(data));
    NewGame("node", false, false);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', games), socket);
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