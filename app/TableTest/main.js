const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const player1table = document.querySelector('#player1');
const player2table = document.querySelector('#player2');

let sessionID = "jsgame";
let isPublic = true;
let RandomName = false;
let player = "player1";
//getId.open("GET", )

// Játékosok adatai
var playersData = "";


const data = { 
    username: 'example' 
};

const urlm = 'https://localhost:7091'
//const urlm = 'https://api.torpedo.ml'

fetch(urlm+'/api/GameCreate/sessions')
.then(response => response.json())
.then(data => console.log(data));

//fetch(urlm+`/api/GameCreate/New-Game?sessionID=${sessionID}&RandomName=${RandomName}&isPublic=${isPublic}` )

fetch(urlm+`/api/GameCreate/New-Game?sessionID=${sessionID}&RandomName=${RandomName}&isPublic=${isPublic}`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'text/json',
  },
  body: null,
})
.then(response => response.text())
.then(data => {
    console.log(data)
    GetOwnData()
})
.catch((error) => {
  console.error('Error:', error);
});

function GetOwnData() {
    fetch(urlm+`/api/GameCreate/ownData?sessionID=${sessionID}&player=${player}`, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      })
      .then(response => response.json())
      .then(
          data => {
                console.log(data);
                playersData = data;
          }
        )
      .catch((error) => {
        console.error('Error:', error);
      });
}


//Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop trough empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// Darag funtcions
function dragStart () {
    console.log('start')
    this.className += ' hold';
    setTimeout(() => (this.className = ' invisible'), 0); 
}

function dragEnd() {
    console.log('end')
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}
function dragEnter(e) {
    e.preventDefault();
    console.log('enter');
    this.className += ' hovered';
}
function dragLeave(e) {
    console.log('leave');
    this.className = 'empty';
}
function dragDrop(e) {
    console.log('drop');
    this.className = ' empty';
    this.append(fill);
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
            }     
            //console.log(id);
            tableCol += `<th id="${id}" class="pl1Cell">${txt}</th>`;        
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

  cellOnclick('.pl1Cell');
  
  function cellOnclick(className) {
        const p1cellak = document.querySelectorAll(className);
        //console.log(p1cellak)
        for (const cell of p1cellak) {
            //console.log(cell.id);
            //cell.addEventListener("click", egyesHere(cell.id));

            cell.onclick = function (e) {
                egyesHere(cell.id);
                //fnc();
            }
        }   
    }

    function egyesHere(pos) {
        console.log(pos.slice(1, 5));


    }

    //const cella = document.getElementById('1a1');
    
    /*cella.onclick = function (e) {
        e.preventDefault()
        console.log("pos");
    }*/

