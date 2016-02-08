window.addEventListener('load', eventWindowLoaded, false);	

var JoePosition = 'left';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var theBrickColor = 'Maroon';
var theBrickColor2 = 'slategrey';
var theFenceColor = 'DarkOliveGreen';
var skyText = 'Yup, that’s the sky.';
var masterVolume = 1.5;
var theScale = 1;
var theDate = new Date();
var theMonth = theDate.getMonth();
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

function eventWindowLoaded() {
	document.getElementById('LoadingBackground').className='';
	var loadingContainer = document.getElementById('LoadingContainer');
	loadingContainer.innerHTML= '';
	var newButton = document.createElement('p');
	newButton.id = "newButton";
	newButton.className = 'options';
	newButton.innerHTML = 'New Game';
	loadingContainer.appendChild(newButton);
	newButton.addEventListener('click', newGame, false);	
	if (window.theUser !== ""){
		var continueButton = document.createElement('p');
		continueButton.id = "continueButton";
		continueButton.className = 'options';
		continueButton.innerHTML = 'Continue Game';
		loadingContainer.appendChild(continueButton);
		continueButton.addEventListener('click', startGame, false);
	}
	var optionsButton = document.createElement('p');
	optionsButton.id = "optionsButton";
	optionsButton.className = 'options';
	optionsButton.innerHTML = 'Options';
	loadingContainer.appendChild(optionsButton);
	optionsButton.addEventListener('click', openOptions, false);	
	var disclaimerButton = document.createElement('p');
	disclaimerButton.id = "disclaimerText";
	disclaimerButton.className = 'options';
	disclaimerButton.innerHTML = 'About Cookies';
	loadingContainer.appendChild(disclaimerButton);
	disclaimerButton.addEventListener('click', displayDisclaimer, false);	
}
function openOptions(){
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var audioListDiv = document.getElementById('audioList');
	audioListDiv.className = "greyBox quickfadein";
	var contentDiv = document.getElementById('content');
	contentDiv.className = "quickfadein";
}
function displayDisclaimer(){
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var contentDiv = document.getElementById('content');
	var linksDiv = document.getElementById('disclaimer');
	var linksContents = linksDiv.innerHTML;
	contentDiv.className = "quickfadein";
	contentDiv.innerHTML = '<div class="greyBox">'+linksContents+'</div>';
}
function newGame(){
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++){
		if(cookies[i].indexOf('joefrizzell')===0){
			eraseCookie(cookies[i].split("=")[0]);
		}
	}
	startGame();
}
function startGame() {
	var	SongId = 'audio'+randomInteger(1,5);
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
 	JoeBody.className = 'walkIn';
 	JoeContainer.className = '';
 	var door = document.getElementById('doorOut');
 	if(window.theLocation ==="Brooklyn"){
 		door = document.getElementById('doorIn');
 	}
 	door.className = 'doorClose';
	var shirtName = 'Joe8Bit_T0.gif';
	var LoadingBackground = document.getElementById('LoadingBackground');
	LoadingBackground.className = 'hidden';
	var containerDiv = document.getElementById(window.theLocation);
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	setTimeout(function() {
		loadTwitter();
	}, 1000);
	setTimeout(function() {
	 	if(window.theLocation === "Brooklyn"){
 			document.getElementById('earphones').className = 'quickfadein';
 		}
		var JoeEyes = document.getElementById('JoeEyes');
		JoeEyes.className = "";
		JoeBody.className = "";
		JoeBody.src = "images/Joe8Bit.gif";
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
								blockerDiv.parentNode.removeChild(blockerDiv);
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
							theText = 'What’s your name?<br/><input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {createCookie(\'joefrizzellUsername\', this.value, 30);continueGame();};"/>';
							startTalking(theText);
							setTimeout(function() {
								document.getElementById('JoeMouth').className = 'hidden';
							}, 1400);
							blockerDiv.parentNode.removeChild(blockerDiv);
						}, 500);
					}, 2000);
				}, 500);
			}, 1400);
		}	
	}, 2000);
}
function continueGame(){
	theText = 'What’s your name?<br/>'+window.theUser;
	stopTalking(theText);
	setTimeout(function() {
		theText = 'Nice to meet you'+window.theUser+'.';
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
	var songName = theAudioLink.innerHTML;
	var backgroundMusic = document.getElementById('backgroundMusic');
	backgroundMusic.innerHTML = '<audio id="musicPlayer" loop controls><source src="audio/'+songName+'.mp3" type="audio/mpeg"><source src="audio/'+songName+'.ogg" type="audio/ogg">Sorry, you don’t get to listen to these awesome 8-bit jams because your browser is crap. Try using Chrome.</audio>';
	var musicPlayer = document.getElementById('musicPlayer');
	musicPlayer.play();
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
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var contentDiv = document.getElementById('content');
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
	contentDiv.className = "quickfadeout";
		setTimeout(function() {
			contentDiv.className = "hidden";
		}, 500);
	}
	if (callerID.lastIndexOf("chair")===0){
		theText = 'There is nothing better than curling up in a comfy chair and watching YouTube videos.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var youTubeDiv = document.getElementById('youTube');
			var youTubeContents = youTubeDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = youTubeContents;
		}, 4000);
	}
	if (callerID.lastIndexOf("laptop")===0){
		theText = 'Internet, why do you have all the things?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('links');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<div class="greyBox">'+linksContents+'</div>';
		}, 2000);
	}
	if (callerID.lastIndexOf("camera")===0){
		theText = 'Do you see what I see?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('instawrapper');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = linksContents;
		}, 1500);
	}
	if (callerID.lastIndexOf("dumbbells")===0){
		theText = 'Time to do some leveling...';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('minmaxing');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = linksContents;
		}, 1500);
	}
	if (callerID.lastIndexOf("bookshelf")===0){
		theText = 'Save some trees, buy eBooks... especially the ones I’ve designed.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('books');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<div class="greyBox">'+linksContents+'</div>';
		}, 2500);
	}
	if (callerID.lastIndexOf("phone")===0){
		theText = 'Isn’t it great that we are always connected with anyone we’ve ever met?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			contentDiv.className = "quickfadein";
			var twitterwrapper = document.getElementById('twitterwrapper');
			twitterwrapper.className = "quickfadein";
		}, 3000);
	}
	if (callerID.lastIndexOf("art")===0){
		theText = 'Do you like art? I like t-shirts.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('shop');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = linksContents;
		}, 3000);
	}
	if (callerID.lastIndexOf("foldingTable")===0){
		 theText = 'I used to love coloring when I was a kid... Good thing I’m still a kid at heart!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('coloring');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = linksContents;
		}, 3500);
	}
	if (callerID.lastIndexOf("raven")===0){
		setTimeout(function() {
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="raven-colors/index.html"/>';
		}, 500);
	}
	if (callerID.lastIndexOf("diploma")===0){
		theText = 'I am so smart. I am so smart. S-M-R-T.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<img id="resume" onclick="OpenInNewTab(\'http://joefrizzell.com/Frizzell-Joe_resume.pdf\')" src="images/Frizzell-Joe_resume.jpg" alt="Frizzell-Joe_resume" />';
		}, 2000);
	}
	if (callerID.lastIndexOf("iMac")===0){
		theText = 'Music to soothe the savage beats.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var audioListDiv = document.getElementById('audioList');
			audioListDiv.className = "greyBox quickfadein";
			contentDiv.className = "quickfadein";
		}, 2000);
	}
	if (callerID.lastIndexOf("earphones")===0){
		theText = 'Music to soothe the savage beats.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var audioListDiv = document.getElementById('audioList');
			audioListDiv.className = "greyBox quickfadein";
			contentDiv.className = "quickfadein";
		}, 2000);
	}
/*Changing Areas*/
	if (callerID.lastIndexOf("doorOut")===0){
		setTheTime();
		var joesHouseDiv = document.getElementById('joesHouse');
		var BrooklynDiv = document.getElementById('Brooklyn');
		var theDoorOut = document.getElementById('doorOut');
		var theDoorIn = document.getElementById('doorIn');
		var JoeContainer = document.getElementById('JoeContainer');
		var JoeEyes = document.getElementById('JoeEyes');
		var JoeBody = document.getElementById('JoeBody');
		var JoeTshirt = document.getElementById('JoeTshirt');
		var earphones = document.getElementById('earphones');
		theText = 'Let’s see what’s happening in Brooklyn...';
		startTalking(theText);
		setTimeout(function() {
			theDoorOut.className = 'doorOpen';
			theDoorIn.className = 'doorOpen';
			setTimeout(function() {
				JoeContainer.className = window.JoePosition +' fadeout';
				window.JoePosition = 'left'
				stopTalking(theText);
				setTimeout(function() {
					theDoorOut.className = 'doorClose';
					theDoorIn.className = 'doorClose';
					JoeEyes.className = 'hidden';
					JoeContainer.className = window.JoePosition;
					JoeContainer.className = window.JoePosition +' quickfadein';
					JoeTshirt.className = 'hidden';
					JoeBody.className = 'walkIn';
					JoeBody.src = "images/Joe8Bit_walking.gif";
					joesHouseDiv.className = 'fadeout';
					BrooklynDiv.className = 'fadein';
					window.theLocation = 'Brooklyn';
				    createCookie('joefrizzellLocation','Brooklyn',30);
					setTimeout(function() {
						JoeBody.className = '';
						joesHouseDiv.className = 'hidden';
						removeBlocker();
						JoeEyes.className = '';
						JoeTshirt.className = '';
						earphones.className = 'quickfadein';
						JoeBody.src = "images/Joe8Bit.gif";
					}, 2000);			
				}, 500);
			}, 500);
		}, 500);
	}
	if (callerID.lastIndexOf("doorIn")===0){
		setTheTime();
		var joesHouseDiv = document.getElementById('joesHouse');
		var BrooklynDiv = document.getElementById('Brooklyn');
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
					JoeTshirt.className = 'hidden';
					earphones.className = 'hidden';
					JoeBody.className = 'walkIn';
					JoeBody.src = "images/Joe8Bit_walking.gif";
					BrooklynDiv.className = 'fadeout';
					joesHouseDiv.className = 'fadein';
					window.theLocation = 'joesHouse';
				    createCookie('joefrizzellLocation','joesHouse',30);
					setTimeout(function() {
						JoeBody.className = '';
						BrooklynDiv.className = 'hidden';
						removeBlocker();
						JoeEyes.className = '';
						JoeTshirt.className = '';
						JoeBody.src = "images/Joe8Bit.gif";
					}, 2000);			
				}, 500);
			}, 500);
		}, 500);
	}
/*Just for fun*/
	if (callerID.lastIndexOf("greg")===0){
		theText = 'ACK!!! It’s a giant werewolf...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				theText = 'I forget to shave one time and everyone has jokes...';
				gregStartTalking(theText);
				setTimeout(function() {
					gregStopTalking(theText);
					setTimeout(function() {
						removeBlocker();
						OpenInNewTab('https://twitch.tv/giantwerewolf');
					}, 500);			
				}, 2500);			
			}, 500);			
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("table")===0){
		theText = 'That’s just a coffee table.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("floor")===0){
		theText = 'Yup, that’s the floor.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1000);
	}
	if (callerID.lastIndexOf("wall")===0){
		changePaint();
 		theText = 'I really like how the paint came out. <br/>The color is '+window.thePaintColor+'.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2500);
	}
	if (callerID=="building"){
		changeBricks();
 		theText = 'That building is made of '+window.theBrickColor+' bricks.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2500);
	}
	if (callerID.lastIndexOf("building2")===0){
		changeBricks2();
 		theText = 'My bilding is made of '+window.theBrickColor2+' bricks.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2500);
	}
	if (callerID=="fence"){
		changeFence();
 		theText = 'That fence is '+window.theFenceColor+'...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2500);
	}
	if (callerID.lastIndexOf("clock")===0){
		var theTime = setTheTime();
		theText = 'It is '+theTime+'.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2000);
	}
	if (callerID.lastIndexOf("sky")===0){
		theText = window.skyText;
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2500);
	}
	if (callerID.lastIndexOf("grass")===0){
		theText = 'Yup, that’s grass.';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1000);
	}
	if (callerID.lastIndexOf("sidewalk")===0){
		theText = 'Them mean sidewalks of Brooklyn...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 2000);
	}
	if (callerID.lastIndexOf("windows")===0){
		theText = 'Damn dirty hipsters...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("joesSign")===0){
		theText = 'Hey I can see my house from here...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("leaves")===0){
		theText = 'Hey, its a tree in New York...';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
			}, 500);			
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("BilboDaCat")===0){
		theText = 'Hey, its a cat in a box...<br/>Shouldn’t you be in a deli somewhere?';
		startTalking(theText);
		setTimeout(function() {
			setTimeout(function() {
				removeBlocker();
				OpenInNewTab('http://bilbodacat.github.io');
			}, 500);			
			stopTalking(theText);
		}, 4000);
	}
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
	var shirtName = 'Joe8Bit_T'+randomInteger(1,8)+'.gif';
	JoeTshirt.src = 'images/'+shirtName;
}
function changeLeaves() {
	var theLeaves = document.getElementById('leaves');
	if (window.theMonth > 1 && window.theMonth < 5){
		theLeaves.src = 'images/leavesSpring.png'
	}
	if (window.theMonth > 4 && window.theMonth < 8){
		theLeaves.src = 'images/leavesSummer.png'
	}
	if (window.theMonth > 7 && window.theMonth < 11){
		theLeaves.src = 'images/leavesFall.png'
	}
	if (window.theMonth < 2 || window.theMonth > 10){
		theLeaves.src = 'images/leavesSummer.png'
	}
}
function changePaint() {
	var joesHouseDiv = document.getElementById('joesHouse');
	var BrooklynDoorFrame = document.getElementById('BrooklynDoorFrame');
	var newColor = window.thePaintColor;
	while (newColor === window.thePaintColor) {
		var colorNumber = randomInteger(1,3);
		if(colorNumber === 1){
			newColor = 'DarkSlateGray';
		}
		if(colorNumber === 2){
			newColor = 'SteelBlue';
		}
		if(colorNumber === 3){
			newColor = 'DimGray';
		}
	}
	window.thePaintColor = newColor;
	joesHouseDiv.style.backgroundColor = window.thePaintColor;
	BrooklynDoorFrame.style.backgroundColor = window.thePaintColor;
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
	var theHours = 0;
	var amPM = "";		
	var BrooklynDiv = document.getElementById('Brooklyn');
	var joesHouseDoorFrame = document.getElementById('joesHouseDoorFrame');
	if(window.theDate.getHours()>5 && window.theDate.getHours()<18){
		window.theSkyColor = 'DeepSkyBlue';
		window.skyText = 'Those are lovely puffy clouds.';
		BrooklynDiv.style.backgroundImage = "url('images/clouds.gif')";
		joesHouseDoorFrame.style.backgroundImage = "url('images/clouds.gif')";
	}
	else{
		window.theSkyColor = 'Black';
		window.skyText = 'I love looking at the stars at night.';
		BrooklynDiv.style.backgroundImage = "url('images/stars.gif')";
		joesHouseDoorFrame.style.backgroundImage = "url('images/stars.gif')";
	}
	if(window.theDate.getHours()>12){
		theHours = window.theDate.getHours()-12;
		if (theHours>11){
			amPM = " am";
		}
		else{
			amPM = " pm";
		}
	}
	else {
		theHours = window.theDate.getHours();
		if (theHours>11){
			amPM = " pm";
		}
		else{
			amPM = " am";
			if(theHours === 0){theHours= 12}
		}
	}
	theTime = theHours+":"+leftPad(window.theDate.getMinutes(),2)+amPM;
	BrooklynDiv.style.backgroundColor = window.theSkyColor;
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
