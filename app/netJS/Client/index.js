const sesdata = {
    sessionID: document.currentScript.getAttribute("sessionID"),
    source: document.currentScript.getAttribute("source"),
    targetor: document.currentScript.getAttribute("targetor"),
    // TODO: Át kell állítani majd player 2 re!
    target: document.currentScript.getAttribute("target"),
}

const player1table = document.querySelector('#player1');
const player2table = document.querySelector('#player2');
const btnJoin = document.querySelector('#join');
const btnReady = document.querySelector('#ready');

var ownDatas = {};

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
        if (response.result === "nemtalalt") {
            tartalom.innerHTML = "Nemtalált az ellenfél lövése"
        }
        if (response.result === "talalt") {
            tartalom.innerHTML = "Az ellenfél eltalálta a "+response.coords+" koordinátát"
            document.getElementById(`1${response.coords}`).className += " fired-boat";
        }
        if (response.result === "sullyedt") {
            var talalatok = ""
            for (crd in response.coords) {
                talalatok += crd + " "
                document.getElementById(`1${crd}`).className += " sullyedt";
            }
            tartalom.innerHTML = "Az elsüllyesztette a "+response.coords+" koordinátát"
        }
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
    EmitEvents.registerEventHandler('status', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('endGame', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('youTurn', (result) => {
        //fancyLog(response, "green", result, "")
        console.log(result);
    });
    EmitEvents.registerEventHandler('ownData', (response) => {
        console.log(response)
        ownDatas = response;
    });

    // TODO: Ki kell etzeket venni:
    //playerJoin();
    //Ready();
    //Fire("a1");
    EmitEvents.sendMessage(new EmitData('ownData', sesdata));
}

btnJoin.onclick = function() {
    playerJoin();
}
btnReady.onclick = function() {
    Ready();
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

function status() {
    EmitEvents.sendMessage(new EmitData('status', sesdata.sessionID));
}

function ownData() {
    EmitEvents.sendMessage(new EmitData('ownData', sesdata));
}

tableMake(player1table, 1)
tableMake(player2table, 2)

function tableMake(table, spId) {
    var thead = ``;
    
    for (let i = 0; i < 11; i++) {
        var txt = i;
        if (i === 0) {
            txt = "";
        } 
        thead += `<th>${txt}</th>`;
    }
    
    
    var tbody = ``;
    
    for (let index = 1; index < 11; index++) {
        let row = spId+numToSSColumn(index);
        var tableCol = ``;
        for (let col = 0; col < 11; col++) {
            var id =  row+col;
            var txt = id;
            if (col === 0) {
                txt = row.toUpperCase();
                tableCol += `<th id="${id}" class="0pl${spId}Cell">${txt}</th>`;        
            }
            else {
                tableCol += `<th id="${id}" class="pl${spId}Cell">${txt}</th>`;        
            }     
            //console.log(id);
            
        }
        tableRow = `<tr id="${row}">${tableCol}</tr>`; 
        tbody += tableRow;
    }
    
    var playerTable = `
    <thead>
        <tr>${thead}</tr>
    </thead>
    <tbody>
        ${tbody}
    </tbody>
    `;
    
    table.innerHTML = playerTable;
}
// converts numbers to spreadsheet letter columns eg. 1 -> A
function numToSSColumn(num){
    let s = '', t;
  
    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = (num - t)/26 | 0;
    }
    return s.toLowerCase() || undefined;
}

cellOnclickEgyes('.pl1Cell');
  
function cellOnclickEgyes(className) {
    const p1cellak = document.querySelectorAll(className);
    //console.log(p1cellak)
    for (const cell of p1cellak) {
        //console.log(cell.id);
        //cell.addEventListener("click", egyesHere(cell.id));

        cell.onclick = function (e) {
            cell.className += " boat"
            clickAction(cell.id);
        }
    }   
    function clickAction(pos) {
        pos = pos.slice(1, 5);
        PutBoat("egyes", [pos])
        cellOnclickKettes1('.pl1Cell', "kettes1", 2);
    }
}

function cellOnclickKettes1(className, bType, cellNumber) {
    let cellak = [];
    const p1cellak = document.querySelectorAll(className);
    //console.log(p1cellak)
    for (const cell of p1cellak) {
        //console.log(cell.id);
        //cell.addEventListener("click", egyesHere(cell.id));

        cell.onclick = function (e) {
            clickAction(cell.id);
            cell.className += " boat"
        }
    }   
    vege = false;
    function clickAction(pos) {
        pos = pos.slice(1, 5);
        cellak.push(pos); 
        if (cellak.length == cellNumber) {
            PutBoat(bType, cellak);
            cellak = [];
            switch (bType) {
                case "egyes":
                    bType = "kettes1"
                    cellNumber++;
                    break;
                case "kettes1":
                    bType = "kettes2"
                    break;
                case "kettes2":
                    bType = "harmas1"
                    cellNumber++;
                    break;
                case "harmas1":
                    bType = "harmas2"
                    break;
                case "harmas2":
                    bType = "negyes"
                    cellNumber++;
                    break;
                case "negyes":
                    bType = "otos"
                    cellNumber++;
                    break;
                case "otos":
                    vege = true;
                    for (const cell of p1cellak) {
                        //console.log(cell.id);
                        //cell.addEventListener("click", egyesHere(cell.id));
                
                        cell.onclick = function (e) {
                            //clickAction(cell.id);
                            //cell.className += " boat"
                        }
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
    if (vege) {
        return null;
    }
}



