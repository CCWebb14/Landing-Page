
const switches = document.querySelectorAll('.switche');
const lights = document.querySelectorAll('.light');

let x = prompt("How many pre-determined moves? (<=1000)");

if((!parseInt(x)) || x > 1000){
    throw new Error("This is not an int");
}

x = parseInt(x);

for(let i = 0; i<x; i++){
    ranNum = Math.random() * 26;
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
    else if (ranNum < 15){
        dataKey = switches[14].getAttribute('data-key');
    }
    else if (ranNum < 16){
        dataKey = switches[15].getAttribute('data-key');
    }
    else if (ranNum < 17){
        dataKey = switches[16].getAttribute('data-key');
    }
    else if (ranNum < 18){
        dataKey = switches[17].getAttribute('data-key');
    }
    else if (ranNum < 19){
        dataKey = switches[18].getAttribute('data-key');
    }
    else if (ranNum < 20){
        dataKey = switches[19].getAttribute('data-key');
    }
    else if (ranNum < 21){
        dataKey = switches[20].getAttribute('data-key');
    }
    else if (ranNum < 22){
        dataKey = switches[21].getAttribute('data-key');
    }
    else if (ranNum < 23){
        dataKey = switches[22].getAttribute('data-key');
    }
    else if (ranNum < 24){
        dataKey = switches[23].getAttribute('data-key');
    }
    else if (ranNum < 25){
        dataKey = switches[24].getAttribute('data-key');
    }
    else if (ranNum < 26){
        dataKey = switches[25].getAttribute('data-key');
    }

    toggleSwitch2(dataKey);
}
switches.forEach(switche => switche.addEventListener('click', toggleSwitch));

function toggleRandom(light){
    if (Math.random() < 0.5){
        light.classList.toggle('off');
    }
}

function toggleSwitch(e){
    const dataKey = (this.getAttribute('data-key'));


    if(Number.isInteger((dataKey.length == 1) && (parseInt(dataKey)))){
        lights.forEach(light => toggleByNum(light, dataKey));
    }
    else if(Number.isInteger(parseInt(dataKey[0]))){
        lights.forEach(light => toggleFlip(light, dataKey[1]));
    }
    else if(dataKey === "leftCorner"){
        lights.forEach(light => toggleLeftCorner(light));
    }
    else if(dataKey === "rightCorner"){
        lights.forEach(light => toggleRightCorner(light));
    }
    else{
        lights.forEach(light => toggleByChar(light, dataKey));
    }
    // checkWin();
}

function toggleSwitch2(dataKey){

    if(Number.isInteger((dataKey.length == 1) && (parseInt(dataKey)))){
        lights.forEach(light => toggleByNum(light, dataKey));
    }
    else if(Number.isInteger(parseInt(dataKey[0]))){
        lights.forEach(light => toggleFlip(light, dataKey[1]));
    }
    else if(dataKey === "leftCorner"){
        lights.forEach(light => toggleLeftCorner(light));
    }
    else if(dataKey === "rightCorner"){
        lights.forEach(light => toggleRightCorner(light));
    }
    else{
        lights.forEach(light => toggleByChar(light, dataKey));
    }
}

function toggleByNum(light, num){
    dataKey = (light.getAttribute('data-key'));
    console.log(dataKey[1]);
    if(dataKey[1] === num){
        light.classList.toggle('off');
    }
}

function toggleFlip(light1, char){
    dataKey = (light1.getAttribute('data-key'));
    
    
    if(dataKey[0] === char){
        if(dataKey[1] === '8'){
            lights.forEach(light2 => toggleSpecific(light1, light2, (char + '1')));
        }
        if(dataKey[1] === '7'){
            lights.forEach(light2 => toggleSpecific(light1, light2, (char + '2')));
        }
        if(dataKey[1] === '6'){
            lights.forEach(light2 => toggleSpecific(light1, light2, (char + '3')));
        }
        if(dataKey[1] === '5'){
            lights.forEach(light2 => toggleSpecific(light1, light2, (char + '4')));
        }
        
    }
}


function toggleSpecific(light1, light2, specficDataKey){
    dataKey = (light2.getAttribute('data-key'));

    if(dataKey === specficDataKey){
        bool1 = light1.classList.contains('off');
        bool2 = light2.classList.contains('off');
        if(bool1 && !bool2){
            light1.classList.toggle('off');
            light2.classList.toggle('off');
        }
        else if(!bool1 && bool2){
            light1.classList.toggle('off');
            light2.classList.toggle('off');
        }
    }
}

function toggleByChar(light, char){
    dataKey = (light.getAttribute('data-key'));
    console.log(dataKey[1]);
    if(dataKey[0] === char){
        light.classList.toggle('off');
    }
}

function toggleLeftCorner(light){
    dataKey = (light.getAttribute('data-key'));

    if(dataKey === "A1"){
        light.classList.toggle('off');
    }
    else if(dataKey === "B2"){
        light.classList.toggle('off');
    }
    else if(dataKey === "C3"){
        light.classList.toggle('off');
    }
    else if(dataKey === "D4"){
        light.classList.toggle('off');
    }
    else if(dataKey === "E5"){
        light.classList.toggle('off');
    }
    else if(dataKey === "F6"){
        light.classList.toggle('off');
    }
    else if(dataKey === "G7"){
        light.classList.toggle('off');
    }
    else if(dataKey === "H8"){
        light.classList.toggle('off');
    }
}
function toggleRightCorner(light){
    dataKey = (light.getAttribute('data-key'));
    
    if(dataKey === "A8"){
        light.classList.toggle('off');
    }
    else if(dataKey === "B7"){
        light.classList.toggle('off');
    }
    else if(dataKey === "C6"){
        light.classList.toggle('off');
    }
    else if(dataKey === "D5"){
        light.classList.toggle('off');
    }
    else if(dataKey === "E4"){
        light.classList.toggle('off');
    }
    else if(dataKey === "F3"){
        light.classList.toggle('off');
    }
    else if(dataKey === "G2"){
        light.classList.toggle('off');
    }
    else if(dataKey === "H1"){
        light.classList.toggle('off');
    }
    
}

