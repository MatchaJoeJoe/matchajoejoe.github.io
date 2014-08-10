var theUsers = 
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	var LoadingBG = document.getElementById('LoadingBackground');
	setTimeout(function() {
		LoadingBG.className = 'fadeout';
	}, 3000);
	setTimeout(function() {
		LoadingBG.parentNode.removeChild(LoadingBG);
	}, 4000);
	loadContent();
}
function makeTabActive(currentTab){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
    while(i--) {
		activeTabs[i].className = 'tab';
	}
	currentTab.className='activetab';
	loadContent();
}

function loadContent(){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
	var tabContentDiv = document.getElementById('tabContent');
	
    while(i--) {
    
		var TabContent = activeTabs[i].textContent;
	}
	if (TabContent.lastIndexOf("Feed")==0){
		tabContentDiv.innerHTML = '<div class="w50r"><div class="videowrapper"><iframe width="100%" height="100%" src="http://www.youtube.com/embed/videoseries?list=UUTDKXx4nSKZ9CGyeHyb9m4w" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div></div><div class="w50l"><a class="twitter-timeline" href="https://twitter.com/JoeFrizzell" data-widget-id="312040975352602624">Tweets by @JoeFrizzell</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
	}
	if (TabContent.lastIndexOf("Resume")==0){
		tabContentDiv.innerHTML = '<iframe frameborder="0" width="100%" height="100%" src="Resume/Frizzell-Joe_resume.html"/>';
		
	}
	if (TabContent.lastIndexOf("Portfolio")==0){
		tabContentDiv.innerHTML = '<iframe frameborder="0" width="90%" height="90%" src="portfolio.html"/>';
		
	}
	if (TabContent.lastIndexOf("Army")==0){
		tabContentDiv.innerHTML = '<span class="tabtext">The Army section of the in-game shop that will impact the strength of your attacking army, allowing you to win more attacks.</span><br/><br/><span class="button" onclick="loadSubContent(this);">Army Camp</span> <span class="button" onclick="loadSubContent(this);">Barracks</span> <span class="button" onclick="loadSubContent(this);">Dark Barracks</span> <span class="button" onclick="loadSubContent(this);">Laboratory</span> <span class="button" onclick="loadSubContent(this);">Spell Factory</span> <span class="button" onclick="loadSubContent(this);">Barbarian King Altar</span> <span class="button" onclick="loadSubContent(this);">Archer Queen Altar</span><br/>';
		
	}
	if (TabContent.lastIndexOf("Troops")==0){
		tabContentDiv.innerHTML = '<span class="tabtext">Troops are used against either the goblins on the campaign map, or other players in order to win Trophies and loot Gold and Elixir.</span><br/><br/><span class="button" onclick="loadSubContent(this);">Tier 1</span> <span class="button" onclick="loadSubContent(this);">Tier 2</span> <span class="button" onclick="loadSubContent(this);">Tier 3</span> <span class="button" onclick="loadSubContent(this);">Dark Elixer Troops</span> <span class="button" onclick="loadSubContent(this);">Heroes</span> <span class="button" onclick="loadSubContent(this);">Spells</span><br/>';
		
	}
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