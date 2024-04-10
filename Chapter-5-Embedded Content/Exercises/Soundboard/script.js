function getAudio() {
    // target's the button element that triggered the click event and gets the id
    // stores the audio with the source path that concatenates with the id name
    var audio = new Audio('Audio Sampler\\Audio\\' + event.target.id + '.mp3');
    // plays the audio
    audio.play();
}