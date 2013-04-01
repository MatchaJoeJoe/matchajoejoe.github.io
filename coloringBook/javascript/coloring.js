var w = 50;
var r = 127;
var g = 127;
var b = 127;
var o = 1;
var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
function circlePreview(){
	var canvas = document.getElementById('circle_preview');
	var ctx = canvas.getContext("2d");
	var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,100,100);
	ctx.beginPath();
	ctx.fillStyle = thefill;
	ctx.arc(50, 50, w/2, 0, 2 * Math.PI, false);
	ctx.fill();
    ctx.closePath();
}
var img = new Image();

function setBebop(){
window.img.src = "images/bebop.png"; //transparent png
canvasApp();
}
function setSpawn(){
 window.img.src = "images/spawn.png"; //transparent png
canvasApp();
}
function setJoker(){
  window.img.src = "images/Joker.png"; //transparent png
canvasApp();
}
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
    canvasApp();
	setBebop();
	circlePreview();
}
function canvasApp(){  
	var bebopIMG = document.getElementById('bebop');
	bebopIMG.addEventListener('click', setBebop, false);
	var spawnIMG = document.getElementById('spawn');
	spawnIMG.addEventListener('click', setSpawn, false);
	var jokerIMG = document.getElementById('joker');
	jokerIMG.addEventListener('click', setJoker, false);
	
	var FillButton = document.getElementById('FillButton');
	FillButton.addEventListener('click', fillColor, false);
	
	function fillColor(){
		var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
		context.fillStyle = thefill;
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);
		context.drawImage(img,0,0);
	}

	var theCanvas = document.getElementById('circles_canvas');
	var context = theCanvas.getContext('2d');
	theCanvas.addEventListener('mousedown', mouse_pressed_down, false);
	theCanvas.addEventListener('mousemove', mouse_moved, false);
	theCanvas.addEventListener('mouseup', mouse_released, false);
	theCanvas.addEventListener('touchstart', touch_move_gesture, false);
	theCanvas.addEventListener('touchmove', touch_move_gesture, false);
	
    var RedInput = document.getElementById('RedInput');
	RedInput.addEventListener('change', RedChange, true);
	function RedChange(ev){
		window.r = RedInput.value;
		circlePreview();
		document.getElementById("RedValue").innerHTML=r;
	}
    var GreenInput = document.getElementById('GreenInput');
	GreenInput.addEventListener('change', GreenChange, true);
	function GreenChange(ev){
		window.g = GreenInput.value;
		circlePreview();
		document.getElementById("GreenValue").innerHTML=g;
	}
    var BlueInput = document.getElementById('BlueInput');
	BlueInput.addEventListener('change', BlueChange, true);
	function BlueChange(ev){
		window.b = BlueInput.value;
		circlePreview();
		document.getElementById("BlueValue").innerHTML=b;
	}
    var SizeInput = document.getElementById('SizeInput');
	SizeInput.addEventListener('change', SizeChange, true);
	function SizeChange(ev){
		window.w = SizeInput.value;
		circlePreview();
		document.getElementById("SizeValue").innerHTML=w+"px";
	}
    var OpacityInput = document.getElementById('OpacityInput');
	OpacityInput.addEventListener('change', OpacityChange, true);
	function OpacityChange(ev){
		window.o = OpacityInput.value/100;
		circlePreview();
		document.getElementById("OpacityValue").innerHTML=OpacityInput.value+"%";
	}

	drawScreen();

    function drawScreen() {
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.drawImage(img,0,0);
    }

    // For the mouse_moved event handler.
    var begin_drawing = false;

    function mouse_pressed_down (ev) {
	begin_drawing = true;
	var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	context.fillStyle = thefill;
    }

    function mouse_moved (ev) {
	var x, y;	
	// Get the mouse position in the canvas
	x = (ev.pageX-150);
	y = ev.pageY;

	if (begin_drawing) {
	    context.beginPath();
	    context.arc(x, y, w/2, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
        context.closePath();
		context.drawImage(img,0,0);
	}
    }

    function mouse_released (ev) {
	begin_drawing = false;
    }

    function touch_move_gesture (ev) {
	// For touchscreen browsers/readers that support touchmove
	var x, y;
	var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	ev.preventDefault(); //override default UI behavior for better results on touchscreen devices
	context.beginPath();
	context.fillStyle = thefill;
	if(ev.touches.length == 1){
	    var touch = ev.touches[0];
	    x = (touch.pageX-150);
	    y = touch.pageY;
	    context.arc(x, y, w/2, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
		context.drawImage(img,0,0);
	}
	}
}
