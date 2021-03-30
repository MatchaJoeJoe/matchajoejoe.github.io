window.addEventListener('load', eventWindowLoaded, false);

var JoePosition = 'left';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var theBrickColor = 'Maroon';
var theBrickColor2 = 'slategrey';
var theFenceColor = 'DarkOliveGreen';
var skyText = 'Yup, that’s the sky.';
var treeText = 'Yup, that’s a tree.';
var masterVolume = 1.5;
var theScale = 1;
var theDate = new Date();
var theLocation = "joesHouse";
var shirtName = 'Joe8Bit_T1.gif';
var displayedContent = document.getElementById('news');

function checkHash(){
	var currentHref = window.location.href;
	var hash = "home"
	if(currentHref.indexOf("#") > 0){
		hash = currentHref.substr(currentHref.indexOf("#") + 1,currentHref.length);
	}
	return hash;
}

function eventWindowLoaded() {
	if (window.theLocation ==""){
		window.theLocation = "joesHouse";
	}
	var currentLocation = document.getElementById(window.theLocation);
	currentLocation.className='fadein';
	changeLeaves();
	changePaint();
	setTheTime();
	viewport = document.querySelector("meta[name=viewport]");
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var theMeasurement = Math.min(windowWidth, windowHeight);
	var JoeContainer = document.getElementById('JoeContainer');
	var JoeTshirt = document.getElementById('JoeTshirt');
	JoeContainer.className = 'quickfadein';
	JoeTshirt.className = '';
 	var door = document.getElementById('doorOut');
 	if(window.theLocation ==="Outside"){
 		door = document.getElementById('doorIn');
 	}
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.className = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var theHash = checkHash();
	if(theHash == "home"){
		setTimeout(function() {
			var JoeEyes = document.getElementById('JoeEyes');
			theText = 'Hi, I’m Joe.';
			startTalking(theText);
			setTimeout(function() {
				stopTalking(theText);
				setTimeout(function() {
					theText = 'Welcome to my site.';
					startTalking(theText);
					setTimeout(function() {
						stopTalking(theText);
						setTimeout(function() {
							theText = 'Take a look around. If you click on something, I’ll tell you about it.';
							removeBlockers();
							startTalking(theText);
							setTimeout(function() {
								stopTalking(theText);
							}, 3000);
						}, 500);
					}, 2000);
				}, 500);
			}, 1400);
		}, 500);
	} else {
		loadContentFromHash(theHash);
	}
}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * high);
}
function loadContentFromHash(theHash){
	var hashElement = document.getElementById(theHash);
	setTimeout(function() {
		loadContent(hashElement);
	}, 500);
}

function loadContent(theCaller){
	var theText = "...";
	var callerID = theCaller.id;
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.className = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
	contentDiv.className = "quickfadeout";
		setTimeout(function() {
			contentDiv.className = "hidden";
		}, 500);
	}
	if (callerID.lastIndexOf("youTubeLogo")===0){
		theText = 'Lets watch some YouTube videos.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("youTube");
			changeVolume(0);
		}, 4000);
	}
	else if (callerID.lastIndexOf("twitchLogo")===0){
		theText = 'I wonder what’s streaming on Twitch?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("twitch");
			changeVolume(0);
		}, 2000);
	}
	else if (callerID.lastIndexOf("soundcloudLogo")===0){
		theText = 'Do you hear what I hear?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("soundcloud");
			changeVolume(0);
		}, 2000);
	}
	else if (callerID.lastIndexOf("phone")===0 || callerID.lastIndexOf("news")===0){
		theText = 'I get all my news from my phone, don’t you?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("news");
		}, 3000);
	}
	else if (callerID.lastIndexOf("legoart")===0 || callerID.lastIndexOf("shop")===0){
		theText = 'Do you like art? Why not buy some of mine?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("shop");
		}, 3000);
	}
	else if (callerID.lastIndexOf("cintiq")===0 || callerID.lastIndexOf("commissions")===0){
		 theText = 'I used to love drawing when I was a kid... Good thing I’m still a kid at heart!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("commissions");
		}, 3500);
	}
	else if (callerID.lastIndexOf("iMac")===0 || callerID.lastIndexOf("earphones")===0){
		theText = 'Music to soothe the savage beats.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			addBlockerEvent();
		}, 2000);
	}
/*Just for fun*/
	else if (callerID.lastIndexOf("foldingTable")===0){
		theText = 'Folding tables are the best.';
		saySomething(theText, 1000);
	}
	else if (callerID.lastIndexOf("table")===0){
		theText = 'That’s just a coffee table.';
		saySomething(theText, 1000);
	}
	else if (callerID.lastIndexOf("floor")===0){
		theText = 'Yup, that’s the floor.';
		saySomething(theText, 1000);
	}
	else if (callerID.lastIndexOf("wall")===0){
		changePaint();
 		theText = 'I really like how the paint came out. <br/>The color is ' + window.thePaintColor + '.';
		startTalking(theText);
		saySomething(theText, 2500);
	}
	else if (callerID.lastIndexOf("windowOut")===0){
		theText = window.skyText;
		saySomething(theText, 2500);
	}
	else if (callerID.lastIndexOf("leaves")===0){
		saySomething(window.treeText, 1500);
	}
	else {
		removeBlockers();
	}
}
function loadFromHidden(targetID){
	addBlockerEvent();
	var contentDiv = document.getElementById('content');
	var targetDiv = document.getElementById(targetID);
	contentDiv.className = "quickfadein";
	targetDiv.className = "quickfadein";
	window.displayedContent = targetDiv;
}
function addBlockerEvent(){
	var blockers = document.getElementsByClassName("blocker");
	for(var i=0; i < blockers.length; i++) {
		blockers[i].addEventListener("click", hideContent);
	}
}
function removeBlockers(){
	var blockers = document.getElementsByClassName("blocker");
	while(blockers[0]) {
		blockers[0].parentNode.removeChild(blockers[0]);
	}
}
function hideContent(){
	removeBlockers();
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
		contentDiv.className = 'quickfadeout';
	}
	setTimeout(function() {
		contentDiv.className = 'hidden';
		children = contentDiv.children;
		window.displayedContent.className = "hidden";
	}, 500);
}
function saySomething(theText, theDelay){
	startTalking(theText);
	setTimeout(function() {
		setTimeout(function() {
			removeBlockers();
		}, 500);
		stopTalking(theText);
	}, theDelay);
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
function changeShirts() {
	var JoeTshirt = document.getElementById('JoeTshirt');
	var shirtName = 'Joe8Bit_T'+randomInteger(0,5)+'.gif';
	while (shirtName == window.shirtName) {
		shirtName = 'Joe8Bit_T'+randomInteger(0,5)+'.gif';
	}
	window.shirtName = shirtName;
	JoeTshirt.src = 'images/'+shirtName;
}
function changeLeaves() {
	var theLeaves = document.getElementById('leaves');
	var theMonth = window.theDate.getMonth()+1;
	if (theMonth > 2 && theMonth < 6){
		theLeaves.src = 'images/leavesSpring.png'
	}
	if (theMonth > 5 && theMonth < 9){
		theLeaves.src = 'images/leavesSummer.png'
	}
	if (theMonth > 8 && theMonth < 12){
		theLeaves.src = 'images/leavesFall.png'
	}
	if (theMonth < 3 || theMonth > 11){
		theLeaves.src = ''
	}
}
function changePaint() {
	var joesHouseDiv = document.getElementById('joesHouse');
	var newColor = window.thePaintColor;
	while (newColor === window.thePaintColor) {
		var colorNumber = randomInteger(1,5);
		if(colorNumber === 1){
			newColor = 'DarkSlateGray';
		}
		if(colorNumber === 2){
			newColor = 'SteelBlue';
		}
		if(colorNumber === 3){
			newColor = 'DimGray';
		}
		if(colorNumber === 4){
			newColor = 'MidnightBlue';
		}
		if(colorNumber === 5){
			newColor = 'Navy';
		}
	}
	window.thePaintColor = newColor;
	joesHouseDiv.style.backgroundColor = window.thePaintColor;
}
function setTheTime(){
	var theTime = "";
	var theHours = window.theDate.getHours();
	var amPM = "";
	var windowFrame = document.getElementById('joesHouseWindowFrame');
	var leavesImg = document.getElementById('leaves');
	if(theHours > 5 && theHours < 18){
		window.theSkyColor = 'DeepSkyBlue';
		window.skyText = 'Those are lovely puffy clouds.';
		windowFrame.style.backgroundImage = "url('images/clouds.gif')";
		leavesImg.style.opacity = '1';
	}
	else{
		window.theSkyColor = 'Black';
		window.skyText = 'I love looking at the stars at night.';
		windowFrame.style.backgroundImage = "url('images/stars.gif')";
		leavesImg.style.opacity = '.5';
	}
	if(theHours>11){
		amPM = " pm";
		if (theHours > 12){
			theHours = theHours - 12;
		}
	}
	else {
		amPM = " am";
		if(theHours === 0){theHours= 12}
	}
	theTime = theHours + ":" + leftPad(window.theDate.getMinutes(),2)+amPM;
	windowFrame.style.backgroundColor = window.theSkyColor;
	return theTime;
}
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
