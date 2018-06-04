/* var allImages = document.getElementsByTagName('img');

for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('mouseover', function() {

    var thisImageHeight = this.clientHeight;
    var thisImageWidth = this.clientWidth;

  this.setAttribute('src', 'https://placedog.net/' + thisImageHeight + '/' + thisImageWidth)
  })
} */

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  
  recognition.continuous = true;

  recognition.onend = function() {
    recognition.start(); 
  }

  recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    speak(transcript)
  }
  recognition.continuous = true;
  recognition.start();
}

window.open('', '_self', '').close();