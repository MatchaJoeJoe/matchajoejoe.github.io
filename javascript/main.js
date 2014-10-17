window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	var LoadingBG = document.getElementById('LoadingBackground');
	var LoadingText = document.getElementById('LoadingText');
    var user=getCookie("username");
    if (user != "") {
		LoadingText.innerHTML='<span class="fadein" >Hey '+user+'.</span><br/><br/>&#160;';
		setTimeout(function() {
			LoadingText.innerHTML='<span class="fadeout" >Hey '+user+'.</span><br/><br/><span class="fadein" >Welcome back.</span>';
		}, 2000);
		setTimeout(function() {
			LoadingBG.className = 'fadeout';
		}, 4000);
		setTimeout(function() {
			LoadingBG.parentNode.removeChild(LoadingBG);
		}, 6000);
    } else {
		LoadingText.innerHTML='<span class="fadein" >Hi, I’m Joe.</span><br/><br/>&#160;<br/><br/>&#160;<br/>&#160;';
		setTimeout(function() {
			LoadingText.innerHTML='<span class="fadeout">Hi, I’m Joe.</span><br/><br/><span class="fadein" >Welcome to my site.</span><br/><br/>&#160;<br/>&#160;';
		}, 2000);
		setTimeout(function() {
			LoadingText.innerHTML='&#160;<br/><br/><span class="fadeout" >Welcome to my site.</span><br/><br/><span class="fadein">What’s your name?<br/><input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {setCookie(\'username\', this, 30);};"/></span>';
		}, 4000);
    }	
	loadContent();
}
function setCookie(cname, theInput,exdays) {
	var LoadingBG = document.getElementById('LoadingBackground');
	var LoadingText = document.getElementById('LoadingText');
	var cvalue = theInput.value
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
	LoadingText.innerHTML='&#160;<br/><br/>&#160;<br/><br/><span class="fadeout">What’s your name?<br/><input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {setCookie(\'username\', this, 30);};"/></span>';
	setTimeout(function() {
		LoadingText.innerHTML='&#160;<br/><br/><span class="fadein" >Nice to meet you '+cvalue+'.</span><br/><br/>&#160;<br/>&#160;';
	}, 1000);
	setTimeout(function() {
		LoadingBG.className = 'fadeout';
	}, 4000);
	setTimeout(function() {
		LoadingBG.parentNode.removeChild(LoadingBG);
	}, 6000);
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

function makeTabActive(currentTab){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
    while(i--) {
		activeTabs[i].className = 'tab';
	}
	currentTab.className='activetab glow';
}

function loadContent(){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
	var tabContentDiv = document.getElementById('tabContent');
	var twitterFeed = document.getElementById('twitterwrapper');
	
    while(i--) {
		var TabContent = activeTabs[i].textContent;
	}
	if (TabContent.lastIndexOf("Feed")===0){
		tabContentDiv.className = "quickfadeout";
		setTimeout(function() {
			twitterFeed.className = "quickfadein";
			twitterFeed.style.zIndex = '98';
			tabContentDiv.className = "quickfadein";
			tabContentDiv.innerHTML = '<div class="w50r"><div class="videowrapper"><iframe width="100%" height="100%" src="http://www.youtube.com/embed/H-0GKrFG8kw?list=UUTDKXx4nSKZ9CGyeHyb9m4w" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div></div>';
		}, 500);
	}
	if (TabContent.lastIndexOf("About")===0){
		tabContentDiv.className = "quickfadeout";
		twitterFeed.className = "quickfadeout";
		setTimeout(function() {
			tabContentDiv.className = "quickfadein";
			twitterFeed.style.zIndex = '-1';
			tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="about.html"/>';
		}, 500);
	}
	if (TabContent.lastIndexOf("Resume")===0){
		tabContentDiv.className = "quickfadeout";
		twitterFeed.className = "quickfadeout";
		setTimeout(function() {
			tabContentDiv.className = "quickfadein";
			twitterFeed.style.zIndex = '-1';
			tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="Frizzell-Joe_resume.pdf"/>';
		}, 500);
	}
	if (TabContent.lastIndexOf("Portfolio")===0){
		tabContentDiv.className = "quickfadeout";
		twitterFeed.className = "quickfadeout";
		setTimeout(function() {
			tabContentDiv.className = "quickfadein";
			twitterFeed.style.zIndex = '-1';
			tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="portfolio.html"/>';
		}, 500);
	}
	if (TabContent.lastIndexOf("Coloring Book")===0){
		tabContentDiv.className = "quickfadeout";
		twitterFeed.className = "quickfadeout";
		setTimeout(function() {
			tabContentDiv.className = "quickfadein";
			twitterFeed.style.zIndex = '-1';
			tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="coloringBook/index.html"/>';
		}, 500);
	}
	if (TabContent.lastIndexOf("Raven’s Colors")===0){
		tabContentDiv.className = "quickfadeout";
		twitterFeed.className = "quickfadeout";
		setTimeout(function() {
			tabContentDiv.className = "quickfadein";
			twitterFeed.style.zIndex = '-1';
			tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="raven-colors/index.xhtml"/>';
		}, 500);
	}
	setTimeout(function() {
		loadTwitter();
	}, 10);

}

function loadSubContent(currentButton){
	var theSubContent = currentButton.innerHTML;
	var theContainer = document.getElementById('tabContent');
	var greydiv = document.createElement('div');
	greydiv.id= 'greyedout';
	theContainer.appendChild(greydiv);
	var NewDiv = document.createElement('div');
	NewDiv.id = 'PopUpWindow';
	NewDiv.innerHTML = '<span id="backButton" onclick="closePopUpWindow();">Back</span><span class="button" >'+theSubContent+'</span>';
	theContainer.appendChild(NewDiv);
}
function closePopUpWindow(){
	var greydiv = document.getElementById('greyedout');
	greydiv.parentNode.removeChild(greydiv);
	var NewAccountPage = document.getElementById('PopUpWindow');
	NewAccountPage.parentNode.removeChild(NewAccountPage);
}
function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function loadTwitter(){
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");	var tabContentDiv = document.getElementById('tabContent');
}