var w = 50;
var r = 127;
var g = 127;
var b = 127;
var o = 1;
var x = 0;
var y = 0;	
var img = new Image();
var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
//default brush is circle
var setCircle = true;
var setSquare = false;
var setTriangle = false;
var setSpray = false;

function circlePreview(){
	var previewcanvas = document.getElementById('brushPreview');
	var previewcontext = previewcanvas.getContext("2d");
	var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	previewcontext.fillStyle="#FFF";
	previewcontext.fillRect(0,0,100,100);
	previewcontext.fillStyle = thefill;
	if (setCircle){
		previewcontext.beginPath();
		previewcontext.arc(50, 50, w/2, 0, 2 * Math.PI, false);
		previewcontext.fill();
	}
	if (setSquare){
		previewcontext.beginPath();
		previewcontext.fillRect((50-w/2),50-w/2,w,w);
		previewcontext.fill();
	}
	if (setTriangle){
		previewcontext.beginPath();
		previewcontext.moveTo(50, 50-w/2); // give the (x,y) coordinates
		previewcontext.lineTo(50+w/2, 50+w/2);
		previewcontext.lineTo(50-w/2, 50+w/2);
		previewcontext.lineTo(50, 50-w/2);
		previewcontext.fill();
	}
}
function brushPreview(){
	var circlecanvas = document.getElementById('circleBrush');
	var circlecontext = circlecanvas.getContext("2d");
	var squarecanvas = document.getElementById('squareBrush');
	var squarecontext = squarecanvas.getContext("2d");
	var trianglecanvas = document.getElementById('triangleBrush');
	var trianglecontext = trianglecanvas.getContext("2d");
		circlecontext.arc(30, 30, 25, 0, 2 * Math.PI, false);
		circlecontext.fill();
		squarecontext.fillRect(5, 5, 50, 50);
		squarecontext.fill();
		trianglecontext.beginPath();
		trianglecontext.moveTo(30, 5); 
		trianglecontext.lineTo(55, 55);
		trianglecontext.lineTo(5, 55);
		trianglecontext.lineTo(30, 5);
		trianglecontext.fill();
}
function setBebop(){
window.img.src = "images/bebop.png"; //transparent png
drawScreen();
}
function setSpawn(){
window.img.src = "images/spawn.png"; //transparent png
drawScreen();
}
function setJoker(){
window.img.src = "images/Joker.png"; //transparent png
drawScreen();
}
function setAvengers(){
window.img.src = "images/avengers.png"; //transparent png
drawScreen();
}
function drawScreen() {
	var theCanvas = document.getElementById('painting_canvas');
	var context = theCanvas.getContext('2d');
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.drawImage(img,0,0);
}

window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
    canvasApp();
	circlePreview();
	brushPreview();
}
function canvasApp(){  
	var bebopIMG = document.getElementById('bebop');
	bebopIMG.addEventListener('click', setBebop, false);
	var spawnIMG = document.getElementById('spawn');
	spawnIMG.addEventListener('click', setSpawn, false);
	var jokerIMG = document.getElementById('joker');
	jokerIMG.addEventListener('click', setJoker, false);
	var avengersIMG = document.getElementById('avengers');
	avengersIMG.addEventListener('click', setAvengers, false);
	
	var FillButton = document.getElementById('FillButton');
	FillButton.addEventListener('click', fillColor, false);
	
	function fillColor(){
		var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
		context.fillStyle = thefill;
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);
		context.drawImage(img,0,0);
	}

	var theCanvas = document.getElementById('painting_canvas');
	var context = theCanvas.getContext('2d');
	theCanvas.addEventListener('mousedown', mouse_pressed_down, false);
	theCanvas.addEventListener('mousemove', mouse_moved, false);
	theCanvas.addEventListener('mouseup', mouse_released, false);
	theCanvas.addEventListener('touchstart', touch_move_gesture, false);
	theCanvas.addEventListener('touchmove', touch_move_gesture, false);
	
    var circleBrush = document.getElementById('circleBrush');
	circleBrush.addEventListener('click', makeCircle, false);
	function makeCircle(){
		window.setCircle = true;
		window.setSquare = false;
		window.setTriangle = false;
		window.setSpray = false;
		circlePreview();
	}
	
    var squareBrush = document.getElementById('squareBrush');
	squareBrush.addEventListener('click', makeSquare, false);
	function makeSquare(){
		window.setCircle = false;
		window.setSquare = true;
		window.setTriangle = false;
		window.setSpray = false;
		circlePreview();
	}
    var triangleBrush = document.getElementById('triangleBrush');
	triangleBrush.addEventListener('click', makeTriangle, false);
	function makeTriangle(){
		window.setCircle = false;
		window.setSquare = false;
		window.setTriangle = true;
		window.setSpray = false;
		circlePreview();
	}

	//color input
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

    // For the mouse_moved event handler.
    var begin_drawing = false;
    
    function mouse_pressed_down (ev) {
		begin_drawing = true;
		var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
		context.fillStyle = thefill;
    }
	function drawBrush(){
			if (setCircle) {
				context.beginPath();
				context.arc(x, y, w/2, (Math.PI/180)*0, (Math.PI/180)*360, false);
				context.fill();
				context.drawImage(img,0,0);
			}
			if (setSquare){
				context.beginPath();
				context.fillRect(x-w/2,y-w/2,w,w);
				context.fill();
				context.drawImage(img,0,0);
			}
			if (setTriangle){
				context.beginPath();
				context.moveTo(x, y-w/2); // give the (x,y) coordinates
				context.lineTo(x+w/2, y+w/2);
				context.lineTo(x-w/2, y+w/2);
				context.lineTo(x, y-w/2);
				context.fill();
			}
	}
    function mouse_moved (ev) {
		// Get the mouse position in the canvas
		x = (ev.pageX-145);
		y = ev.pageY;

		if (begin_drawing) {
		drawBrush();
		}
    }
    function mouse_released (ev) {
		begin_drawing = false;
    }

    function touch_move_gesture (ev) {
		// For touchscreen browsers/readers that support touchmove
		var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
		ev.preventDefault(); //override default UI behavior for better results on touchscreen devices
		context.fillStyle = thefill;
		var touch = ev.touches[0];
		x = (touch.pageX-145);
		y = touch.pageY;
		drawBrush();
	}
}
