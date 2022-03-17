
//console.clear();

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var prmSessionID = url.searchParams.get("sessionID");
var sourceP = url.searchParams.get("sourceP");
var targetorP = url.searchParams.get("targetorP");
var targetP = url.searchParams.get("targetP");
var prmRandomName = url.searchParams.get("randomName");
var prmPublic = url.searchParams.get("public");
var prmNewgame = url.searchParams.get("newgame");
const gombok = document.querySelector("#gombok")

const sesdata = {
    sessionID: prmSessionID,
    source: sourceP,
    targetor: targetorP,
    // TODO: Át kell állítani majd player 2 re!
    target: targetP,
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
        //console.log(response)
    });    
    EmitEvents.registerEventHandler("Fire", (response) =>{
        //console.log(response);
        if (response === "Nem te következel") {
            window.alert(response);
        }
        if (response.result === "nemtalalt") {
            tartalom.innerHTML = "Nem talált a lövés a következő koordinátára:"+response.coords;
            document.getElementById(`2${response.coords}`).className = " fired-cell";
            //latestFired.className += " ";
        }
        if (response.result === "talalt") {
            tartalom.innerHTML = "Eltaláltad a következő koordinátát: "+response.coords
            
            let nextMezok = GetOtherCoords("1"+response.coords)
            csoportosFunction(2,nextMezok.keresztben, function (source) {
                //console.log("klikk")
                source.className += " suggested"
            })
            
            csoportosFunction(2,nextMezok.atloban, function (source) {
                //console.log("klikk")
                source.className += " non-suggested"
            })
            document.getElementById(`2${response.coords}`).className += " fired-boat";

        }
        if (response.result === "sullyedt") {
            var talalatok = ""
            for (crd in response.coords) {
                crd = response.coords[crd].pos;
                talalatok += crd + ", "
                //console.log(crd)
                document.getElementById(`2${crd}`).className += " sullyedt";
                document.getElementById(`2${crd}`).classList.remove("boat");

                let nextMezok = GetOtherCoords("1"+crd)
                csoportosFunction(2,nextMezok.keresztben, function (source) {
                    //console.log("klikk")
                    source.classList.remove("suggested");
                })
                
                csoportosFunction(2,nextMezok.atloban, function (source) {
                    //console.log("klikk")
                    source.classList.remove("non-suggested");
                })

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
        //console.log(response);
    });
    EmitEvents.registerEventHandler('codeValid', (response) => {
        //console.log(response);
    });
    EmitEvents.registerEventHandler('canJoin', (response) => {
        //console.log(response);
    });
    EmitEvents.registerEventHandler('playerJoin', (response) => {
        //console.log(response);
    });
    EmitEvents.registerEventHandler('secondJoined', (response) => {
        window.alert(" Az ellenfél belépett");
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
        //console.log(response);
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
                //console.log(crd)
                document.getElementById(`1${crd}`).className += " sullyedt";
            }
            //tartalom.innerHTML = "Az elsüllyesztette a "+response.coords+" koordinátát"
            tartalom.innerHTML = "Az  ellenfél elsüllyesztette a következő koordinátákon lévő "+response.bType+" hajót: "+talalatok
        }
        //cellOnclick(".pl2Cell")
        lblActual.innerHTML = "Te";
    });
    EmitEvents.registerEventHandler('ownData', (response) => {
        //console.log(response)
        ownDatas = response;
    });
    EmitEvents.registerEventHandler('endGame', (response) => {

        if (response === "player1") {
            window.alert("Megnyerted a játékot!"+response)
            tartalom.innerHTML = `        <div style="color: green;">
            Megnyerted a játékot!
        </div>`
        }
        if (response === "player2") {
            window.alert("Elvesztetted a játékot!"+response)
            tartalom.innerHTML = `<div style="color: red;">Elvesztetted a játékot!</div>`
        }

        const p1cellak = document.querySelectorAll("pl2Cell");
        for (const cell of p1cellak) {
            //console.log(cell.id);
            //cell.addEventListener("click", egyesHere(cell.id));
            cell.onclick = function (e) {
                //clickAction(cell.id);
                //cell.className += " boat"
            }
        }

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
    //console.log(data);
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
            if (spId == 1) {
                txt = "Te";
            }
            if (spId == 2) {
                txt = "";
            }
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
                tableCol += `<th id="${id}" class="pl${spId}Cell"></th>`;        
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
    table.className += " visibe-table";
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
    for (const cell of p1cellak) {
        //console.log(cell.id);
        //cell.addEventListener("click", egyesHere(cell.id));

        cell.onclick = function (e) {
            //clickAction(cell.id);
            //cell.className += " boat"
        }
    }
}


function csoportosFunction(player ,cellak, funkcio) {
    //console.log(cellak)
    for (let cell of cellak) {
        //console.log(cell)
        const cella = document.getElementById(player.toString()+cell);
        //console.log(cella);
        //cell.addEventListener("click", egyesHere(cell.id));
        funkcio(cella);
    } 
}


let cellak = [];

function cellOnclickKettes1(className, bType, cellNumber) {
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
        let pozicio = pos;
        pos = pos.slice(1, 5);
        //console.log("Pozicio: "+pos)
        cellak.push(pos); 
        //console.log("Cellak: "+cellak);
        switch (bType) {
            case "egyes":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })

                    cellak = [];
                    bType = "kettes1"
                    clickActions()
                    tartalom.innerHTML = "Helyezd el a kettes1 hajót"
                    cellNumber++;
                    break;
                }
                break;
            case "kettes1":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })

                    bType = "kettes2"
                    tartalom.innerHTML = "Helyezd el a kettes2 hajót"
                    cellak = [];
                    clickActions()
                    break;
                }
                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;


            case "kettes2":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })

                    bType = "harmas1"
                    tartalom.innerHTML = "Helyezd el a harmas1 hajót"
                    cellak = [];
                    clickActions()
                    cellNumber++;
                    break;
                }

                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;
            case "harmas1":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })

                    bType = "harmas2"
                    tartalom.innerHTML = "Helyezd el a harmas2 hajót"
                    cellak = [];
                    clickActions()
                    break;
                }

                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;
            case "harmas2":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })
                    
                    cellak = [];
                    bType = "negyes"
                    tartalom.innerHTML = "Helyezd el a negyes hajót"
                    cellNumber++;
                    clickActions()
                    break;
                }

                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;
            case "negyes":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);

                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })
                    
                    cellak = [];
                    bType = "otos"
                    tartalom.innerHTML = "Helyezd el a otos hajót"
                    clickActions()
                    cellNumber++;
                    break;
                }

                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;
            case "otos":
                if (cellak.length == cellNumber) {
                    PutBoat(bType, cellak);
                    for (let i = 0; i < cellak.length; i++) {
                        const element = cellak[i];
                        //console.log("1"+element);
                        let nextMezok = GetOtherCoords("1"+element)
                        if (cellak.includes(element)) {
    
                            csoportosFunction(1,nextMezok.keresztben, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
            
                            csoportosFunction(1,nextMezok.atloban, function (source) {
                                //console.log("klikk")
                                source.className = " cantput"
                                source.onclick = function(e) {};
                            })
                        }
                    }

                    csoportosFunction(1,cellak, function (source) {
                        //("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                    })
                    
                    cellak = [];
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
                }

                var nextMezok = GetOtherCoords(pozicio)
                var p1cellak = document.querySelectorAll(className);
                for (const cell of p1cellak) {
                    //console.log(cell.id);
                    //cell.addEventListener("click", egyesHere(cell.id));
            
                    cell.onclick = function (e) {
                        //clickAction(cell.id);
                        //cell.className += " boat"
                    }
                }
                csoportosFunction(1,nextMezok.keresztben, function (source) {
                    source.onclick = function (e) {
                        //console.log("klikk")
                        source.className = " boat"
                        source.onclick = function(e) {};
                        clickActions();
                        clickAction(source.id);
                    };
                })

                csoportosFunction(1,nextMezok.atloban, function (source) {
                    //("klikk")
                    source.className = " cantput"
                    source.onclick = function(e) {};
                })
                break;
        
            default:
                break;
        }
    }
    if (vege) {
        return null;
    }
}


function letToNum(letter) {
    let a = "nincs";
    for (i=0; a != letter; i++) {
        a = numToSSColumn(i);
        //console.log(a)
    }
    return i-1;
}


function GetOtherCoords (coord) {
    //clear();
    let isPreRow = true;
    let isPreCol = true;
    let isNextRow = true;
    let isNextCol = true;

    const row = coord.slice(1, 2);
    const column = parseInt(coord.slice(2, 5));
    //console.log("A sor: "+row);
    //console.log("Az oszlop: "+column);
    const sorszam = letToNum(row);

    let nextCol;
    let nextRow;
    let preCol;
    let preRow;

    if (row === "a") {
        //console.log("----Az első sor--------");
        isPreRow = false;
        nextRow = numToSSColumn(sorszam+1);
    }
    else if (row === "j") {
        //console.log("----Az utolsó sor--------");
        isNextRow = false;
        preRow = numToSSColumn(sorszam-1);
    }
    else {
        //console.log("----Nem az első sor és nem az utolsó--------");
        nextRow = numToSSColumn(sorszam+1);
        preRow = numToSSColumn(sorszam-1);
    }

    if (column == 1) {
        //console.log("----Az első oszlop--------");
        isPreCol = false;
        nextCol = column+1
    }
    else if (column == 10){
        //console.log("----Az utolsó oszlop--------");
        isNextCol = false;
        preCol = column-1;
    }
    else {
        //console.log("----Nem az első oszlop és nem az utolsó--------");
        nextCol = column+1;
        preCol = column-1;
    }

    //console.log("Előző sor: "+preRow);
    //console.log("Előző oszlop: "+preCol);
    //console.log("Következő sor: "+nextRow);
    //console.log("Következő oszlop: "+nextCol);

    let preRowPreCol;
    let preRowSameCol;
    let preRowNextCol;

    let sameRowPreCol;
    let sameRowSameCol = coord;
    let sameRowNextCol;

    let nextRowPreCol;
    let nextRowSameCol;
    let nextRowNextCol;

    //console.log("--------------");
    //console.log("Előző sor: "+isPreRow);
    //console.log("Előző oszlop: "+isPreCol);
    //console.log("Következő sor: "+isNextRow);
    //console.log("Következő oszlop: "+isNextCol);

    if (isPreRow) {
        if (isPreCol) {
            preRowPreCol = preRow+preCol.toString();
        }
        else {
            preRowPreCol = false;
        }

        preRowSameCol = preRow+column;

        if (isNextCol) {
            preRowNextCol = preRow+nextCol.toString();
    
        }
        else {
            preRowNextCol = false;
        }
    }

    if (isPreCol) { //4
        sameRowPreCol = row+preCol.toString();
    }
    else {
        sameRowPreCol = false;
    }

    if (isNextCol) { //5
        sameRowNextCol = row+nextCol.toString();
    }
    else {
        sameRowNextCol = false;
    }

    if (isNextRow) {
        if (isPreCol) { //7
            nextRowPreCol = nextRow+preCol.toString();
        }
        else {
            nexRowPrevCol = false;
        }
        nextRowSameCol = nextRow+column; //8
        if(isNextCol){ //9
            nextRowNextCol = nextRow+nextCol.toString();
        }
        else {
            nextRowNextCol = false;
        }
    }

    var atloban = [];

    //console.log("Ha megvan határozva: " + preRowPreCol);

    if (preRowPreCol !== false && preRowPreCol !== undefined) {
        //console.log("preRowPreCol");
        atloban.push(preRowPreCol);
    }
    if (preRowNextCol !== false && preRowNextCol !== undefined) {
        //console.log("preRowNextCol");
        atloban.push(preRowNextCol);
    }
    if (nextRowPreCol !== false && nextRowPreCol !== undefined) {
        //console.log("nextRowPreCol");
        atloban.push(nextRowPreCol);
    }
    if (nextRowNextCol !== false && nextRowNextCol !== undefined) {
        //console.log("nextRowNextCol");
        atloban.push(nextRowNextCol);
    }

    var keresztben = [];
    if (preRowSameCol !== false && preRowSameCol !== undefined) {
        keresztben.push(preRowSameCol);
    }
    //console.log("sameRowPreCol "+sameRowPreCol)
    if (sameRowPreCol !== false && sameRowPreCol !== undefined) {
        keresztben.push(sameRowPreCol);
    }
    if (sameRowNextCol !== false && sameRowNextCol !== undefined) {
        keresztben.push(sameRowNextCol);
    }
    if (nextRowSameCol !== false && nextRowSameCol !== undefined) {
        keresztben.push(nextRowSameCol);
    }

    return ({atloban: atloban, keresztben: keresztben});
}