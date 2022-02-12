
const switches = document.querySelectorAll('.switche');
const lights = document.querySelectorAll('.light');
console.log();

lights.forEach(light => toggleRandom(light));


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

