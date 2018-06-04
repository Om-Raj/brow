const speak = (text="Something all the lines of being a badass") => {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.getVoices()[3];
    msg.voiceURI = 'native';
    window.speechSynthesis.speak(msg);
}

// need to call this once to load the voices before hand
window.speechSynthesis.getVoices();
