var w = 50;
var r = 127;
var g = 127;
var b = 127;
var thefill = "rgb(" + r + "," + g + "," + b + ")";
function circlePreview(){
	var canvas = document.getElementById('circle_preview');
	var ctx = canvas.getContext("2d");
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,100,100);
	ctx.beginPath();
	ctx.fillStyle = thefill;
	ctx.arc(50, 50, w/2, 0, 2 * Math.PI, false);
	ctx.fill();
    ctx.closePath();
}
function RedUp(){
	if (r<236){
		window.r = (r+20);
	}
	circlePreview();
}
function RedDown(){
	if (r>19){
		window.r = (r-20);
	}
	circlePreview();
}
function GreenUp(){
	if (g<236){
		window.g = (g+20);
	}
	circlePreview();
}
function GreenDown(){
	if (g>19){
		window.g = (g-20);
	}
	circlePreview();
}
function BlueUp(){
	if (b<236){
		window.b = (b+20);
	}
	circlePreview();
}
function BlueDown(){
	if (b>19){
		window.b = (b-20);
	}
	circlePreview();
}
function SizeUp(){
	if (w<90){
		window.w = (w+10);
	}
	circlePreview();
}
function SizeDown(){
	if (w>10){
		window.w = (w-10);
	}
	circlePreview();
}
var img = new Image();

function setBebop(){
window.img.src = "images/bebop.png"; //transparent png
canvasApp();
}
function setHawk(){
 window.img.src = "images/Hawk.png"; //transparent png
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
var theCanvas = document.getElementById('circles_canvas');
var context = theCanvas.getContext('2d');

	theCanvas.addEventListener('mousedown', mouse_pressed_down, false);
	theCanvas.addEventListener('mousemove', mouse_moved, false);
	theCanvas.addEventListener('mouseup', mouse_released, false);
	theCanvas.addEventListener('touchmove', touch_move_gesture, false);
	
	drawScreen();

    function drawScreen() {
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	context.strokeStyle = '#000000'; 
	context.strokeRect(1,  1, theCanvas.width-2, theCanvas.height-2);
	context.drawImage(img,0,0);
    }

    // For the mouse_moved event handler.
    var begin_drawing = false;

    function mouse_pressed_down (ev) {
	begin_drawing = true;
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	context.fillStyle = thefill;
    }

    function mouse_moved (ev) {
	var x, y;	
	// Get the mouse position in the canvas
	x = ev.pageX;
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
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	ev.preventDefault(); //override default UI behavior for better results on touchscreen devices
	context.beginPath();
	context.fillStyle = thefill;
	if(ev.touches.length == 1){
	    var touch = ev.touches[0];
	    x = touch.pageX;
	    y = touch.pageY;
	    context.arc(x, y, w/2, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
		context.drawImage(img,0,0);
	}
	}
}
