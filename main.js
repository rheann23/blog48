var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start(){
     document.getElementById("textbox").innerHTML = "";
     recognition.start();
 }
 recognition.onresult = function run (event){
     console.log(event);

 
 var content = event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML = content;
 console.log(content);
 if(content =="take my selfie"){
     console.log("taking selfie");
    speak();
 }}
 function speak(){
     var synth = window.speechSynthesis;
     speak_data = "get ready we are taking your photo in 5 seconds";
     var utterthis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterthis);
     Webcam.attach(camera);
 }

 Webcam.set({
     width:360,
     height:250,
     image_format:"jpeg",
     jpeg_quality:90

 })
;