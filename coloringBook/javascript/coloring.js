var w = 50;
var r = 127;
var g = 127;
var b = 127;
var thefill = "rgb(" + r + "," + g + "," + b + ")";
var theCanvas = document.getElementById('circles_canvas');
var ctx = theCanvas.getContext('2d');
var begin_drawing = false;


theCanvas.addEventListener('mousedown', mouse_pressed_down, false);
theCanvas.addEventListener('mousemove', mouse_moved, false);
theCanvas.addEventListener('mouseup', mouse_released, false);
theCanvas.addEventListener('touchmove', touch_move_gesture, false);

function mouse_pressed_down (ev) {
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	context.fillStyle = thefill;
	begin_drawing = true;
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
	}
}
function mouse_released (ev) {
	begin_drawing = false;
}
function touch_move_gesture (ev) {
	// For touchscreen browsers/readers that support touchmove
	var x, y;
	ev.preventDefault(); //override default UI behavior for better results on touchscreen devices
	context.beginPath();
	context.fillStyle = colorChosen.innerHTML;
	if(ev.touches.length == 1){
	    var touch = ev.touches[0];
	    x = touch.pageX;
	    y = touch.pageY;
	    context.arc(x, y, 7, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
	}
}
function reloadPage() {
	location.reload();
}
function circlePreview(){
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	var canvas = document.getElementById('circle_preview');
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,100,100);
	ctx.beginPath();
	ctx.fillStyle = thefill;
	ctx.arc(50, 50, w/2, 0, 2 * Math.PI, false);
	ctx.fill();
}
function TryThis(){
	var thefill = "rgb(" + r + "," + g + "," + b + ")";
	var canvas = document.getElementById('circles_canvas');
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,100,100);
	ctx.beginPath();
	ctx.fillStyle = thefill;
	ctx.arc(50, 50, w/2, 0, 2 * Math.PI, false);
	ctx.fill();
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
function setBebop(){
	var canvas=document.getElementById("circles_canvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,700,500);
	var img=document.getElementById("bebop");
	ctx.drawImage(img,0,0);
}
function setHawk(){
	var canvas=document.getElementById("circles_canvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,700,500);
	var img=document.getElementById("hawk");
	ctx.drawImage(img,0,0);
}
function setJoker(){
	var canvas=document.getElementById("circles_canvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FFF";
	ctx.fillRect(0,0,700,500);
	var img=document.getElementById("joker");
	ctx.drawImage(img,0,0);
}
