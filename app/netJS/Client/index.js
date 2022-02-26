const valami = {
    valamiszoveg: 'asdasdassad',
    valaminumber: 1,
    bool: true
}


ws.onopen = ()=>{
    EmitEvents.sendMessage(new EmitData('TESZT_EVENT', valami));

    EmitEvents.registerEventHandler('TESZT_CLIENT', (games, publicSessions) =>{
        document.write(publicSessions);
        console.log(games)
    });
    EmitEvents.registerEventHandler('NewGame', (sessionID, isRandom, isPublic) =>{
        document.write(sessionID, isRandom, isPublic);
        console.log("NewGame:", sessionID, isRandom, isPublic)
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