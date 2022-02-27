ws.onopen = ()=>{
    EmitEvents.sendMessage(new EmitData('TESZT_EVENT', "valami"));

    EmitEvents.registerEventHandler('TESZT_CLIENT', (games, publicSessions) =>{
        document.write(publicSessions);
        console.log(games)
    });
    EmitEvents.registerEventHandler('NewGame', (sessionID, isRandom, isPublic) =>{
        document.write(sessionID, isRandom, isPublic);
        console.log("NewGame:", sessionID, isRandom, isPublic)
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

}
function NewGame(sessionID, isRandom, isPublic) {
    var session = {
        sessionID: sessionID,
        isPublic: isPublic,
        isRandom: isRandom
    }
    EmitEvents.sendMessage(new EmitData('NewGame', session));
}

function PutBoat(sessionID, targetor, bType, bCells) {
    var data = {
        sessionID: sessionID,
        targetor: targetor,
        bType: bType,
        bCells: bCells,        
    }
    console.log(data);
    EmitEvents.sendMessage(new EmitData('PutBoat', data));
}

function Fire(sessionID, target, fCor) {
    var data = {
        sessionID: sessionID,
        target: target,
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