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
var currentText = '';

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
	currentLocation.className='';
	changePaint();
	viewport = document.querySelector("meta[name=viewport]");
	var JoeContainer = document.getElementById('JoeContainer');
	var JoeTshirt = document.getElementById('JoeTshirt');
	JoeContainer.className = '';
	JoeTshirt.className = '';
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	addBlocker();
	var theHash = checkHash();
	if(theHash == "home"){
		theTextList = ['Hi, I’m Joe. Welcome to my site!','Take a look around. If you click on something, I’ll tell you about it.'];
		loopThroughText(theTextList, stopTalking);
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
function addBlocker(){
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.className = 'blocker';
	blockerDiv.addEventListener("click", stopTalking);
	containerDiv.appendChild(blockerDiv);
}
function loadContent(theCaller){
	var theText = "...";
	var callerID = theCaller.id;
	addBlocker();
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
	contentDiv.className = "quickfadeout pixelborder";
		setTimeout(function() {
			contentDiv.className = "hidden";
		}, 500);
	}
	if (callerID.lastIndexOf("youTubeLogo")===0){
		theText = 'Lets watch some YouTube videos.';
		loopThroughText([theText], function(){
			stopTalking();
			loadFromHidden("youTube");
		},"show youtube");
	}
	else if (callerID.lastIndexOf("twitchLogo")===0){
		theText = 'I wonder what’s streaming on Twitch?';
		loopThroughText([theText], function(){
			stopTalking();
			loadFromHidden("twitch");
		},"show twitch");
	}
	else if (callerID.lastIndexOf("legoart")===0 || callerID.lastIndexOf("portfolio")===0){
		theText = 'Anything can be art if you care enough...';
		loopThroughText([theText], function(){
			stopTalking();
			loadFromHidden("portfolio");
		},"show portfolio");
	}
	else if (callerID.lastIndexOf("cintiq")===0 || callerID.lastIndexOf("commissions")===0){
		theText = 'My art could be your art...';
		loopThroughText([theText], function(){
			stopTalking();
			loadFromHidden("commissions");
		},"show commissions");
	}
	else if (callerID.lastIndexOf("githubLogo")===0){
		theText = 'Lets code something...';
		loopThroughText([theText], function(){
			stopTalking();
			window.open('https://github.com/matchajoejoe', '_blank');
		},"open github");
	}
	else if (callerID.lastIndexOf("itchLogo")===0){
		theText = 'I have an itch for some indie games...';
		loopThroughText([theText], function(){
			stopTalking();
			window.open('https://matchajoejoe.itch.io', '_blank');
		},"open itch.io");
	}
	else if (callerID.lastIndexOf("discord")===0){
		theText = 'Come hang out and chat...';
		loopThroughText([theText], function(){
			stopTalking();
			window.open('https://discord.gg/qTzYGFFSWB', '_blank');
		},"open discord");
	}
	else if (callerID.lastIndexOf("kofiLogo")===0){
		theText = "A cat's gotta eat...";
		loopThroughText([theText], function(){
			stopTalking();
			window.open('https://ko-fi.com/matchajoejoe', '_blank');
		},"open ko-fi");
	}
/*Just for fun*/
	else if (callerID.lastIndexOf("wall")===0){
		changePaint();
 		theText = 'I really like how the paint came out. <br/>The color is ' + window.thePaintColor + '.';
		loopThroughText([theText], stopTalking);
	}
	else {
		removeBlockers();
	}
}
function loadFromHidden(targetID){
	addBlocker();
	addBlockerEvent();
	var contentDiv = document.getElementById('content');
	var targetDiv = document.getElementById(targetID);
	contentDiv.className = "quickfadein pixelborder";
	targetDiv.className = "quickfadein";
}
function addBlockerEvent(){
	var blockers = document.getElementsByClassName("blocker");
	for(var i=0; i < blockers.length; i++) {
		blockers[i].addEventListener("click", hideContent);
	}
}
function addStopTalkingEvent(){
	var blockers = document.getElementsByClassName("blocker");
	for(var i=0; i < blockers.length; i++) {
		blockers[i].addEventListener("click", stopTalking);
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
		contentDiv.className = 'quickfadeout pixelborder';
	}
	setTimeout(function() {
		contentDiv.className = 'hidden';
		for (let i = 0; i < contentDiv.children.length; i++) {
			contentDiv.children[i].className = "hidden";
		}
	}, 500);
}
function loopThroughText(theTextList, finalFunction, finalText = "close"){
		bubbleBox = startTalking(theTextList[0]);
		nextButton = document.createElement("a");
		nextButton.className = "textbutton";
		if(theTextList.length > 1){
			nextButton.innerHTML = "next";
			nextButton.addEventListener("click", function(){
				loopThroughText(theTextList.slice(1),finalFunction);
			});
		} else {
			nextButton.innerHTML = finalText;
			nextButton.addEventListener("click", finalFunction);
		}
		bubbleBox.appendChild(nextButton);
}
function startTalking(theText){
	var bubbleBox = document.getElementById('bubbleBox');
	bubbleBox.className = 'bubble'+window.JoePosition+' pixelborder quickfadein';
	bubbleBox.innerHTML = theText;
	var JoeMouth = document.getElementById('JoeMouth');
	JoeMouth.className = '';
	addStopTalkingEvent();
	return bubbleBox;
}
function stopTalking(){
	removeBlockers();
	var JoeMouth = document.getElementById('JoeMouth');
	JoeMouth.className = 'hidden';
	var bubbleBox = document.getElementById('bubbleBox');
	if(!bubbleBox.className.includes('hidden')){
		bubbleBox.className = 'bubble'+window.JoePosition+' pixelborder quickfadeout';
		setTimeout(function() {
			bubbleBox.className = 'bubble'+window.JoePosition+' hidden';
		}, 500);
	}
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
		theLeaves.src = 'images/leavesFall.png'
		theLeaves.className = 'tree hidden'
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
