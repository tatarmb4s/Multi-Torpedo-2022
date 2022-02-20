var inhtml;
for (let index = 0; index < 200; index++) {
    console.log(numToSSColumn(index))
    console.log(String.fromCharCode(index) + index.toString())   
}


// converts numbers to spreadsheet letter columns eg. 1 -> A
function numToSSColumn(num){
    let s = '', t;
  
    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = (num - t)/26 | 0;
    }
    return s || undefined;
  }