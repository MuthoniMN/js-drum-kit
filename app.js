function playSound(e){
    //the keycode is the number associated with the key pressed
    const keyNum = e.keyCode;
    
    //the keycode has to be the same as one of the data keys
    const audio = document.querySelector(`audio[data-key = "${keyNum}"`)

    //if the keycode is not a data key, the function should stop executing
    if (!audio) return;

    //playing the sound
    audio.currentTime = 0; //rewinds the audio to ensure it can be played again
    audio.play();

    //adding the transition to the corresponding key
    const key = document.querySelector(`.key[data-key = "${keyNum}"]`)
    key.classList.add('playing')

}

window.addEventListener('keydown', playSound);

function removeTransition(e) {
    //check if the property has been transitioned
    if (e.propertyName !== 'transform')return;

    //remove the transition
    this.classList.remove('playing')
}

//get a node list of all the keys in the document
const keys = document.querySelectorAll('.key')

//add an event listener to each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition))