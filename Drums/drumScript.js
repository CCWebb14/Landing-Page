const buttons = document.getElementsByClassName("keys");
console.log(buttons);

window.addEventListener('keydown', function(e){
    // e will tell us lots of info
    console.log(e.code);
    
    // Using an attribute selector audio[]
    // Template literal withib ${}
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    console.log(audio);
    if(!audio){
        return;
    }
     // rewind currentTime to 0, allows multiple replayd concurrently
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function clickPlay(e){
    dataKey = (this.getAttribute('data-key'));
    const audio = document.querySelector(`audio[data-key=${dataKey}]`);
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform'){
        return;
    } 
    // "this" returns key
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', clickPlay));
