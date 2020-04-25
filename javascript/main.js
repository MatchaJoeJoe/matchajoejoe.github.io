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
var shirtName = 'Joe8Bit_T'+randomInteger(0,5)+'.gif';

function checkHash(){
	var currentHref = window.location.href;
	var hash = "home"
	if(currentHref.indexOf("#") > 0){
		hash = currentHref.substr(currentHref.indexOf("#") + 1,currentHref.length);
	}
	return hash;
}

function eventWindowLoaded() {
	var	SongId = 'audio' + randomInteger(1,5);
  var startingSong = document.getElementById(SongId);
	changeMusic(startingSong);
	if (window.theLocation ==""){
		window.theLocation = "joesHouse";
	}
	var currentLocation = document.getElementById(window.theLocation);
	currentLocation.className='fadein';
	changeLeaves();
	changePaint();
	changeShirts();
	setTheTime();
	viewport = document.querySelector("meta[name=viewport]");
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var theMeasurement = Math.min(windowWidth, windowHeight);
	var JoeBody = document.getElementById('JoeBody');
	var JoeContainer = document.getElementById('JoeContainer');
	var JoeTshirt = document.getElementById('JoeTshirt');
 	JoeTshirt.className = 'hidden';
 	JoeBody.className = 'quickfadein';
 	JoeContainer.className = '';
 	var door = document.getElementById('doorOut');
 	if(window.theLocation ==="Outside"){
 		door = document.getElementById('doorIn');
 	}
 	// door.className = 'doorClose';
	var shirtName = 'Joe8Bit_T0.gif';
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
			JoeBody.className = "";
			JoeTshirt.className = '';
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
function changeMusic(theAudioLink){
	for (var i = 1; i < 6; i++) {
		var audioLink = document.getElementById('audio'+i);
		audioLink.className = '';
	}
	theAudioLink.className = 'glow';
	audioLinkID = theAudioLink.id;
	audioSrcID = audioLinkID.replace("audio", "audiosrc");
	audioSrcTag = document.getElementById(audioSrcID);
	musicPlayer = document.getElementById('musicPlayer');
	musicPlayer.innerHTML = audioSrcTag.innerHTML;
	musicPlayer.load();
	audioName = theAudioLink.innerHTML;
	currentTrackTag = document.getElementById("currentTrack");
	currentTrackTag.innerHTML = audioName;
	changeVolume(masterVolume);
}
function checkIfAudioIsPlaying(){
	var myMusicPlayer = document.getElementById('musicPlayer');
	var isPaused = myMusicPlayer.paused;
	var isMuted = myMusicPlayer.muted;
	var iMacTag = document.getElementById('iMac');
	if(isPaused || isMuted){
		iMacTag.src = 'images/iMac_off.gif'
	} else {
		iMacTag.src = 'images/iMac_on.gif'
	}
}
function changeVolume(volumeLevel){
	volumeLevel = volumeLevel/10;
	var musicPlayer = document.getElementById('musicPlayer');
	musicPlayer.volume = volumeLevel;
	window.masterVolume = volumeLevel*10;
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
			contentDiv.innerHTML = "";
			var audioListDiv = document.getElementById('audioContent');
			audioListDiv.className = "quickfadein";
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
	var newContents = targetDiv.innerHTML;
	contentDiv.className = "quickfadein";
	contentDiv.innerHTML = newContents;
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
	checkIfAudioIsPlaying();
}
function hideContent(){
	hideAudioContent();
	removeBlockers();
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
		contentDiv.className = 'quickfadeout';
	}
	setTimeout(function() {
		contentDiv.className = 'hidden';
		contentDiv.innerHTML = '';
	}, 500);
}
function hideAudioContent() {
	var audioListDiv = document.getElementById('audioContent');
	var audioClass = audioListDiv.className;
	if (audioClass !='hidden'){
		audioListDiv.className = 'quickfadeout';
	}
	setTimeout(function() {
		audioListDiv.className = 'hidden';
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
function gregStartTalking(theText){
	var gregsbubbleBox = document.getElementById('gregsbubbleBox');
	gregsbubbleBox.className = 'quickfadein';
	gregsbubbleBox.innerHTML = theText;
}
function gregStopTalking(theText){
	var gregsbubbleBox = document.getElementById('gregsbubbleBox');
	gregsbubbleBox.className = 'quickfadeout';
	setTimeout(function() {
		gregsbubbleBox.className = 'hidden';
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
