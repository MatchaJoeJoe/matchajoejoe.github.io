var w = 50;
var r = 127;
var g = 127;
var b = 127;
var thefill = "rgb(" + r + "," + g + "," + b + ")";
$(window).load(function(){
	$(document.getElementById('circles_canvas')).bind('touchstart',function(e){
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		var canvas = document.getElementById('circles_canvas');
		var thefill = "rgb(" + r + "," + g + "," + b + ")";
		var ctx = canvas.getContext("2d");
		var x = touch.clientX;
		var y = touch.clientY;
		ctx.beginPath();
		ctx.fillStyle = thefill;
		ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
		ctx.fill();
	});
	$(document.getElementById('circles_canvas')).bind('touchmove',function(e){
		var thefill = "rgb(" + r + "," + g + "," + b + ")";
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		var canvas = document.getElementById('circles_canvas');
		var ctx = canvas.getContext("2d");
		var x = touch.clientX;
		var y = touch.clientY;
		ctx.beginPath();
		ctx.fillStyle = thefill;
		ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
		ctx.fill();
	});
	$(document.getElementById('circles_canvas')).bind('touchend',function(e){
		var thefill = "rgb(" + r + "," + g + "," + b + ")";
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		var canvas = document.getElementById('circles_canvas');
		var ctx = canvas.getContext("2d");
		var x = touch.clientX;
		var y = touch.clientY;
		ctx.beginPath();
		ctx.fillStyle = thefill;
		ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
		ctx.fill();
	});
});
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
