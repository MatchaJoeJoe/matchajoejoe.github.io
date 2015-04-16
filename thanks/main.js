var JoePosition = 'left';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var wootChoice = randomInteger(0, 7);
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
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
 	JoeTshirt.className = 'hidden';
 	JoeBody.className = 'walkIn';
	var shirtName = 'Joe8Bit_T0.gif';
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	var containerDiv = document.getElementById('inside');
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	setTimeout(function() {
		loadTwitter();
	}, 1000);
	setTimeout(function() {
		theText = 'Hey there my most awesome of patrons!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			setTimeout(function() {
				theText = 'Thanks so much for donating to my patreon site.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
					setTimeout(function() {
						theText = 'To the right you’ll find the credits list of all the patrons like you that have helped fund my projects.';
						startTalking(theText);
						setTimeout(function() {
							stopTalking(theText);
							blockerDiv.parentNode.removeChild(blockerDiv);
							wootCall ();
						}, 5000);
					}, 500);
				}, 2000);
			}, 500);
		}, 2000);
	}, 2000);
	
}
function wootCall(){
	var wootText = new Array();
	var wootDelay = randomInteger(3000, 7000);
	var newChoice = randomInteger(0, 7);
	while (newChoice === window.wootChoice) {
		var newChoice = randomInteger(0, 7);
	}
	window.wootChoice = newChoice;
	wootText[0] = "Woo!"
	wootText[1] = "Oh yeah..."
	wootText[2] = "That's it..."
	wootText[3] = "Get down!"
	wootText[4] = "Party on..."
	wootText[5] = "Celebrate!"
	wootText[6] = "Thanks again!!!"
	wootText[7] = "This is my jam..."
    setTimeout(function(){
		theText = wootText[window.wootChoice];
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			wootCall ();
		}, 1000);
   },wootDelay);
}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * high);
}
function removeBlocker(){
	var blockerDiv = document.getElementById("blocker");
	blockerDiv.parentNode.removeChild(blockerDiv);
}
function hideContent(){
	removeBlocker();
	var audioListDiv = document.getElementById('audioList');
	var audioClass = audioListDiv.className;
	if (audioClass !='greyBox hidden'){
		audioListDiv.className = 'greyBox quickfadeout';
	}
	var twitterwrapper = document.getElementById('twitterwrapper');
	var twitterClass = twitterwrapper.className;
	if (twitterClass !='hidden'){
		twitterwrapper.className = 'quickfadeout';
	}
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
		contentDiv.className = 'quickfadeout';
	}
	setTimeout(function() {
		audioListDiv.className = 'greyBox hidden';
		twitterwrapper.className = 'hidden';
		contentDiv.className = 'hidden';
		contentDiv.innerHTML = '';
	}, 500);
}
function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.blur();
	window.focus();
}
function loadTwitter(){
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
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

