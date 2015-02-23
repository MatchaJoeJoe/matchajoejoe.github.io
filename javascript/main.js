var JoePosition = 'left';
var theContainer = 'inside';
var theSkyColor = 'lightblue';
var thePaintColor = 'DarkSlateGray';
var theBrickColor = 'Maroon';
var skyText = 'Yup, that’s the sky.';
window.addEventListener('load', eventWindowLoaded, false);	
var masterVolume = 5;
function eventWindowLoaded() {
	changePaint();
	setTheTime();
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
 	var door = document.getElementById('doorOut');
 	door.className = 'doorClose';
	var shirtName = 'Joe8Bit_T0.gif';
	var LoadingBackground = document.getElementById('LoadingBackground');
	var outsideDiv = document.getElementById('outside');
	LoadingBackground.className = 'hidden';
	outsideDiv.className = 'hidden';
    var user = getCookie("username");
	var	SongId = 'audio'+randomInteger(1,3);
    var startingSong = document.getElementById(SongId);
	changeMusic(startingSong);
	var containerDiv = document.getElementById(window.theContainer);
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	setTimeout(function() {
		loadTwitter();
	}, 1000);
	setTimeout(function() {
		var JoeEyes = document.getElementById('JoeEyes');
		JoeEyes.className = "";
		JoeBody.className = "";
		JoeBody.src = "images/Joe8Bit.gif";
		JoeTshirt.className = '';
		if (user !== "") {
				theText = 'Hey '+user+'.';
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
							theText = 'What’s your name?<br/><input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {setUsername(\'username\', this, 30);};"/>';
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
function setUsername(cname, theInput, exdays) {
	var cvalue = theInput.value;
    if (cvalue !== "") {
    	cvalue = ' ' +cvalue;
    }
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
	theText = 'What’s your name?<br/>'+cvalue;
	stopTalking(theText);
	setTimeout(function() {
		theText = 'Nice to meet you'+cvalue+'.';
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
	for (var i = 1; i < 4; i++) {
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
	volumeLevel = volumeLevel/10;
	var musicPlayer = document.getElementById('musicPlayer');
	musicPlayer.volume = volumeLevel;
	window.masterVolume = volumeLevel*10;
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

function loadContent(theCaller){
	var theText = "...";
	var callerID = theCaller.id;
	var containerDiv = document.getElementById(window.theContainer);
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
			changeVolume(1);
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
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="portfolio.html"/>';
		}, 3000);
	}
	if (callerID.lastIndexOf("drafting")===0){
		 theText = 'I used to love coloring when I was a kid... Good thing I’m still a kid at heart!';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="coloringBook/index.xhtml"/>';
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
	if (callerID.lastIndexOf("radio")===0){
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
		var insideDiv = document.getElementById('inside');
		var outsideDiv = document.getElementById('outside');
		var theDoorOut = document.getElementById('doorOut');
		var theDoorIn = document.getElementById('doorIn');
		var JoeContainer = document.getElementById('JoeContainer');
		var JoeEyes = document.getElementById('JoeEyes');
		var JoeBody = document.getElementById('JoeBody');
		var JoeTshirt = document.getElementById('JoeTshirt');
		var earphones = document.getElementById('earphones');
		theText = 'Let’s go outside for a stroll...';
		startTalking(theText);
		setTimeout(function() {
			theDoorOut.className = 'doorOpen';
			theDoorIn.className = 'doorOpen';
			setTimeout(function() {
				JoeContainer.className = window.JoePosition +' fadeout';
				window.JoePosition = 'right'
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
					insideDiv.className = 'fadeout';
					outsideDiv.className = 'fadein';
					window.theContainer = 'outside';
					setTimeout(function() {
						JoeBody.className = '';
						insideDiv.className = 'hidden';
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
		var insideDiv = document.getElementById('inside');
		var outsideDiv = document.getElementById('outside');
		var theDoorOut = document.getElementById('doorOut');
		var theDoorIn = document.getElementById('doorIn');
		var JoeContainer = document.getElementById('JoeContainer');
		var JoeEyes = document.getElementById('JoeEyes');
		var JoeBody = document.getElementById('JoeBody');
		var JoeTshirt = document.getElementById('JoeTshirt');
		var earphones = document.getElementById('earphones');
		theText = 'Let’s go back inside...';
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
					outsideDiv.className = 'fadeout';
					insideDiv.className = 'fadein';
					window.theContainer = 'inside';
					setTimeout(function() {
						JoeBody.className = '';
						outsideDiv.className = 'hidden';
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
	if (callerID.lastIndexOf("house")===0){
		changeBricks();
 		theText = 'My house is made of '+window.theBrickColor+' bricks.';
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
function changeShirts() {
	var JoeTshirt = document.getElementById('JoeTshirt');
	var shirtName = 'Joe8Bit_T'+randomInteger(1,8)+'.gif';
	JoeTshirt = document.getElementById('JoeTshirt');
	JoeTshirt.src = 'images/'+shirtName;
	JoeTshirt.className = '';
}
function changePaint() {
	var insideDiv = document.getElementById('inside');
	var outsideDoorFrame = document.getElementById('outsideDoorFrame');
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
	insideDiv.style.backgroundColor = window.thePaintColor;
	outsideDoorFrame.style.backgroundColor = window.thePaintColor;
}
function changeBricks() {
	var houseDiv = document.getElementById('house');
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
	houseDiv.style.backgroundColor = window.theBrickColor;
}
function setTheTime(){
	var theTime = "";
	var theHours = 0;
	var amPM = "";		
	var theDate = new Date();
	var outsideDiv = document.getElementById('outside');
	var insideDoorFrame = document.getElementById('insideDoorFrame');
	if(theDate.getHours()>5 && theDate.getHours()<18){
		window.theSkyColor = 'DeepSkyBlue';
		window.skyText = 'Those are lovely puffy clouds.';
		outsideDiv.style.backgroundImage = "url('images/clouds.gif')";
		insideDoorFrame.style.backgroundImage = "url('images/clouds.gif')";
	}
	else{
		window.theSkyColor = 'Black';
		window.skyText = 'I love looking at the stars at night.';
		outsideDiv.style.backgroundImage = "url('images/stars.gif')";
		insideDoorFrame.style.backgroundImage = "url('images/stars.gif')";
	}
	if(theDate.getHours()>12){
		theHours = theDate.getHours()-12;
		if (theHours>11){
			amPM = " am";
		}
		else{
			amPM = " pm";
		}
	}
	else {
		theHours = theDate.getHours();
		if (theHours>11){
			amPM = " pm";
		}
		else{
			amPM = " am";
			if(theHours === 0){theHours= 12}
		}
	}
	theTime = theHours+":"+leftPad(theDate.getMinutes(),2)+amPM;
	outsideDiv.style.backgroundColor = window.theSkyColor;
	insideDoorFrame.style.backgroundColor = window.theSkyColor;
	return theTime;
}
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
