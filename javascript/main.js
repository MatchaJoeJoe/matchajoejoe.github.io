window.addEventListener('load', eventWindowLoaded, false);	
var masterVolume = 5;
var JoeTshirt = document.getElementById('JoeTshirt');
function eventWindowLoaded() {
	document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
	var LoadingBackground = document.getElementById('LoadingBackground');
	var JoeContainer = document.getElementById('JoeContainer');
    var user = getCookie("username");
	var	SongId = 'audio'+randomInteger(1,3);
    var startingSong = document.getElementById(SongId);
	changeMusic(startingSong);
	LoadingBackground.parentNode.removeChild(LoadingBackground);
	var containerDiv = document.getElementById('container');
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var twitterDiv = document.createElement("div");
	twitterDiv.id = 'twitterwrapper';
	twitterDiv.className = 'hidden';
	twitterDiv.innerHTML = '<a class="twitter-timeline" href="https://twitter.com/JoeFrizzell" data-widget-id="312040975352602624">Tweets by @JoeFrizzell</a>';
	containerDiv.appendChild(twitterDiv);
	setTimeout(function() {
		loadTwitter();
	}, 1000);
	setTimeout(function() {
		changeShirts();
		if (user != "") {
				theText = 'Hey '+user+'.';
				startTalking(theText);
				setTimeout(function() {
					stopTalking(theText);
					setTimeout(function() {
						theText = 'Welcome back.';
						startTalking(theText);
						setTimeout(function() {
							stopTalking(theText);
						blockerDiv.parentNode.removeChild(blockerDiv);
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
    if (cvalue != "") {
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
	backgroundMusic.innerHTML = '<audio id="musicPlayer" autoplay loop controls><source src="audio/'+songName+'.wav" type="audio/wav"><source src="audio/'+songName+'.mp3" type="audio/mpeg"><source src="audio/'+songName+'.ogg" type="audio/ogg">Sorry, you don’t get to listen to these awesome 8-bit jams because your browser is crap. Try using Chrome.</audio>';
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
	var JoeContainer = document.getElementById('JoeContainer');
	var callerID = theCaller.id;
	var containerDiv = document.getElementById('container');
	var blockerDiv = document.createElement("div");
	blockerDiv.id = 'blocker';
	containerDiv.appendChild(blockerDiv);
	var contentDiv = document.getElementById('content');
	if(contentDiv == null){
		contentDiv = document.createElement("div");
		contentDiv.id = 'content';
		containerDiv.appendChild(contentDiv);
		contentDiv.className = 'hidden'; 
		contentDiv.onclick = function () {
			hideContent();
		}
	}
	else {
		contentDiv = document.getElementById('content');
	}
	var tabClass = contentDiv.className;
	if (tabClass !='hidden'){
	contentDiv.className = "quickfadeout";
		setTimeout(function() {
			contentDiv.className = "hidden";
		}, 500);
	}
	if (callerID.lastIndexOf("chair")===0){
		theText = 'There is nothing better than curling up in a comfy chair and reading... or watching YouTube videos.';
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
		theText = 'I spend ridiculous amounts of time working on my laptop... Working, yeah, that’s what I’m doing.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<img id="resume" onclick="OpenInNewTab(\'http://joefrizzell.com/Frizzell-Joe_resume.pdf\')" src="images/Frizzell-Joe_resume.jpg" alt="Frizzell-Joe_resume" />';
		}, 4000);
	}
	if (callerID.lastIndexOf("phone")===0){
		theText = 'Isn’t it great that we are always connected with anyone we’ve ever met? <br/>Isn’t it??';
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
	if (callerID.lastIndexOf("window")===0){
		theText = 'Its a great, big, wondrous world out there.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var linksDiv = document.getElementById('links');
			var linksContents = linksDiv.innerHTML;
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = linksContents;
		}, 2000);
	}
	if (callerID.lastIndexOf("radio")===0){
		theText = 'Music to soothe the savage beats.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
			var audioListDiv = document.getElementById('audioList');
			audioListDiv.className = "quickfadein";
			contentDiv.className = "quickfadein";
		}, 2000);
	}

	/*Just for fun*/
	if (callerID.lastIndexOf("table")===0){
		theText = 'That’s just a coffee table.';
		startTalking(theText);
		setTimeout(function() {
			removeBlocker();
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("floor")===0){
		theText = 'Do you like my floors? It’s amazing how real they look.';
		startTalking(theText);
		setTimeout(function() {
			removeBlocker();
			stopTalking(theText);
		}, 1501);
	}
	if (callerID.lastIndexOf("wall")===0){
		theText = 'I really like how the paint came out. <br/>The color is darkslategray.';
		startTalking(theText);
		setTimeout(function() {
			removeBlocker();
			stopTalking(theText);
		}, 2500);
	}
	if (callerID.lastIndexOf("door")===0){
		var theDoor = document.getElementById('door');
		theDoor.className = 'doorOpen'
		setTimeout(function() {
			removeBlocker();
			theDoor.className = 'doorClose'
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
	if (audioClass !='hidden'){
		audioListDiv.className = 'quickfadeout';
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
		audioListDiv.className = 'hidden';
		twitterwrapper.className = 'hidden';
		contentDiv.innerHTML = '';
		contentDiv.parentNode.removeChild(contentDiv);
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
	var JoeContainer = document.getElementById('JoeContainer');
	JoeContainer.innerHTML='<div><img id="JoeBody" src="images/Joe8Bit.gif" alt=""/><img id="JoeMouth" src="images/Joe8Bit_talking.gif" alt=""/><img id="JoeEyes" src="images/Joe8Bit_eyes_forward.gif" alt=""/><span id="bubbleBox" class="speechBubble quickfadein">'+theText+'</span></div>';
	JoeContainer.appendChild(window.JoeTshirt);
}
function stopTalking(theText){
	var JoeContainer = document.getElementById('JoeContainer');
	JoeContainer.innerHTML='<div><img id="JoeBody" src="images/Joe8Bit.gif" alt=""/><img id="JoeEyes" src="images/Joe8Bit_eyes_forward.gif" alt=""/><span id="bubbleBox" class="speechBubble quickfadeout">'+theText+'</span></div>';
	JoeContainer.appendChild(window.JoeTshirt);
	setTimeout(function() {
		JoeContainer.innerHTML='<div><img id="JoeBody" src="images/Joe8Bit.gif" alt=""/><img id="JoeEyes" src="images/Joe8Bit_eyes_forward.gif" alt=""/>';
		JoeContainer.appendChild(window.JoeTshirt);
	}, 500);
}
function changeShirts() {
	var JoeContainer = document.getElementById('JoeContainer');
	var shirtName = 'Joe8Bit_T'+randomInteger(1,8)+'.gif';
	window.JoeTshirt = document.getElementById('JoeTshirt');
	if(JoeTshirt !== null){
		window.JoeTshirt.parentNode.removeChild(JoeTshirt);
	}
	window.JoeTshirt = document.createElement('img');
	window.JoeTshirt.id = 'JoeTshirt';
	window.JoeTshirt.onclick = function () {changeShirts()};
	window.JoeTshirt.src = 'images/'+shirtName;
	JoeContainer.appendChild(window.JoeTshirt);
}
	
