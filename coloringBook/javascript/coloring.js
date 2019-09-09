//color defaults
var w = 50;
var r = 127;
var g = 127;
var b = 127;
var o = 1;
var r1 = 255;
var g1 = 255;
var b1 = 255;
var o1 = 1;
var r2 = 127;
var g2 = 127;
var b2 = 127;
var o2 = 1;
var r3 = 0;
var g3 = 0;
var b3 = 0;
var o3 = 1;
var r4 = 255;
var g4 = 0;
var b4 = 0;
var o4 = 1;
var r5 = 255;
var g5 = 127;
var b5 = 0;
var o5 = 1;
var r6 = 0;
var g6 = 255;
var b6 = 255;
var o6 = 1;
var r7 = 0;
var g7 = 255;
var b7 = 0;
var o7 = 1;
var r8 = 0;
var g8 = 0;
var b8 = 255;
var o8 = 1;
var r9 = 0;
var g9 = 255;
var b9 = 255;
var o9 = 1;
var r10 = 255;
var g10 = 0;
var b10 = 255;
var o10 = 1;
var x = 0;
var y = 0;
var thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
var loffset = 160;

//palette defaults
var thefill1 = "rgba(255,255,255,1)";
var thefill2 = "rgba(127,127,127,1)";
var thefill3 = "rgba(0,0,0,1)";
var thefill4 = "rgba(255,0,0,1)";
var thefill5 = "rgba(255,127,0,1)";
var thefill6 = "rgba(255,255,0,1)";
var thefill7 = "rgba(0,255,0,1)";
var thefill8 = "rgba(0,0,255,1)";
var thefill9 = "rgba(0,255,255,1)";
var thefill10 = "rgba(255,0,255,1)";

//brush defaults
var setCircle = true;//default brush is circle
var setSquare = false;
var setTriangle = false;
var setSpray = false;

//how far right to make the brush
function getCanvasOffset(){
	window.loffset = 160;
}

//function to update palette colors
function updateColors() {

	//1st canvas color
	var color1canvas = document.getElementById('color1');
	var color1context = color1canvas.getContext("2d");
	var color1text = document.getElementById('color1text');
	color1text.innerHTML = thefill1;	//showing color value on screen
	color1context.fillStyle = "rgba(255,255,255,1)"; //fill with white first to blank out canvas
	color1context.fillRect(0,0,color1canvas.width,color1canvas.height);
	color1context.fill();
	color1context.fillStyle = thefill1;	//then fill with new color
	color1context.fillRect(0,0,color1canvas.width,color1canvas.height);
	color1context.fill();

	//the rest of the colors are just copies of the first
	var color2canvas = document.getElementById('color2');
	var color2context = color2canvas.getContext("2d");
	var color2text = document.getElementById('color2text');
	color2text.innerHTML = thefill2;
	color2context.fillStyle = "rgba(255,255,255,1)";
	color2context.fillRect(0,0,color2canvas.width,color2canvas.height);
	color2context.fill();
	color2context.fillStyle = thefill2;
	color2context.fillRect(0,0,color2canvas.width,color2canvas.height);
	color2context.fill();

	var color3canvas = document.getElementById('color3');
	var color3context = color3canvas.getContext("2d");
	var color3text = document.getElementById('color3text');
	color3text.innerHTML = thefill3;
	color3context.fillStyle = "rgba(255,255,255,1)";
	color3context.fillRect(0,0,color3canvas.width,color3canvas.height);
	color3context.fill();
	color3context.fillStyle = thefill3;
	color3context.fillRect(0,0,color3canvas.width,color3canvas.height);
	color3context.fill();

	var color4canvas = document.getElementById('color4');
	var color4context = color4canvas.getContext("2d");
	var color4text = document.getElementById('color4text');
	color4text.innerHTML = thefill4;
	color4context.fillStyle = "rgba(255,255,255,1)";
	color4context.fillRect(0,0,color4canvas.width,color4canvas.height);
	color4context.fill();
	color4context.fillStyle = thefill4;
	color4context.fillRect(0,0,color4canvas.width,color4canvas.height);
	color4context.fill();

	var color5canvas = document.getElementById('color5');
	var color5context = color5canvas.getContext("2d");
	var color5text = document.getElementById('color5text');
	color5text.innerHTML = thefill5;
	color5context.fillStyle = "rgba(255,255,255,1)";
	color5context.fillRect(0,0,color5canvas.width,color5canvas.height);
	color5context.fill();
	color5context.fillStyle = thefill5;
	color5context.fillRect(0,0,color5canvas.width,color5canvas.height);
	color5context.fill();

	var color6canvas = document.getElementById('color6');
	var color6context = color6canvas.getContext("2d");
	var color6text = document.getElementById('color6text');
	color6text.innerHTML = thefill6;
	color6context.fillStyle = "rgba(255,255,255,1)";
	color6context.fillRect(0,0,color6canvas.width,color6canvas.height);
	color6context.fill();
	color6context.fillStyle = thefill6;
	color6context.fillRect(0,0,color6canvas.width,color6canvas.height);
	color6context.fill();

	var color7canvas = document.getElementById('color7');
	var color7context = color7canvas.getContext("2d");
	var color7text = document.getElementById('color7text');
	color7text.innerHTML = thefill7;
	color7context.fillStyle = "rgba(255,255,255,1)";
	color7context.fillRect(0,0,color7canvas.width,color7canvas.height);
	color7context.fill();
	color7context.fillStyle = thefill7;
	color7context.fillRect(0,0,color7canvas.width,color7canvas.height);
	color7context.fill();

	var color8canvas = document.getElementById('color8');
	var color8context = color8canvas.getContext("2d");
	var color8text = document.getElementById('color8text');
	color8text.innerHTML = thefill8;
	color8context.fillStyle = "rgba(255,255,255,1)";
	color8context.fillRect(0,0,color8canvas.width,color8canvas.height);
	color8context.fill();
	color8context.fillStyle = thefill8;
	color8context.fillRect(0,0,color8canvas.width,color8canvas.height);
	color8context.fill();

	var color9canvas = document.getElementById('color9');
	var color9context = color9canvas.getContext("2d");
	var color9text = document.getElementById('color9text');
	color9text.innerHTML = thefill9;
	color9context.fillStyle = "rgba(255,255,255,1)";
	color9context.fillRect(0,0,color9canvas.width,color9canvas.height);
	color9context.fill();
	color9context.fillStyle = thefill9;
	color9context.fillRect(0,0,color9canvas.width,color9canvas.height);
	color9context.fill();

	var color10canvas = document.getElementById('color10');
	var color10context = color10canvas.getContext("2d");
	var color10text = document.getElementById('color10text');
	color10text.innerHTML = thefill10;
	color10context.fillStyle = "rgba(255,255,0,1)";
	color10context.fillRect(0,0,color10canvas.width,color10canvas.height);
	color10context.fill();
	color10context.fillStyle = thefill10;
	color10context.fillRect(0,0,color10canvas.width,color10canvas.height);
	color10context.fill();

}

//functions to save colors when save button is clicked
function saveColor1() {
	window.thefill1 = thefill;
	updateColors();
	window.r1=r;
	window.g1=g;
	window.b1=b;
	window.o1=o;
}
function saveColor2() {
	window.thefill2 = thefill;
	updateColors();
	window.r2=r;
	window.g2=g;
	window.b2=b;
	window.o2=o;
}
function saveColor3() {
	window.thefill3 = thefill;
	updateColors();
	window.r3=r;
	window.g3=g;
	window.b3=b;
	window.o3=o;
}
function saveColor4() {
	window.thefill4 = thefill;
	updateColors();
	window.r4=r;
	window.g4=g;
	window.b4=b;
	window.o4=o;
}
function saveColor5() {
	window.thefill5 = thefill;
	updateColors();
	window.r5=r;
	window.g5=g;
	window.b5=b;
	window.o5=o;
}
function saveColor6() {
	window.thefill6 = thefill;
	updateColors();
	window.r6=r;
	window.g6=g;
	window.b6=b;
	window.o6=o;
}
function saveColor7() {
	window.thefill7 = thefill;
	updateColors();
	window.r7=r;
	window.g7=g;
	window.b7=b;
	window.o7=o;
}
function saveColor8() {
	window.thefill8 = thefill;
	updateColors();
	window.r8=r;
	window.g8=g;
	window.b8=b;
	window.o8=o;
}
function saveColor9() {
	window.thefill9 = thefill;
	updateColors();
	window.r9=r;
	window.g9=g;
	window.b9=b;
	window.o9=o;
}
function saveColor10() {
	window.thefill10 = thefill;
	updateColors();
	window.r10=r;
	window.g10=g;
	window.b10=b;
	window.o10=o;
}

//functions to set saved color to current color
function setColor1() {
	window.r=r1;
	window.g=g1;
	window.b=b1;
	window.o=o1;
	window.thefill = thefill1;
	circlePreview();
	updateSliders();
}
function setColor2() {
	window.r=r2;
	window.g=g2;
	window.b=b2;
	window.o=o2;
	window.thefill = thefill2;
	circlePreview();
	updateSliders();
}
function setColor3() {
	window.r=r3;
	window.g=g3;
	window.b=b3;
	window.o=o3;
	window.thefill = thefill3;
	circlePreview();
	updateSliders();
}
function setColor4() {
	window.r=r4;
	window.g=g4;
	window.b=b4;
	window.o=o4;
	window.thefill = thefill4;
	circlePreview();
	updateSliders();
}
function setColor5() {
	window.r=r5;
	window.g=g5;
	window.b=b5;
	window.o=o5;
	window.thefill = thefill5;
	circlePreview();
	updateSliders();
}
function setColor6() {
	window.r=r6;
	window.g=g6;
	window.b=b6;
	window.o=o6;
	window.thefill = thefill6;
	circlePreview();
	updateSliders();
}
function setColor7() {
	window.r=r7;
	window.g=g7;
	window.b=b7;
	window.o=o7;
	window.thefill = thefill7;
	circlePreview();
	updateSliders();
}
function setColor8() {
	window.r=r8;
	window.g=g8;
	window.b=b8;
	window.o=o8;
	window.thefill = thefill8;
	circlePreview();
	updateSliders();
}
function setColor9() {
	window.r=r9;
	window.g=g9;
	window.b=b9;
	window.o=o9;
	window.thefill = thefill9;
	circlePreview();
	updateSliders();
}
function setColor10() {
	window.r=r10;
	window.g=g10;
	window.b=b10;
	window.o=o10;
	window.thefill = thefill10;
	circlePreview();
	updateSliders();
}

//function to update sliders
function updateSliders() {
	document.getElementById('RedInput').value = r;
	document.getElementById("RedValue").innerHTML=r;
  document.getElementById('GreenInput').value = g;
	document.getElementById("GreenValue").innerHTML=g;
  document.getElementById('BlueInput').value = b;
	document.getElementById("BlueValue").innerHTML=b;
  document.getElementById('OpacityInput').value = (o*100);
	document.getElementById("OpacityValue").innerHTML=(o*100)+"%";
}

//function to display how the brush will look on screen
function circlePreview(){
	var previewcanvas = document.getElementById('brushPreview');
	var previewcontext = previewcanvas.getContext("2d");
	//fill with white again
	previewcontext.fillStyle="#FFF";
	previewcontext.fillRect(0,0,100,100);
	//then fill with color
	previewcontext.fillStyle = thefill;
	//if statements around which brush should be used
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

//function to show the brush shapes
function brushPreview(){
	var circlecanvas = document.getElementById('circleBrush');
	var circlecontext = circlecanvas.getContext("2d");
	var squarecanvas = document.getElementById('squareBrush');
	var squarecontext = squarecanvas.getContext("2d");
	var trianglecanvas = document.getElementById('triangleBrush');
	var trianglecontext = trianglecanvas.getContext("2d");
	circlecontext.arc(20, 20, 15, 0, 2 * Math.PI, false);
	circlecontext.fill();
	squarecontext.fillRect(5, 5, 30, 30);
	squarecontext.fill();
	trianglecontext.beginPath();
	trianglecontext.moveTo(20, 5);
	trianglecontext.lineTo(35, 35);
	trianglecontext.lineTo(0, 35);
	trianglecontext.lineTo(20, 5);
	trianglecontext.fill();
}



//functions that load automatically
window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    canvasApp();
	circlePreview();
	brushPreview();
	updateColors();
	drawScreen();
}
//function to blank out screen when new image is selected
function drawScreen() {
	var theCanvas = document.getElementById('painting_canvas');
	var context = theCanvas.getContext('2d');
	context.fillStyle = 'white';
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
}//main painting function
function canvasApp(){

	//defining canvases and adding event handlers
	var theCanvasIMG = document.getElementById('painting_canvas_img');
	var theCanvas = document.getElementById('painting_canvas');
	var context = theCanvas.getContext('2d');
	theCanvasIMG.addEventListener('click', drawBrush, false);
	theCanvasIMG.addEventListener('mousedown', mouse_pressed_down, false);
	theCanvasIMG.addEventListener('mousemove', mouse_moved, false);
	theCanvasIMG.addEventListener('mouseup', mouse_released, false);
	theCanvasIMG.addEventListener('touchstart', touch_move_gesture, false);
	theCanvasIMG.addEventListener('touchmove', touch_move_gesture, false);
	var color1canvas = document.getElementById('color1');
	color1canvas.addEventListener('click', setColor1, false);
	var color2canvas = document.getElementById('color2');
	color2canvas.addEventListener('click', setColor2, false);
	var color3canvas = document.getElementById('color3');
	color3canvas.addEventListener('click', setColor3, false);
	var color4canvas = document.getElementById('color4');
	color4canvas.addEventListener('click', setColor4, false);
	var color5canvas = document.getElementById('color5');
	color5canvas.addEventListener('click', setColor5, false);
	var color6canvas = document.getElementById('color6');
	color6canvas.addEventListener('click', setColor6, false);
	var color7canvas = document.getElementById('color7');
	color7canvas.addEventListener('click', setColor7, false);
	var color8canvas = document.getElementById('color8');
	color8canvas.addEventListener('click', setColor8, false);
	var color9canvas = document.getElementById('color9');
	color9canvas.addEventListener('click', setColor9, false);
	var color10canvas = document.getElementById('color10');
	color10canvas.addEventListener('click', setColor10, false);
  var circleBrush = document.getElementById('circleBrush');
	circleBrush.addEventListener('click', makeCircle, false);
  var squareBrush = document.getElementById('squareBrush');
	squareBrush.addEventListener('click', makeSquare, false);
  var triangleBrush = document.getElementById('triangleBrush');
	triangleBrush.addEventListener('click', makeTriangle, false);

//defining buttons and adding handlers
	var color1button = document.getElementById('saveColor1');
	color1button.addEventListener('click', saveColor1, false);
	var color2button = document.getElementById('saveColor2');
	color2button.addEventListener('click', saveColor2, false);
	var color3button = document.getElementById('saveColor3');
	color3button.addEventListener('click', saveColor3, false);
	var color4button = document.getElementById('saveColor4');
	color4button.addEventListener('click', saveColor4, false);
	var color5button = document.getElementById('saveColor5');
	color5button.addEventListener('click', saveColor5, false);
	var color6button = document.getElementById('saveColor6');
	color6button.addEventListener('click', saveColor6, false);
	var color7button = document.getElementById('saveColor7');
	color7button.addEventListener('click', saveColor7, false);
	var color8button = document.getElementById('saveColor8');
	color8button.addEventListener('click', saveColor8, false);
	var color9button = document.getElementById('saveColor9');
	color9button.addEventListener('click', saveColor9, false);
	var color10button = document.getElementById('saveColor10');
	color10button.addEventListener('click', saveColor10, false);
	var FillButton = document.getElementById('FillButton');
	FillButton.addEventListener('click', fillColor, false);

//defining sliders and setting handlers
	var RedInput = document.getElementById('RedInput');
	RedInput.addEventListener('change', RedChange, true);
	RedInput.addEventListener('click', RedChange, true);
	RedInput.addEventListener('touchstart', RedChange, true);
	RedInput.addEventListener('touchmove', RedChange, false);
	RedInput.addEventListener('mousedown', RedChange, false);
	RedInput.addEventListener('mousemove', RedChange, false);
	RedInput.addEventListener('mouseup', RedChange, false);
    var GreenInput = document.getElementById('GreenInput');
	GreenInput.addEventListener('change', GreenChange, true);
	GreenInput.addEventListener('click', GreenChange, true);
	GreenInput.addEventListener('touchstart', GreenChange, true);
	GreenInput.addEventListener('touchmove', GreenChange, false);
	GreenInput.addEventListener('mousedown', GreenChange, false);
	GreenInput.addEventListener('mousemove', GreenChange, false);
	GreenInput.addEventListener('mouseup', GreenChange, false);
    var BlueInput = document.getElementById('BlueInput');
	BlueInput.addEventListener('change', BlueChange, true);
	BlueInput.addEventListener('click', BlueChange, true);
	BlueInput.addEventListener('touchstart', BlueChange, true);
	BlueInput.addEventListener('touchmove', BlueChange, false);
	BlueInput.addEventListener('mousedown', BlueChange, false);
	BlueInput.addEventListener('mousemove', BlueChange, false);
	BlueInput.addEventListener('mouseup', BlueChange, false);
    var SizeInput = document.getElementById('SizeInput');
	SizeInput.addEventListener('change', SizeChange, true);
	SizeInput.addEventListener('click', SizeChange, true);
	SizeInput.addEventListener('touchstart', SizeChange, true);
	SizeInput.addEventListener('touchmove', SizeChange, false);
	SizeInput.addEventListener('mousedown', SizeChange, false);
	SizeInput.addEventListener('mousemove', SizeChange, false);
	SizeInput.addEventListener('mouseup', SizeChange, false);
    var OpacityInput = document.getElementById('OpacityInput');
	OpacityInput.addEventListener('change', OpacityChange, true);
	OpacityInput.addEventListener('click', OpacityChange, true);
	OpacityInput.addEventListener('touchstart', OpacityChange, true);
	OpacityInput.addEventListener('touchmove', OpacityChange, false);
	OpacityInput.addEventListener('mousedown', OpacityChange, false);
	OpacityInput.addEventListener('mousemove', OpacityChange, false);
	OpacityInput.addEventListener('mouseup', OpacityChange, false);

//function that fills entire screen with selected color
	function fillColor(){
		context.fillStyle = thefill;
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	}

//functions for brush previews
	function makeCircle(){
		window.setCircle = true;
		window.setSquare = false;
		window.setTriangle = false;
		window.setSpray = false;
		circlePreview();
		document.getElementById("BrushValue").innerHTML= 'Circle';
	}
	function makeSquare(){
		window.setCircle = false;
		window.setSquare = true;
		window.setTriangle = false;
		window.setSpray = false;
		circlePreview();
		document.getElementById("BrushValue").innerHTML= 'Square';
	}
	function makeTriangle(){
		window.setCircle = false;
		window.setSquare = false;
		window.setTriangle = true;
		window.setSpray = false;
		circlePreview();
		document.getElementById("BrushValue").innerHTML= 'Triangle';
	}

//color/size/opacity input functions
	function RedChange(ev){
		window.r = RedInput.value;
		circlePreview();
		document.getElementById("RedValue").innerHTML=r;
		window.thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	}
	function GreenChange(ev){
		window.g = GreenInput.value;
		circlePreview();
		document.getElementById("GreenValue").innerHTML=g;
		window.thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	}
	function BlueChange(ev){
		window.b = BlueInput.value;
		circlePreview();
		document.getElementById("BlueValue").innerHTML=b;
		window.thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	}
	function SizeChange(ev){
		window.w = SizeInput.value;
		circlePreview();
		document.getElementById("SizeValue").innerHTML=w+"px";
	}
	function OpacityChange(ev){
		window.o = OpacityInput.value/100;
		circlePreview();
		document.getElementById("OpacityValue").innerHTML=OpacityInput.value+"%";
		window.thefill = "rgba(" + r + "," + g + "," + b + "," + o + ")";
	}

//Mouse Functions
    var begin_drawing = false; //default is not drawing

    function mouse_pressed_down (ev) {
		begin_drawing = true;//drawing turned on when left mouse button down
    }
    function mouse_moved (ev) {
		// Get the mouse position in the canvas
		window.x = (ev.pageX-loffset);
		window.y = ev.pageY;
		if (begin_drawing) {
		drawBrush();
		}
    }
    function mouse_released (ev) {
		begin_drawing = false;
    }

//touch screen function
    function touch_move_gesture (ev) {
		// For touchscreen browsers/readers that support touchmove
		ev.preventDefault(); //override default UI behavior for better results on touchscreen devices
		var touch = ev.touches[0];
		window.x = (touch.pageX-loffset);
		window.y = touch.pageY;
		drawBrush();
	}

//Drawing function
	function drawBrush(){
		getCanvasOffset();
		context.fillStyle = thefill;
		if (setCircle) {  //if statements based on which brush used
			context.beginPath();
			context.arc(x, y, w/2, (Math.PI/180)*0, (Math.PI/180)*360, false);
			context.fill();
		}
		if (setSquare){
			context.beginPath();
			context.fillRect(x-w/2,y-w/2,w,w);
			context.fill();
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
}
