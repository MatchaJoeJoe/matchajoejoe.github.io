var orgTabContent = '';
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	var tabContentDiv = document.getElementById('tabContent');
	window.orgTabContent = tabContentDiv.innerHTML;
	var LoadingBG = document.getElementById('LoadingBackground');
	var LoadingText = document.getElementById('LoadingText');
	setTimeout(function() {
		LoadingText.innerHTML='<span class="fadeout">Hi.</span><br/><br/><span class="fadein" >I’m Joe.</span><br/><br/>&#160;';
	}, 1000);
	setTimeout(function() {
		LoadingText.innerHTML='&#160;<br/><br/><span class="fadeout">I’m Joe.</span><br/><br/><span class="fadein" >Welcome to my site.</span>';
	}, 3000);
	setTimeout(function() {
		LoadingBG.className = 'fadeout';
	}, 5000);
	setTimeout(function() {
		LoadingBG.parentNode.removeChild(LoadingBG);
	}, 7000);
	loadContent();
}
function makeTabActive(currentTab){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
    while(i--) {
		activeTabs[i].className = 'tab';
	}
	currentTab.className='activetab glow';
	loadContent();
}

function loadContent(){
	var activeTabs = document.getElementsByClassName('activetab'), i = activeTabs.length;
	var tabContentDiv = document.getElementById('tabContent');
	
    while(i--) {
		var TabContent = activeTabs[i].textContent;
	}
	if (TabContent.lastIndexOf("Feed")==0){
		tabContentDiv.innerHTML = window.orgTabContent;
	}
	if (TabContent.lastIndexOf("About")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="about.html"/>';
	}
	if (TabContent.lastIndexOf("Resume")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="Resume/Frizzell-Joe_resume.html"/>';
	}
	if (TabContent.lastIndexOf("Portfolio")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="portfolio.html"/>';
	}
	if (TabContent.lastIndexOf("Coloring Book")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="coloringBook/index.xhtml"/>';
	}
	if (TabContent.lastIndexOf("Raven’s Colors")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="raven-colors/index.xhtml"/>';
	}
	if (TabContent.lastIndexOf("Deviant Art")==0){
		tabContentDiv.innerHTML = '<iframe class="w90" frameborder="0" src="http://sublimishone.deviantart.com"/>';
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
