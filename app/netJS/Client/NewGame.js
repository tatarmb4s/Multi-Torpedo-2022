const publicSessions = document.querySelector('#publicSessions');

var txtsessionIDjoin = document.querySelector('#txtsessionIDjoin');
const btnJoin = document.querySelector('#btnJoin');

var txtsessionID = document.querySelector('#txtsessionID');
var chkRandomName = document.querySelector('#chkRandomName');
var chkPublic = document.querySelector('#chkPublic');
const btnNewGame = document.querySelector('#btnNewGame');


var ownDatas = {};

var sesdata = {
    sessionID: "",
    source: "player2",
    targetor: "player2",
    // TODO: Át kell állítani majd player 2 re!
    target: "player2",
}

ws.onopen = ()=>{
    setTimeout(() => {        
        btnNewGame.onclick = (e)=> {
            e.preventDefault()
            txtsessionID = document.querySelector('#txtsessionID');
            chkRandomName = document.querySelector('#chkRandomName');
            chkPublic = document.querySelector('#chkPublic');
            NewGame(txtsessionID.value, chkRandomName.checked,chkPublic.checked);
            
        }
        btnJoin.onclick = (e)=> {
            e.preventDefault()
            if (txtsessionIDjoin.value === "") {
                window.alert("Addjon meg egy session nevet!");
            }
            else {
                sesdata.sessionID = txtsessionIDjoin.value;
                codeValid();
            }
        }
        sessions();
    }, 30);
    //EmitEvents.sendMessage(new EmitData('NewGame', "valami"));

    EmitEvents.registerEventHandler('TESZT_CLIENT', () =>{
        //tartalom.innerHTML += "\r TESZT_CLIENT!";
    });
    EmitEvents.registerEventHandler('NewGame', (sessionID, isRandom, isPublic) =>{
        //document.write(sessionID, isRandom, isPublic);
        console.log("NewGame:", sessionID, isRandom, isPublic)
        sesdata.sessionID = sessionID;
        window.alert(sesdata.sessionID)
        setTimeout(() => {               
            var url = `player1.html?sessionID=${sessionID}&randomName=${chkRandomName.checked}&public=${chkPublic.checked}&newgame=${true}`;
            window.location.href = url;
        }, 30);
    });
    EmitEvents.registerEventHandler('Admin', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('sessions', (response) => {
        console.log(response);
        if(response) {
            for (i in response) {
                console.log(response[i]);
                publicSessions.innerHTML += `
                <a name="" id="" class="btn btn-info" href="#" role="button" onclick="publicJoin('${response[i]}')" value="${response[i]}">${response[i]}</a>
                `
            }
        }
    });
    EmitEvents.registerEventHandler('codeValid', (response) => {
        console.log(response);
        if (response) {
            canJoin();
        }
        else {
            window.alert("Nem megfelelő név, vagy már foglalat a session!")
        }
    });
    EmitEvents.registerEventHandler('canJoin', (response) => {
        console.log(response);
        if (response){
            txtsessionIDjoin = document.querySelector('#txtsessionIDjoin');
    
            setTimeout(() => {                
                var url = `player2.html?sessionID=${txtsessionIDjoin.value}&randomName=${chkRandomName.checked}&public=${chkPublic.checked}&newgame=${true}`;
                window.location.href = url;
            }, 30);
        }
    });
    EmitEvents.registerEventHandler('playerJoin', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('status', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('ownData', (response) => {
        console.log(response)
        ownDatas = response;
    });


    // TODO: Ki kell etzeket venni:
    //playerJoin();
    //Ready();
    //Fire("a1");
    /*setTimeout(() => {
        EmitEvents.sendMessage(new EmitData('ownData', sesdata));
        btnJoin.onclick = function() {
            playerJoin();
            tableMake(player1table, 1);
            cellOnclickKettes1('.pl1Cell', "egyes", 1);
        }/*
        btnReady.onclick = function() {
            Ready();
        }
    }, 50);*/
}

function publicJoin(sessionIDc) {
    sesdata.sessionID = sessionIDc;
    codeValid();
}

function NewGame(sessionID, isRandom, isPublic) {
    var session = {
        sessionID: sessionID,
        isPublic: isPublic,
        isRandom: isRandom
    }
    EmitEvents.sendMessage(new EmitData('NewGame', session));
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

function status() {
    EmitEvents.sendMessage(new EmitData('status', sesdata.sessionID));
}

function ownData() {
    EmitEvents.sendMessage(new EmitData('ownData', sesdata));
}





