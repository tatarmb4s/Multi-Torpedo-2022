const sesdata = {
    sessionID: document.currentScript.getAttribute("sessionID"),
    source: document.currentScript.getAttribute("source"),
    targetor: document.currentScript.getAttribute("targetor"),
    // TODO: Át kell állítani majd player 2 re!
    target: document.currentScript.getAttribute("target"),
}
const tartalom = document.querySelector('#tartalom');
tartalom.innerHTML = "\r Hali!";
ws.onopen = ()=>{
    //EmitEvents.sendMessage(new EmitData('NewGame', "valami"));
    if (sesdata.source === "player1") {
        EmitEvents.sendMessage(new EmitData('reset', "data"));
        NewGame(sesdata.sessionID, false, true);
    }

    EmitEvents.registerEventHandler('TESZT_CLIENT', () =>{
        tartalom.innerHTML += "\r TESZT_CLIENT!";
    });
    EmitEvents.registerEventHandler('NewGame', (sessionID, isRandom, isPublic) =>{
        //document.write(sessionID, isRandom, isPublic);
        console.log("NewGame:", sessionID, isRandom, isPublic)
        sesdata.sessionID = sessionID;
    });
    EmitEvents.registerEventHandler('PutBoat', (response) =>{
        console.log(response)
    });
    EmitEvents.registerEventHandler("Fire", (response) =>{
        console.log(response);
    });
    EmitEvents.registerEventHandler('Admin', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('sessions', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('codeValid', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('canJoin', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('playerJoin', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('secondJoined', (response) => {
        tartalom.innerHTML += "\r A 2. belépett";
    });
    EmitEvents.registerEventHandler('readySet2', (response) => {
        tartalom.innerHTML += response;
    });

}

function Ready() {
    EmitEvents.sendMessage(new EmitData('Ready', sesdata));
}

function NewGame(sessionID, isRandom, isPublic) {
    var session = {
        sessionID: sessionID,
        isPublic: isPublic,
        isRandom: isRandom
    }
    EmitEvents.sendMessage(new EmitData('NewGame', session));
}

function PutBoat(bType, bCells) {
    var data = {
        sessionID: sesdata.sessionID,
        targetor: sesdata.targetor,
        bType: bType,
        bCells: bCells,        
    }
    console.log(data);
    EmitEvents.sendMessage(new EmitData('PutBoat', data));
}

function Fire(fCor) {
    var data = {
        sessionID: sesdata.sessionID,
        target: sesdata.target,
        fCor: fCor
    }
    EmitEvents.sendMessage(new EmitData('Fire', data));
}


function fancyLog(msg1, color1, msg2, color2) {
    console.log(
        '%c'+msg1+'%c'+msg2, 
        'color: '+color1+'; background: black; font-size: 30px', 
        'color: '+color2+'; background: black; font-size: 30px'
    )
}

function Admin () {
    var data = "";
    EmitEvents.sendMessage(new EmitData('Admin', data));
}

function sessions() {
    EmitEvents.sendMessage(new EmitData('sessions', ""));
}

function codeValid() {
    EmitEvents.sendMessage(new EmitData('codeValid', sesdata.sessionID));
}

function canJoin() {
    //console.log(sesdata.sessionID)
    EmitEvents.sendMessage(new EmitData('canJoin', sesdata));
}

function playerJoin() {
    //console.log(sesdata.sessionID)
    EmitEvents.sendMessage(new EmitData('playerJoin', sesdata));
}