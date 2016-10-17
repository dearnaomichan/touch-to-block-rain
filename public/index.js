$(function (){


  var socket = io.connect('http://localhost:3010') //connect to the server

  socket.on('connect', function(data){ // when connected do something
    console.log("connected to the server" + socket.id); // log out our id
  })



// rotate and pinch
//   var myElement = document.getElementById('myElement');
//
//   var mc = new Hammer.Manager(myElement);
//
//   // create a pinch and rotate recognizer
//   // these require 2 pointers
//   var pinch = new Hammer.Pinch();
//   var rotate = new Hammer.Rotate();
//
//   // we want to detect both the same time
//   pinch.recognizeWith(rotate);
//
//   // add to the Manager
//   mc.add([pinch, rotate]);
//
//
//   mc.on("pinch rotate", function(ev) {
//       myElement.textContent += ev.type +" ";
//   });
//
//
//   var myElement = document.getElementById('myElement');
//
// // create a simple instance
// // by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);
//
// // listen to events...
// mc.on("press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });




// tap and double tap
  var tapElementOne = document.getElementById('one');
  var regionOne = new ZingTouch.Region(tapElementOne, true, false);
  var longTap = new ZingTouch.Tap({
    maxDelay: 1000
  })
  regionOne.bind(tapElementOne, longTap, function(e){
    var textElement = document.getElementById('one');
    textElement.innerHTML = "Tapped!";
    setOutput([
      ['Gesture', 'Tap'],
      ['inputs' , '1'],
      ['interval', Math.floor(e.detail.interval) + "ms"]
    ]);

    (function(element){
      setTimeout(function(){
        element.innerHTML = "One Finger Tap";
      }, 1000);
    })(textElement);
  })


  var tapElementTwo = document.getElementById('two');
  var TwoFingerTap = new ZingTouch.Tap({
    numInputs: 2,
    maxDelay: 1000
  });

  var regionTwo = new ZingTouch.Region(tapElementTwo, true, false);
  regionTwo.bind(tapElementTwo, TwoFingerTap, function(e){
    setOutput([
      ['Gesture', 'Tap'],
      ['inputs' , '2'],
      ['interval', Math.floor(e.detail.interval) + "ms"]
    ]);

    var textElement = document.getElementById('two');
    textElement.innerHTML = "Tapped!";
    (function(element){
      setTimeout(function(){
        element.innerHTML = "Two Finger Tap";
      }, 1000);
    })(textElement);
  })


  function setOutput(data){
    console.log('here');

    var outputStr = "> ";
    for (var i = 0; i < data.length; i++){
      outputStr += data[i][0] + ": " + data[i][1] + ((i===data.length-1) ? '' : ' , ');
    }
    var output = document.getElementById('output');
    output.innerHTML = outputStr;
  }


  // $('<div>🍆</div>').css({
  //   'position':'absolute',
  //   'top':e.clientY,
  //   'left':e.clientX
  // }).appendTo('body')




    $('body').mousemove(function(e){ // on click, do something
      console.log(e);

      $('<div class="mouse"></div>').css({
        'position':'absolute',
        'top':e.clientY,
        'left':e.clientX
      }).appendTo('body')


      function draw(){
        // fill(255);
        ellipse(mouseX, mouseY, 50,50);
      }



var dataToSend = {
  'top':e.clientY,
  'left':e.clientX
}










// var dataToSend = {
//   'top':e.clientY,
//   'left':e.clientX
//   'speedScalar': pinchAmount
// }


      socket.emit('addRectangle', dataToSend) // send out a message of addRectangle to the server, it will handle the details!

    })





}) //end jquery init
