import wsa from './websocketAPI.js';

var games = {}

function NewGame (sessionID, isRandom, isPublic) {
    let siker = false;
    var a = "nincs";
    while (!siker) {
        if (isRandom) {
            
        }
        else {
            try {
                var vansession = games[sessionID]
            }
            catch {
                
            }
        }
        
    }
    
}

function generateUID() {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart.toUpperCase();
}

function NewGameGenerate (sessionID, isPublic) {

}

wsa.initilaliseWebSocketServer();

wsa.EmitEvents.registerEventHandler('TESZT_EVENT', (socket, data) =>{
    console.log(JSON.stringify(data));
    wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', 'ÜZENET A SZERVERTŐL:'+generateUID()), socket);
});



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