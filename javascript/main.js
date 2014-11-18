window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	var LoadingBackground = document.getElementById('LoadingBackground');
	var JoeContainer = document.getElementById('JoeContainer');
    var user=getCookie("username");
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
	if (user != "") {
		setTimeout(function() {
			theText = 'Hey '+user+'.';
			startTalking(theText);
			setTimeout(function() {
				stopTalking(theText);
			}, 1500);
		}, 2000);
		setTimeout(function() {
			theText = 'Welcome back.';
			startTalking(theText);
			setTimeout(function() {
				stopTalking(theText);
			blockerDiv.parentNode.removeChild(blockerDiv);
			}, 1500);
		}, 4000);
    } 
    else {
		setTimeout(function() {
			theText = 'Hi, I’m Joe.';
			startTalking(theText);
			setTimeout(function() {
				stopTalking(theText);
			}, 1400);
		}, 2000);
		setTimeout(function() {
			theText = 'Welcome to my site.';
			startTalking(theText);
			setTimeout(function() {
				stopTalking(theText);
			}, 2000);
		}, 3900);
		setTimeout(function() {
			theText = 'What’s your name?<br/><input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {setUsername(\'username\', this, 30);};"/>';
			startTalking(theText);
			setTimeout(function() {
				document.getElementById('JoeMouth').className = 'hidden';
			}, 1400);
			blockerDiv.parentNode.removeChild(blockerDiv);
		}, 6400);
    }	
}
function setUsername(cname, theInput,exdays) {
	var LoadingBackground = document.getElementById('LoadingBackground');
	var LoadingContainer = document.getElementById('LoadingContainer');
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
	var tabTest = document.getElementById('content');
	if(tabTest == null){
		var contentDiv = document.createElement("div");
		contentDiv.id = 'content';
		containerDiv.appendChild(contentDiv);
		contentDiv.className = 'hidden'; 
		contentDiv.onclick = function () {
			hideContent();
		}
	}
	else {
		var contentDiv = document.getElementById('content');
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
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<div class="videoWrapper"><iframe width="100%" height="100%" src="http://www.youtube.com/embed/H-0GKrFG8kw?list=UUTDKXx4nSKZ9CGyeHyb9m4w" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>';
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
	if (callerID.lastIndexOf("book")===0){
		setTimeout(function() {
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="coloringBook/index.xhtml"/>';
		}, 500);
	}
	if (callerID.lastIndexOf("raven")===0){
		setTimeout(function() {
			contentDiv.className = "quickfadein";
			contentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="raven-colors/index.html"/>';
		}, 500);
	}
	
	/*Just for fun*/
	if (callerID.lastIndexOf("table")===0){
		theText = 'That is just a coffee table.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
		}, 1500);
	}
	if (callerID.lastIndexOf("floor")===0){
		theText = 'Do you like my floors? They’re nice, right?';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
		}, 1501);
	}
	if (callerID.lastIndexOf("wall")===0){
		theText = 'I really like how the paint came out. <br/>The color is darkslategray.';
		startTalking(theText);
		setTimeout(function() {
			stopTalking(theText);
		}, 2500);
	}
}
function hideContent(){
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
		twitterwrapper.className = 'hidden';
		contentDiv.innerHTML = '';
		contentDiv.parentNode.removeChild(contentDiv);
	}, 500);
}
function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function loadTwitter(){
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}
function startTalking(theText){
	var JoeContainer = document.getElementById('JoeContainer');
	JoeContainer.innerHTML='<div><img id="JoeBody" src="images/Joe8Bit.gif" alt=""/><img id="JoeMouth" src="images/Joe8Bit_talking.gif" alt=""/><img id="JoeEyes" src="images/Joe8Bit_eyes_forward.gif" alt=""/><span id="bubbleBox" class="speechBubble quickfadein">'+theText+'</span></div>';
}
function stopTalking(theText){
	var JoeContainer = document.getElementById('JoeContainer');
	JoeContainer.innerHTML='<div><img id="JoeBody" src="images/Joe8Bit.gif" alt=""/><img id="JoeEyes" src="images/Joe8Bit_eyes_forward.gif" alt=""/><span id="bubbleBox" class="speechBubble quickfadeout">'+theText+'</span></div>';
}