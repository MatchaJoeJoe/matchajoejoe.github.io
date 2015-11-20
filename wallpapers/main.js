var JoePosition = 'left';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var floatingStatus = "No";
var speed = 25;
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	addBlocker();
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var theMeasurement = Math.min(windowWidth, windowHeight);
	var theScale = 1;
	viewport = document.querySelector("meta[name=viewport]");
	if (theMeasurement<700){
		theScale = (theMeasurement/700);
		viewport.setAttribute('content', 'width=device-width, initial-scale='+theScale+', maximum-scale='+theScale+', user-scalable=0');
		document.body.style.fontSize = (20/theScale)+'px';
		document.body.style.lineHeight = (28/theScale)+'px';
	}
	var JoeBody = document.getElementById('JoeBody');
	var JoeTshirt = document.getElementById('JoeTshirt');
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	setTimeout(function() {
		theText = 'Hey there my most awesome of patrons!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			setTimeout(function() {
				theText = 'Thanks so much for donating at least $2 to my patreon site.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
					setTimeout(function() {
						theText = 'To the right you’ll find download links for some wallpapers from my recent series.';
						startTalking(theText);
						setTimeout(function() {
							stopTalking(theText);
							removeBlocker();
						}, 5000);
					}, 500);
				}, 2000);
			}, 500);
		}, 2000);
	}, 2000);
	
}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * high);
}
function addBlocker(){
	var JoecontainerDiv = document.getElementById('JoeContainer');
	var JoeblockerDiv = document.createElement("div");
	JoeblockerDiv.id = 'Joeblocker';
	JoecontainerDiv.appendChild(JoeblockerDiv);
	var containerDiv = document.getElementById('inside');
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
}
function removeBlocker(){
	var JoeblockerDiv = document.getElementById("Joeblocker");
	JoeblockerDiv.parentNode.removeChild(JoeblockerDiv);
	var blockerDiv = document.getElementById("blocker");
	blockerDiv.parentNode.removeChild(blockerDiv);
}
function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.blur();
	window.focus();
}
function startTalking(theText){
	var bubbleBox = document.getElementById('bubbleBox');
	bubbleBox.className = 'bubble'+window.JoePosition+' quickfadein';
	bubbleBox.innerHTML = theText;
	var JoeMouth = document.getElementById('JoeMouth');
	JoeMouth.className = '';
}
function stopTalking(theText){
	var JoeMouth = document.getElementById('JoeMouth');
		JoeMouth.className = 'hidden';
	var bubbleBox = document.getElementById('bubbleBox');
	bubbleBox.className = 'bubble'+window.JoePosition+' quickfadeout';
	setTimeout(function() {
		bubbleBox.className = 'bubble'+window.JoePosition+' hidden';
	}, 500);
}
function showAudio() {
	theText = 'Crank it up to 11!!!';
	startTalking(theText);
	setTimeout(function() {
		stopTalking(theText);
		var audioListDiv = document.getElementById('audioList');
		audioListDiv.className = "quickfadein";
	}, 2000);
}
function hideContent(theElement){
	var thisClass = theElement.className;
	theElement.className = 'quickfadeout';
	setTimeout(function() {
		theElement.className = 'hidden';
	}, 500);
}
