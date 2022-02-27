console.log("-----------------------------------------------");
console.clear();
import wsa from './websocketAPI.js';

var games = {
    
}

var boatTypes = ["egyes", "kettes1", "kettes2", "harmas1", "harmas2", "negyes", "otos"];

var publicSessions = [];

function NewGame (sessionID, isRandom, isPublic) {
    let siker = false;
    //console.log(sessionID, isRandom, isPublic);
    var a = "nincs";
    var response = "Létezik a név. Addjon meg egy újat!";
    a = "nincs";
    siker = false;
    if (isRandom) {
        sessionID = generateUID()
    }
    while (!siker) {
        if (sessionID in games) {
            if (isRandom) {
                sessionID = generateUID()
            }
            else {
                sessionID = sessionID+generateUID();
            }
        }
        else {
            siker = true;
        }
        //console.log("porpg")
        
    }
    NewGameGenerate(sessionID, isPublic);
    //if (isPublic) {publicSessions.push(sessionID)};
    response = sessionID;
    return response;
    
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
                pos: "",   // Hajó egyik koordinátája
                fired: false // Eltalálták e már
            }
            boatCells.push(elem);
            //console.log("Hozzaadva a hajocella")
        }
        //console.log(boatCells)
        return boatCells;

    }
    
    games[sessionID] = {
        PlayerData: {
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
                },
                joined: false,
                ready: false,
                socket: null
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
                },
                joined: false,
                ready: false,
                socket: null,
            },
        },
        actualPlayer: 1,
        status: 0,
    }

    if (isPublic) {publicSessions.push(sessionID)};
}

function PutBoat(sessionID, targetor, bType, bCells) {
    console.log("Server function:");
    console.log(sessionID, targetor, bType, bCells);
    var validB = false;
    let crds = [];
    for (var bTypes in boatTypes)
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
            for (let i = 0; i < bCells.length; i++) {
                const e = bCells[i];
                games[sessionID].PlayerData[targetor].coords[e] = {
                    boat: bType,
                    fired: false,
                }

                games[sessionID].PlayerData[targetor].boats[bType][i] = {
                    pos: e,   // Hajó egyik koordinátája
                    fired: false // Eltalálták e már
                }
                crds[i] = games[sessionID].PlayerData[targetor].coords[e];              
            }
          } catch (error) {
            console.log("Hiba!")
            console.error(error);
          }
    }
    else {
        console.warn("Rossz hajónevet adott meg!")
    }

    return crds;
}

function Fire(sessionID, target, fCor) {
    if (bothReady(sessionID)) {
        let targetor = inversePlayer(target);
        //console.log(games[sessionID].actualPlayer);
        //console.log(targetor.slice(6, 7));
        if (targetor.slice(6, 7) == games[sessionID].actualPlayer) {            
            // Lövés koordinátája
            //var fCor = document.getElementById("fcor").value;
            //console.log(fCor);
        
            // Végeredmény maghatározása
            var result = "";
        
            //Elsüllyedés vizsgálata
            var sullyedt = true;
        
            // Az objektumban lévő sorszám
            var fp = "Semmi";
        
            // A koordinátán lévő hajónév lekérése
            //fn = Get(fCor).value;
            //fn = playersData.player2.coords[fCor].boat;
            var fn = games[sessionID].PlayerData[target].coords[fCor].boat;
            //fancyLog("FN:", "red", fn, "green")
            // Lőttek e már arra a mezőre?
            var ifFired = games[sessionID].PlayerData[target].coords[fCor].fired;
            if (ifFired){
                //console.warn("Ide már lőttél!");
                result = "Ide már lőttél!";
                result = {
                    result: result,
                    bType: "nemismert",
                    coords: []
                }
                return result;
            }
            //Ha a koordinátához nem tartozik hajó
            else if (fn === "none")
            {
                result = "nemtalalt";
                result = {
                    result: result,
                    bType: "nemismert",
                    coords: []
                }
                console.log("Eredmény: ",result);
                fancyLog("Nem találta el a hajót!", "rgb(255, 0, 0)", '', "rgb(255, 0, 0)")
            }
            else 
            {
                // A hajón a találat beírása, és visszatérés vagy találtal, vagy süllyedtel
                var boats = games[sessionID].PlayerData[target].boats;
                console.log(boats)
                for(var fps in boats[fn])
                {
                    console.log(fps);
                    //Ha a lövés helye egyezik a hajó egyik koordináta értékével
                    if (fCor === boats[fn][fps].pos) {
                        //Sorszám átadása
                        console.log(fps);
                        fp = fps;
                        // Ha a hajó azon részére még nem lőttek akkor
                        if (boats[fn][fps].fired === false) {
                            // A hajó ezen részére legyen igaz az hogy lőttek rá
                            games[sessionID].PlayerData[target].boats[fn][fps].fired = true;
                            boats = games[sessionID].PlayerData[target].boats;
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
                    boats = games[sessionID].PlayerData[target].boats;
                    console.log(games[sessionID].PlayerData[target].boats[fn][fp].fired);
                    fancyLog("Elsüllyesztette a hajót: ", "white", fn, "rgba(20, 245, 106)")
                    //console.log(sullyedt);
                    //console.log(fp);
                    result = {
                        result: result,
                        bType: fn,
                        coords: games[sessionID].PlayerData[target].boats[fn]
                    }
                }
                else if (result === "Talalt") {
                    boats = games[sessionID].PlayerData[target].boats;
                    fancyLog("Eltalálta a hajót: ", "white", fn, "rgba(20, 245, 106)")
                    result = {
                        result: result,
                        bType: "nemismert",
                        coords: []
                    }
                }
                else {
                    result = "nemtalalt";
                    fancyLog("Nem találta el a hajót: ", "rgb(255, 0, 0)", fn, "rgb(255, 0, 0)")
                    result = {
                        result: result,
                        bType: "nemismert",
                        coords: []
                    }
                }
            
            }
            games[sessionID].PlayerData[target].coords[fCor].fired = true;
            //console.log(result);
            //console.log("Hajók állása");
            //console.log(games[sessionID].PlayerData[target].boats);
            console.log("Játék vége: "+isEnded(sessionID));
            games[sessionID].actualPlayer = target.slice(6,7);
            wsa.EmitEvents.sendMessage(new wsa.EmitData('youTurn', "Te következel!"), games[sessionID].PlayerData[target].socket);
            return(result);
        }
        else {
            return ("Nem te következel");
        }
    }
    else {
        return("Nincs mindkét fél készen "+false);
    }
}

function isEnded(sessionID) {
    let isEnded = true;
    let nyertes = "senki";
    for (var item in games[sessionID].PlayerData.player1.boats){
        //console.log("Item: "+ item);
        for (var cellak in games[sessionID].PlayerData.player1.boats[item]) {
            //console.log("Cellak: "+cellak);
            if (games[sessionID].PlayerData.player1.boats[item][cellak].fired === false) {
                isEnded = false;
            }
            //console.log(isEnded);
        }
    }
    if (isEnded){
        nyertes = "player1";
    }
    else {
        for (var item in games[sessionID].PlayerData.player2.boats){
            //console.log("Item: "+ item);
            for (var cellak in games[sessionID].PlayerData.player2.boats[item]) {
                //console.log("Cellak: "+cellak);
                if (games[sessionID].PlayerData.player2.boats[item][cellak].fired === false) {
                    isEnded = false;
                }
                //console.log(isEnded);
            }
        }
        if (isEnded){nyertes = "player2"}
    }
    if (isEnded) {
        games[sessionID].status = 2;
        wsa.EmitEvents.sendMessage(new wsa.EmitData('endGame', nyertes), games[sessionID].PlayerData.player1.socket)
        wsa.EmitEvents.sendMessage(new wsa.EmitData('endGame', nyertes), games[sessionID].PlayerData.player2.socket)
    }
    return (isEnded);
}

function bothReady(sessionID) {
    return games[sessionID].PlayerData.player1.ready && games[sessionID].PlayerData.player2.ready;
}

function fancyLog(msg1, color1, msg2, color2) {
    console.log(
        '%c'+msg1+'%c'+msg2, 
        'color: '+color1+'; background: black; font-size: 30px', 
        'color: '+color2+'; background: black; font-size: 30px'
    )
}

function codeValid(sessionID) {
    /*if (sessionID in games) {
        return true;
    }
    else {
        return false;
    }*/
    return (sessionID in games);
}

function canJoin(sessionID, source) {
    if (games[sessionID].PlayerData[source].joined === true) {return false} else {return true};
}

function playerJoin(sessionID, source, socket) {
    let source2 = inversePlayer(source);
    if (canJoin(sessionID, source)) {
        games[sessionID].PlayerData[source].joined = true
        games[sessionID].PlayerData[source].socket = socket;
        wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', ""), games[sessionID].PlayerData[source].socket);
        if (games[sessionID].PlayerData[source2].joined) {
            wsa.EmitEvents.sendMessage(new wsa.EmitData('secondJoined', ""), games[sessionID].PlayerData[source].socket);
            wsa.EmitEvents.sendMessage(new wsa.EmitData('secondJoined', ""), games[sessionID].PlayerData[source2].socket);
        }
        return true;
    } 
    else {
        return false;
    }
}

function inversePlayer(source) {
    let source2 = null;
    if (source === 'player2') {
        source2 = 'player1';
    }
    if (source === 'player1') {
        source2 = 'player2';
    }
    return source2;
}

function Ready(sessionID, source) {
    
    try {
        let source2 = inversePlayer(source);
        games[sessionID].PlayerData[source].ready = true;
        if (games[sessionID].PlayerData[source2].joined) {
            if (games[sessionID].PlayerData[source2].ready) {
                wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "A játék indulhat"), games[sessionID].PlayerData[source].socket);
                wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "A játék indulhat"), games[sessionID].PlayerData[source2].socket);
            }
            else {
                wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "Belépés Sikeres!"), games[sessionID].PlayerData[source].socket);
                wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "Belépés 2 sikeres!"), games[sessionID].PlayerData[source2].socket);
            }
        }
        else {
            wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "Várakozás a 2. játékosra"), games[sessionID].PlayerData[source].socket);
        }
    }
    catch (e) {
        console.error(e);
    }
}



wsa.initilaliseWebSocketServer();

wsa.EmitEvents.registerEventHandler('TESZT_EVENT', (socket, data) =>{
    //console.log(JSON.stringify(data));
    NewGame("node", false, false);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', games), socket);
});

wsa.EmitEvents.registerEventHandler('NewGame', (socket, session) =>{
    //var jsession = JSON.stringify(session);

    var sessionID = NewGame(session.sessionID, session.isRandom, session.isPublic);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('NewGame', sessionID), socket);
    //wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', games, publicSessions), socket);
});

wsa.EmitEvents.registerEventHandler('PutBoat', (socket, data) => {
    console.log(data);
    var response = PutBoat(data.sessionID, data.targetor, data.bType, data.bCells)
    wsa.EmitEvents.sendMessage(new wsa.EmitData('PutBoat', response), socket);
});

wsa.EmitEvents.registerEventHandler('Fire', (socket, data) => {
    console.clear();
    console.log(data);
    var response = Fire(data.sessionID, data.target, data.fCor);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('Fire', response), socket);
});

wsa.EmitEvents.registerEventHandler('Admin', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('Admin', games), socket);
});

wsa.EmitEvents.registerEventHandler('sessions', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('sessions', publicSessions), socket);
});
wsa.EmitEvents.registerEventHandler('codeValid', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('codeValid', codeValid(data)), socket);    
});

wsa.EmitEvents.registerEventHandler('canJoin', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('canJoin', canJoin(data.sessionID, data.source)), socket);
})

wsa.EmitEvents.registerEventHandler('playerJoin', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('playerJoin', playerJoin(data.sessionID, data.source, socket)), socket);
})

wsa.EmitEvents.registerEventHandler('Ready', (socket, data) => {
    Ready(data.sessionID, data.source);
    wsa.EmitEvents.sendMessage(new wsa.EmitData('readySet2', "Végrehajtva."), socket);
})

wsa.EmitEvents.registerEventHandler('status', (socket, data) => {
    wsa.EmitEvents.sendMessage(new wsa.EmitData('status', games[data].status), socket);
});



wsa.EmitEvents.registerEventHandler('reset', (socket, data) => {
    games = {};
})

// NOTE:
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