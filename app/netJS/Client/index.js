const valami = {
    valamiszoveg: 'asdasdassad',
    valaminumber: 1,
    bool: true
}


ws.onopen = ()=>{
    EmitEvents.sendMessage(new EmitData('TESZT_EVENT', valami));

    EmitEvents.registerEventHandler('TESZT_CLIENT', (data) =>{
        document.write(data);
    });
}