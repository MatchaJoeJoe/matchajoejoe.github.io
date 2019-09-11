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
var theUser = getCookie("joefrizzellUsername");
var theLocation = getCookie("joefrizzellLocation");
if (theLocation ==""){
	theLocation = "joesHouse";
	createCookie('joefrizzellLocation',theLocation,30);
}
function createCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function eraseCookie(name) {
    createCookie(name,"",-1);
}
function eraseAllCookies(){
	var theCookieButton = document.getElementById('cookieButton');
	eraseCookie("joefrizzellUsername");
	eraseCookie("joefrizzellLocation");
	updateDisclaimer();
	theCookieButton.innerHTML = "Cookies Deleted &#x1F622";
	theCookieButton.className = '';
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {c = c.substring(1);}
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function updateDisclaimer(){
	var theUser = getCookie("joefrizzellUsername");
	var theLocation = getCookie("joefrizzellLocation");
	var theUserText = document.getElementById('theUserText');
	var theLocationText = document.getElementById('theLocationText');
	if (theUser == '') {
		theUser = 'Missing';
	}
	if (theLocation == '') {
		theLocation = 'Missing';
	}
	theUserText.innerHTML = theUser;
	theLocationText.innerHTML = theLocation;
}
function eventWindowLoaded() {
	document.getElementById('LoadingBackground').className='';
	var loadingContainer = document.getElementById('LoadingContainer');
	loadingContainer.innerHTML= '';
	var newButton = document.createElement('button');
	newButton.id = "playGame";
	newButton.className = 'glow';
	newButton.innerHTML = 'Play Game';
	loadingContainer.appendChild(newButton);
	newButton.addEventListener('click', startGame, false);
}
function startGame() {
	updateDisclaimer();
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
	changeBricks();
	changeBricks2();
	changeFence();
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
 	door.className = 'doorClose';
	var shirtName = 'Joe8Bit_T0.gif';
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.className = 'blocker';
	containerDiv.appendChild(blockerDiv);
	setTimeout(function() {
	 	if(window.theLocation === "Outside"){
 			document.getElementById('earphones').className = 'quickfadein';
 		}
		var JoeEyes = document.getElementById('JoeEyes');
		JoeBody.className = "";
		JoeTshirt.className = '';
		if (window.theUser !== "") {
				theText = 'Hey '+window.theUser+'.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
					setTimeout(function() {
						theText = 'Welcome back.';
						startTalking(theText);
						setTimeout(function() {
							stopTalking(theText);
							setTimeout(function() {
								removeBlockers();
							}, 500);
						}, 1500);
					}, 500);
				}, 1500);
		}
		else {
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
							theText = 'What’s your name?<br/><input aria-label="name input" autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {createCookie(\'joefrizzellUsername\', \' \' + this.value, 30);continueGame();updateDisclaimer();};"/>';
							startTalking(theText);
							setTimeout(function() {
								document.getElementById('JoeMouth').className = 'hidden';
							}, 1400);
							removeBlockers();
						}, 500);
					}, 2000);
				}, 500);
			}, 1400);
		}
	}, 500);
}
function continueGame(){
	window.theUser = getCookie("joefrizzellUsername");
	theText = 'What’s your name?<br/>' + window.theUser;
	stopTalking(theText);
	setTimeout(function() {
		theText = 'Nice to meet you.';
		if (window.theUser != ''){
			theText = 'Nice to meet you '+ window.theUser + '.';
		}
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			setTimeout(function() {
				theText = 'Take a look around. If you click on something, I’ll tell you about it.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
				}, 3000);
			}, 500);
		}, 2000);
	}, 500);
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
	musicPlayer.play();
	audioName = theAudioLink.innerHTML;
	currentTrackTag = document.getElementById("currentTrack");
	currentTrackTag.innerHTML = audioName;
	changeVolume(masterVolume);
}
function changeVolume(volumeLevel){
	var myMusicPlayer = document.getElementById('musicPlayer');
	var isPaused = myMusicPlayer.paused;
	var isMuted = myMusicPlayer.muted;
	volumeLevel = volumeLevel/10;
	var musicPlayer = document.getElementById('musicPlayer');
	musicPlayer.volume = volumeLevel;
	window.masterVolume = volumeLevel*10;
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
	else if (callerID.lastIndexOf("phone")===0){
		theText = 'I get all my news from my phone, don’t you?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("newswrapper");
		}, 3000);
	}
	else if (callerID.lastIndexOf("cookies")===0){
		theText = 'Mmmmm... Cookies...';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("disclaimer");
		}, 1500);
	}
	else if (callerID.lastIndexOf("legoart")===0){
		theText = 'Do you like art? I like t-shirts.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("shop");
		}, 3000);
	}
	else if (callerID.lastIndexOf("cintiq")===0){
		 theText = 'I used to love coloring when I was a kid... Good thing I’m still a kid at heart!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			loadFromHidden("coloring");
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
	/*Changing Areas*/
	else if (callerID.lastIndexOf("doorOut")===0){
		setTheTime();
		var joesHouseDiv = document.getElementById('joesHouse');
		var OutsideDiv = document.getElementById('Outside');
		var theDoorOut = document.getElementById('doorOut');
		var theDoorIn = document.getElementById('doorIn');
		var JoeContainer = document.getElementById('JoeContainer');
		var JoeEyes = document.getElementById('JoeEyes');
		var JoeBody = document.getElementById('JoeBody');
		var JoeTshirt = document.getElementById('JoeTshirt');
		var earphones = document.getElementById('earphones');
		theText = 'Let’s see what’s happening outside...';
		startTalking(theText);
		setTimeout(function() {
			theDoorOut.className = 'doorOpen';
			theDoorIn.className = 'doorOpen';
			setTimeout(function() {
				JoeContainer.className = window.JoePosition + ' fadeout';
				window.JoePosition = 'left'
				stopTalking(theText);
				setTimeout(function() {
					theDoorOut.className = 'doorClose';
					theDoorIn.className = 'doorClose';
					JoeContainer.className = window.JoePosition;
					JoeContainer.className = window.JoePosition + ' quickfadein';
					joesHouseDiv.className = 'fadeout';
					OutsideDiv.className = 'fadein';
					window.theLocation = 'Outside';
				  createCookie('joefrizzellLocation','Outside',30);
					earphones.className = 'quickfadein';
					setTimeout(function() {
						JoeBody.className = '';
						joesHouseDiv.className = 'hidden';
						removeBlockers();
					}, 500);
				}, 500);
			}, 500);
		}, 500);
	}
	else if (callerID.lastIndexOf("doorIn")===0){
		setTheTime();
		var joesHouseDiv = document.getElementById('joesHouse');
		var OutsideDiv = document.getElementById('Outside');
		var theDoorOut = document.getElementById('doorOut');
		var theDoorIn = document.getElementById('doorIn');
		var JoeContainer = document.getElementById('JoeContainer');
		var JoeEyes = document.getElementById('JoeEyes');
		var JoeBody = document.getElementById('JoeBody');
		var JoeTshirt = document.getElementById('JoeTshirt');
		var earphones = document.getElementById('earphones');
		theText = 'Let’s go back to my place...';
		startTalking(theText);
		setTimeout(function() {
			theDoorOut.className = 'doorOpen';
			theDoorIn.className = 'doorOpen';
			setTimeout(function() {
				JoeContainer.className = window.JoePosition +' fadeout';
				window.JoePosition = 'left'
				stopTalking(theText);
				setTimeout(function() {
					JoeContainer.appendChild(JoeTshirt);
					theDoorOut.className = 'doorClose';
					theDoorIn.className = 'doorClose';
					JoeEyes.className = 'hidden';
					JoeContainer.className = window.JoePosition;
					JoeContainer.className = window.JoePosition +' quickfadein';
					OutsideDiv.className = 'fadeout';
					joesHouseDiv.className = 'fadein';
					window.theLocation = 'joesHouse';
				  createCookie('joefrizzellLocation','joesHouse',30);
					earphones.className = 'hidden';
					setTimeout(function() {
						JoeBody.className = '';
						OutsideDiv.className = 'hidden';
						removeBlockers();
						JoeEyes.className = '';
						JoeTshirt.className = '';
					}, 2000);
				}, 500);
			}, 500);
		}, 500);
	}
/*Just for fun*/
	else if (callerID.lastIndexOf("greg")===0){
		theText = 'ACK!!! It’s a giant werewolf...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				theText = 'I forget to shave one time and everyone has jokes...';
				gregStartTalking(theText);
				setTimeout(function() {
					gregStopTalking(theText);
					setTimeout(function() {
						removeBlockers();
						loadFromHidden("gregsTwitch");
						changeVolume(0);
					}, 500);
				}, 2500);
			}, 500);
			stopTalking(theText);
		}, 1500);
	}
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
	else if (callerID=="building"){
		changeBricks();
 		theText = 'That building is made of '+window.theBrickColor+' bricks.';
		saySomething(theText, 2500);
	}
	else if (callerID.lastIndexOf("building2")===0){
		changeBricks2();
 		theText = 'My bilding is made of '+window.theBrickColor2+' bricks.';
		saySomething(theText, 2500);
	}
	else if (callerID=="fence"){
		changeFence();
 		theText = 'That fence is '+window.theFenceColor+'...';
		saySomething(theText, 2500);
	}
	else if (callerID.lastIndexOf("clock")===0){
		var theTime = setTheTime();
		theText = 'It is '+theTime+'.';
		saySomething(theText, 2000);
	}
	else if (callerID.lastIndexOf("sky")===0){
		theText = window.skyText;
		saySomething(theText, 2500);
	}
	else if (callerID.lastIndexOf("grass")===0){
		theText = 'Yup, that’s grass.';
		saySomething(theText, 1000);
	}
	else if (callerID.lastIndexOf("sidewalk")===0){
		theText = 'Yup, that’s the sidewalk...';
		saySomething(theText, 2000);
	}
	else if (callerID.lastIndexOf("windows")===0){
		theText = 'Peepin’ peeps peepin’ peeps on the streets...';
		saySomething(theText, 2000);
	}
	else if (callerID.lastIndexOf("joesSign")===0){
		theText = 'Hey I can see my house from here...';
		saySomething(theText, 1500);
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
	JoeTshirt.src = 'images/'+shirtName;
}
function changeLeaves() {
	var theMonth = window.theDate.getMonth()+1;
	var theLeaves = document.getElementById('leaves');
	if (theMonth > 2 && theMonth < 6){
		theLeaves.src = 'images/leavesSpring.png'
		window.treeText= "I’d say that I had spring fever, but it’s probably just allergies."
	}
	if (theMonth > 5 && theMonth < 9){
		theLeaves.src = 'images/leavesSummer.png'
		window.treeText= "Summertime, and the living is easy."
	}
	if (theMonth > 8 && theMonth < 12){
		theLeaves.src = 'images/leavesFall.png'
		window.treeText= "Autumn, why does it seem so inviting?"
	}
	if (theMonth < 3 || theMonth > 11){
		theLeaves.src = ''
		window.treeText= "Walking in a winter wonderland."
	}
}
function changePaint() {
	var joesHouseDiv = document.getElementById('joesHouse');
	var OutsideDoorFrame = document.getElementById('OutsideDoorFrame');
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
	OutsideDoorFrame.style.backgroundColor = window.thePaintColor;
}
function changeBricks() {
	var buildingDiv = document.getElementById('building');
	var newColor = window.theBrickColor;
	while (newColor === window.theBrickColor) {
		var colorNumber = randomInteger(1,3);
		if(colorNumber === 1){
			newColor = 'maroon';
		}
		if(colorNumber === 2){
			newColor = 'sienna';
		}
		if(colorNumber === 3){
			newColor = 'slategray';
		}
	}
	window.theBrickColor = newColor;
	buildingDiv.style.backgroundColor = window.theBrickColor;
}
function changeBricks2() {
	var building2Div = document.getElementById('building2');
	var newColor = window.theBrickColor2;
	while (newColor === window.theBrickColor2) {
		var colorNumber = randomInteger(1,3);
		if(colorNumber === 1){
			newColor = 'maroon';
		}
		if(colorNumber === 2){
			newColor = 'sienna';
		}
		if(colorNumber === 3){
			newColor = 'slategray';
		}
	}
	window.theBrickColor2 = newColor;
	building2Div.style.backgroundColor = window.theBrickColor2;
}
function changeFence() {
	var fenceDiv = document.getElementById('fence');
	var newColor = window.theFenceColor;
	while (newColor === window.theFenceColor) {
		var colorNumber = randomInteger(1,3);
		if(colorNumber === 1){
			newColor = 'DarkOliveGreen';
		}
		if(colorNumber === 2){
			newColor = 'Beige';
		}
		if(colorNumber === 3){
			newColor = 'DodgerBlue';
		}
	}
	window.theFenceColor = newColor;
	fenceDiv.style.backgroundColor = window.theFenceColor;
}
function setTheTime(){
	var theTime = "";
	var theHours = window.theDate.getHours();
	var amPM = "";
	var OutsideDiv = document.getElementById('Outside');
	var joesHouseDoorFrame = document.getElementById('joesHouseDoorFrame');
	if(theHours > 5 && theHours < 18){
		window.theSkyColor = 'DeepSkyBlue';
		window.skyText = 'Those are lovely puffy clouds.';
		OutsideDiv.style.backgroundImage = "url('images/clouds.gif')";
		joesHouseDoorFrame.style.backgroundImage = "url('images/clouds.gif')";
	}
	else{
		window.theSkyColor = 'Black';
		window.skyText = 'I love looking at the stars at night.';
		OutsideDiv.style.backgroundImage = "url('images/stars.gif')";
		joesHouseDoorFrame.style.backgroundImage = "url('images/stars.gif')";
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
	OutsideDiv.style.backgroundColor = window.theSkyColor;
	joesHouseDoorFrame.style.backgroundColor = window.theSkyColor;
	return theTime;
}
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
