var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var prmSessionID = url.searchParams.get("sessionID");
var prmRandomName = url.searchParams.get("randomName");
var prmPublic = url.searchParams.get("public");
var prmNewgame = url.searchParams.get("newgame");
const gombok = document.querySelector("#gombok")

const sesdata = {
    sessionID: prmSessionID,
    source: document.currentScript.getAttribute("source"),
    targetor: document.currentScript.getAttribute("targetor"),
    // TODO: Át kell állítani majd player 2 re!
    target: document.currentScript.getAttribute("target"),
}

const player1table = document.querySelector('#player1');
const player2table = document.querySelector('#player2');
const btnJoin = document.querySelector('#join');
//const btnReady = document.querySelector('#ready');
const lblActual = document.querySelector('#actualPlayer');

var ownDatas = {};

const tartalom = document.querySelector('#tartalom');
tartalom.innerHTML = "\r Hali!";
ws.onopen = ()=>{
    setTimeout(() => {        
        if (sesdata.source === "player1") {
            //EmitEvents.sendMessage(new EmitData('reset', "data"));
            //NewGame(sesdata.sessionID, false, true);
            if (prmNewgame) {
            }
        }
    }, 30);
    //EmitEvents.sendMessage(new EmitData('NewGame', "valami"));

    EmitEvents.registerEventHandler('TESZT_CLIENT', () =>{
        //tartalom.innerHTML += "\r TESZT_CLIENT!";
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
        if (response === "Nem te következel") {
            window.alert(response);
            document.getElementById(`2${response.coords}`).className = " pl2Cell";
        }
        if (response.result === "nemtalalt") {
            tartalom.innerHTML = "Nem talált a lövés a következő koordinátára:"+response.coords;
            document.getElementById(`2${response.coords}`).className += " fired-cell";
            //latestFired.className += " ";
        }
        if (response.result === "talalt") {
            tartalom.innerHTML = "Eltaláltad a következő koordinátát: "+response.coords
            document.getElementById(`2${response.coords}`).className += " fired-boat";
        }
        if (response.result === "sullyedt") {
            var talalatok = ""
            for (crd in response.coords) {
                crd = response.coords[crd].pos;
                talalatok += crd + ", "
                console.log(crd)
                document.getElementById(`2${crd}`).className += " sullyedt";
            }
            tartalom.innerHTML = "Elsüllyesztetted a következő koordinátákon lévő "+response.bType+" hajót: "+talalatok
        }
        //cellOnclickDisable(".pl2Cell")
        lblActual.innerHTML = "Ellenfél";
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
        if (response === 'A játék indulhat') {
            tartalom.innerHTML = "A játék indulhat";            
            tableMake(player2table, 2);
            cellOnclick('.pl2Cell');
        }
    });
    EmitEvents.registerEventHandler('status', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('endGame', (response) => {
        console.log(response);
    });
    EmitEvents.registerEventHandler('youTurn', (response) => {
        console.log(response);
        if (response.result === "nemtalalt") {
            tartalom.innerHTML = "Nem talált az ellenfél lövése a következő koordinátára:"+response.coords;
            document.getElementById(`1${response.coords}`).className += " fired-cell";
        }
        if (response.result === "talalt") {
            tartalom.innerHTML = "Az ellenfél eltalálta a következő koordinátát: "+response.coords
            document.getElementById(`1${response.coords}`).className += " fired-boat";
        }
        if (response.result === "sullyedt") {
            var talalatok = ""
            for (crd in response.coords) {
                crd = response.coords[crd].pos;
                talalatok += crd + ", "
                console.log(crd)
                document.getElementById(`1${crd}`).className += " sullyedt";
            }
            //tartalom.innerHTML = "Az elsüllyesztette a "+response.coords+" koordinátát"
            tartalom.innerHTML = "Az  ellenfél elsüllyesztette a következő koordinátákon lévő "+response.bType+" hajót: "+talalatok
        }
        //cellOnclick(".pl2Cell")
        lblActual.innerHTML = "Te";
    });
    EmitEvents.registerEventHandler('ownData', (response) => {
        console.log(response)
        ownDatas = response;
    });
    EmitEvents.registerEventHandler('endGame', (response) => {
        window.alert("A nyertes: "+response)
        const thk = document.getElementsByTagName('th');
        for (th in thk) {
            th.onclick = function () {

            }
        }
    });


    // TODO: Ki kell etzeket venni:
    //playerJoin();
    //Ready();
    //Fire("a1");
    setTimeout(() => {
        EmitEvents.sendMessage(new EmitData('ownData', sesdata));
        btnJoin.onclick = function() {
            playerJoin();
            tableMake(player1table, 1);
            cellOnclickKettes1('.pl1Cell', "egyes", 1);
        }/*
        btnReady.onclick = function() {
            Ready();
        }*/
    }, 50);
}


//TODO: window.alert("Kezd el felpakolni a hajókat!")


tartalom.innerHTML = "Helyezd el az egyes hajót"


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

function tableMake(table, spId) {
    var thead = ``;
    
    for (let i = 0; i < 11; i++) {
        var txt = i;
        var classTh = "";
        if (i === 0) {
            txt = "Player: "+spId;
            classTh = "firstCol"
        } 
        thead += `<th class="${classTh}">${txt}</th>`;
    }
    
    
    var tbody = ``;
    
    for (let index = 1; index < 11; index++) {
        let row = spId+numToSSColumn(index);
        let textRow = numToSSColumn(index);
        var tableCol = ``;
        for (let col = 0; col < 11; col++) {
            var id =  row+col;
            var txt = textRow+col;
            if (col === 0) {
                txt = textRow.toUpperCase();
                tableCol += `<th id="${id}" class="0pl${spId}Cell tleft">${txt}</th>`;        
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

var latestFired;
function cellOnclick(className) {
    const p1cellak = document.querySelectorAll(className);
    //console.log(p1cellak)
    for (const cell of p1cellak) {
        //console.log(cell.id);
        //cell.addEventListener("click", egyesHere(cell.id));

        cell.onclick = function (e) {
            //cell.className += " boat"
            latestFired = cell;
            clickAction(cell.id);
        }
    }   
    function clickAction(pos) {
        pos = pos.slice(1, 5);
        Fire(pos);
    }
}
function cellOnclickDisable(className) {
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
        //Fire(pos);
    }
}


function cellOnclickKettes1(className, bType, cellNumber) {
    let cellak = [];
    //console.log(p1cellak)
    clickActions()
    function clickActions() {
        const p1cellak = document.querySelectorAll(className);
        for (const cell of p1cellak) {
            //console.log(cell.id);
            //cell.addEventListener("click", egyesHere(cell.id));
    
            cell.onclick = function (e) {
                cell.className = " boat"
                cell.onclick = function(e) {};
                clickActions();
                clickAction(cell.id);
            }
        }
    } 
    vege = false;

    /*
    Van egy tömb cellak néven. 
    A minimális cellaszám kezdetben 1.
    Ehhez hozzáad egyet akkor amikor valamire rákattintok.
    Ha rákattintottam, akkor megnézi hogy a minimális cellaszám az egayenlő e a "cellak" hosszával.
    Ha igen, akkor nullázza a "cellak" számát, és ezáltal a hosszát.
    Majd megnézui milyen a hajónév, és átállítja következőre. Emellett hozzáad egyeta minimum cellaszámhoz.
    Ha azt megint elérte megy ez előről. Az ötös hajóná ér csak véget
    */
    function clickAction(pos) {
        pos = pos.slice(1, 5);
        cellak.push(pos); 
        if (cellak.length == cellNumber) {
            PutBoat(bType, cellak);
            cellak = [];
            switch (bType) {
                case "egyes":
                    bType = "kettes1"
                    clickActions()
                    tartalom.innerHTML = "Helyezd el a kettes1 hajót"
                    cellNumber++;
                    break;
                case "kettes1":
                    bType = "kettes2"
                    tartalom.innerHTML = "Helyezd el a kettes2 hajót"
                    clickActions()
                    break;
                case "kettes2":
                    bType = "harmas1"
                    clickActions()
                    tartalom.innerHTML = "Helyezd el a harmas1 hajót"
                    cellNumber++;
                    break;
                case "harmas1":
                    bType = "harmas2"
                    tartalom.innerHTML = "Helyezd el a harmas2 hajót"
                    clickActions()
                    break;
                case "harmas2":
                    bType = "negyes"
                    tartalom.innerHTML = "Helyezd el a negyes hajót"
                    clickActions()
                    cellNumber++;
                    break;
                case "negyes":
                    bType = "otos"
                    tartalom.innerHTML = "Helyezd el a otos hajót"
                    clickActions()
                    cellNumber++;
                    break;
                case "otos":
                    vege = true;
                    tartalom.innerHTML = "Várakozás a másik játékosra..."
                    gombok
                    Ready();
                    const p1cellak = document.querySelectorAll(className);
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



