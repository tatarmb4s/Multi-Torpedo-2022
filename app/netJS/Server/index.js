import wsa from './websocketAPI.js';

wsa.initilaliseWebSocketServer();

wsa.EmitEvents.registerEventHandler('TESZT_EVENT', (socket, data) =>{
    console.log(JSON.stringify(data));
    wsa.EmitEvents.sendMessage(new wsa.EmitData('TESZT_CLIENT', 'ÜZENET A SZERVERTŐL'), socket);
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