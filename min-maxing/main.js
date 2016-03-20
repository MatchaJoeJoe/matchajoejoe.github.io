var JoePosition = 'left';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var wootChoice = randomInteger(0, 7);
var balloonsPopped = 0;
var balloonNumber = 20;
var balloonReset = 0;
var floatingStatus = "No";
var speed = 25;
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	createBalloons();
	addBlocker();
	var balloonCount = document.getElementById('balloonCount');
	balloonCount.innerHTML = balloonsPopped;
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
				theText = 'Thanks so much for donating to my patreon site.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
					setTimeout(function() {
						theText = 'To the right you’ll find the credits list of all the patrons like you that have helped fund my projects.';
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
function wootCall(){
	addBlocker();
	var wootText = new Array();
	var wootDelay = randomInteger(3000, 7000);
	var newChoice = randomInteger(0, 8);
	while (newChoice === window.wootChoice) {
		newChoice = randomInteger(0, 8);
	}
	window.wootChoice = newChoice;
	wootText[0] = "Woo!!!";
	wootText[1] = "Oh yeah...";
	wootText[2] = "You rock!!!";
	wootText[3] = "Get down...";
	wootText[4] = "Celebrate!!!";
	wootText[5] = "Alright...";
	wootText[6] = "Thanks again!!!";
	wootText[7] = "This is my jam...";
	theText = wootText[window.wootChoice];
	startTalking(theText);
	setTimeout(function() {
		stopTalking(theText);
		setTimeout(function() {
			removeBlocker();
		}, 1000);
	}, 1000);
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
function popMe(theBalloon){
	addBlocker();
	theBalloon.className = 'popped';
	theBalloon.src = '../images/popped.png';
	setTimeout(function() {
		theBalloon.parentNode.removeChild(theBalloon);
		removeBlocker();
	}, 200);
	window.balloonsPopped = balloonsPopped + 1;
	var balloonCount = document.getElementById('balloonCount');
	balloonCount.innerHTML = balloonsPopped;
	if ((balloonsPopped-balloonReset) > (window.balloonNumber-1)){
		balloonCount.innerHTML = balloonsPopped +'<br/><br/><a onclick="createBalloons()">MOAR BALLOONS!!!</a>';
	}
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
}function createBalloons(){
	window.balloonReset = balloonsPopped;
	var balloonCount = document.getElementById('balloonCount');
	balloonCount.innerHTML = balloonsPopped;
	var balloonContainer = document.getElementById('balloonContainer');
	balloonContainer.innerHTML = "";
	if (speed >0){
		speed = speed -5;
	}
	var floatr = new Array();
	floatr[0] = "../images/balloon0.png";
	floatr[1] = "../images/balloon1.png";
	floatr[2] = "../images/balloon2.png";
	floatr[3] = "../images/balloon3.png";
	floatr[4] = "../images/balloon4.png";
	floatr[5] = "../images/balloon5.png";
	floatr[6] = "../images/balloon6.png";
	floatr[7] = "../images/balloon7.png";
	floatr[8] = "../images/balloon8.png";
	floatr[9] = "../images/balloon9.png";
	var ns4up = (document.layers) ? 1 : 0;  // browser sniffer
	var ie4up = (document.all) ? 1 : 0;
	var ns6up = (document.getElementById&&!document.all) ? 1 : 0;
	var dx, xp, yp;    // coordinate and position variables
	var am, stx, sty;  // amplitude and step variables
	var i, doc_width = 800, doc_height = 1800;
	if (ns4up||ns6up) {
			doc_width = self.innerWidth;
			doc_height = self.innerHeight;
	} else if (ie4up) {
			doc_width = document.body.clientWidth;
			doc_height = document.body.clientHeight;
	}
	dx = new Array();
	xp = new Array();
	yp = new Array();
	am = new Array();
	stx = new Array();
	sty = new Array();
	j = 0;
	for (i = 0; i < window.balloonNumber; ++ i) {
			dx[i] = 0;                        // set coordinate variables
			xp[i] = Math.random()*(doc_width-50);  // set position variables
			yp[i] = Math.random()*doc_height;
			am[i] = Math.random()*20;         // set amplitude variables
			stx[i] = 0.02 + Math.random()/10; // set step variables
			sty[i] = 0.7 + Math.random();     // set step variables
			var balloonDiv = document.createElement("div");
			balloonDiv.id = 'dot'+ i;
			balloonDiv.style.position = "absolute";
			balloonDiv.style.zIndex =  i+10;
			balloonDiv.style.top = "15px";
			balloonDiv.style.left = "15px";
			balloonDiv.style.width = "1";
			balloonDiv.innerHTML = "<img class=\"balloon\" onclick='popMe(this)' src=\"" + floatr[j] + "\" border=\"0\"></div>";
			balloonContainer.appendChild(balloonDiv);
			if (j == (floatr.length-1)) { j = 0; } else { j += 1; }
	}
	function floatrNS() {  // Netscape main animation function
			for (i = 0; i < window.balloonNumber; ++ i) {  // iterate for every dot
					yp[i] -= sty[i];                if (yp[i] < -50) {
							xp[i] = Math.random()*(doc_width-am[i]-30);
							yp[i] = doc_height;
							stx[i] = 0.02 + Math.random()/10;
							sty[i] = 0.7 + Math.random();
							doc_width = self.innerWidth;
							doc_height = self.innerHeight;                }
					dx[i] += stx[i];
					document.layers["dot"+i].top = yp[i]+pageYOffset;
					document.layers["dot"+i].left = xp[i] + 
	am[i]*Math.sin(dx[i]);
			}
		setTimeout(function() {
			floatrNS();
		}, speed);
	}
	function floatrIE_NS6() {  // IE main animation function
			for (i = 0; i < window.balloonNumber; ++ i) {  // iterate for every dot
					yp[i] -= sty[i];
					if (yp[i] < -50) {
							xp[i] = Math.random()*(doc_width-am[i]-30);
							yp[i] = doc_height;
							stx[i] = 0.02 + Math.random()/10;
							sty[i] = 0.7 + Math.random();
							doc_width = ns6up?window.innerWidth-5:document.body.clientWidth;
							doc_height = ns6up?window.innerHeight-5:document.body.clientHeight;
					}
					dx[i] += stx[i];
					if (ie4up){
					document.all["dot"+i].style.pixelTop = yp[i]+document.body.scrollTop;
					document.all["dot"+i].style.pixelLeft = xp[i] + am[i]*Math.sin(dx[i]);
					}
					else if (ns6up){
					document.getElementById("dot"+i).style.top=yp[i]+pageYOffset;
					document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i]);
					}
			}
		setTimeout(function() {
			floatrIE_NS6();
		}, speed);
	}
	if(window.floatingStatus == "No"){
		if (ns4up) {
				floatrNS();
		} else if (ie4up||ns6up) {
				floatrIE_NS6();
		}
		window.floatingStatus = "yes";
	}
}