
const switches = document.querySelectorAll('.switche');
const lights = document.querySelectorAll('.light');
console.log(switches[1]);

// lights.forEach(light => toggleRandom(light));

for(let i = 0; i<100; i++){
    ranNum = Math.random() * 14;
    let dataKey = "";
    if (ranNum < 1){
        dataKey = switches[0].getAttribute('data-key');
    }
    else if (ranNum < 2){
        dataKey = switches[1].getAttribute('data-key');
    }
    else if (ranNum < 3){
        dataKey = switches[2].getAttribute('data-key');
    }
    else if (ranNum < 4){
        dataKey = switches[3].getAttribute('data-key');
    }
    else if (ranNum < 5){
        dataKey = switches[4].getAttribute('data-key');
    }
    else if (ranNum < 6){
        dataKey = switches[5].getAttribute('data-key');
    }
    else if (ranNum < 7){
        dataKey = switches[6].getAttribute('data-key');
    }
    else if (ranNum < 8){
        dataKey = switches[7].getAttribute('data-key');
    }
    else if (ranNum < 9){
        dataKey = switches[8].getAttribute('data-key');
    }
    else if (ranNum < 10){
        dataKey = switches[9].getAttribute('data-key');
    }
    else if (ranNum < 11){
        dataKey = switches[10].getAttribute('data-key');
    }
    else if (ranNum < 12){
        dataKey = switches[11].getAttribute('data-key');
    }
    else if (ranNum < 13){
        dataKey = switches[12].getAttribute('data-key');
    }
    else if (ranNum < 14){
        dataKey = switches[13].getAttribute('data-key');
    }

    toggleSwitch2(dataKey);
}
switches.forEach(switche => switche.addEventListener('click', toggleSwitch));

function toggleRandom(light){
    if (Math.random() < 0.5){
        light.classList.toggle('on');
    }
}

function toggleSwitch(e){
    // this.classList.toggle('on');
    const dataKey = (this.getAttribute('data-key'));

    if(Number.isInteger(parseInt(dataKey))){
        console.log(dataKey);
        lights.forEach(light => toggleByNum(light, dataKey));
    }
    else{
        lights.forEach(light => toggleByChar(light, dataKey));
    }
    // checkWin();
}

function toggleSwitch2(dataKey){

    if(Number.isInteger(parseInt(dataKey))){
        console.log(dataKey);
        lights.forEach(light => toggleByNum(light, dataKey));
    }
    else{
        lights.forEach(light => toggleByChar(light, dataKey));
    }
}

function toggleByNum(light, num){
    dataKey = (light.getAttribute('data-key'));
    console.log(dataKey[1]);
    if(dataKey[1] === num){
        light.classList.toggle('on');
    }
}

function toggleByChar(light, char){
    dataKey = (light.getAttribute('data-key'));
    console.log(dataKey[1]);
    if(dataKey[0] === char){
        light.classList.toggle('on');
    }
}

