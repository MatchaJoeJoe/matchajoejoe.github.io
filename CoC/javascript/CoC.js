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
function changeUser() {
	var userInput = document.getElementById('accountInput');
	var currentUser = userInput.options[userInput.selectedIndex].text;
	if (currentUser=='New'){
		var theContainer = document.getElementById('HomeBackground');
		var greydiv = document.createElement('div');
		greydiv.id= 'greyedout';
		theContainer.appendChild(greydiv);
		var NewDiv = document.createElement('div');
		NewDiv.id = 'PopUpWindow';
		NewDiv.innerHTML = 'New Account Name: <input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {document.getElementById(\'ok\').click();}if (event.keyCode == 27) {document.getElementById(\'cancel\').click();}"/><br/><br/><input type="button" value="Cancel" class="cancel" id="cancel" onclick="cancelUser();"/>&#160;&#160;&#160;<input class="ok" type="button" value="OK" id="ok" onclick="createUser();"/>';
		theContainer.appendChild(NewDiv);
	}
	if (currentUser != 'New'){
	}

}
function editUser(){
	var userInput = document.getElementById('accountInput');
	var currentUser = userInput.options[userInput.selectedIndex].text;
	var theContainer = document.getElementById('HomeBackground');
	var greydiv = document.createElement('div');
	greydiv.id= 'greyedout';
	theContainer.appendChild(greydiv);
	var NewDiv = document.createElement('div');
	NewDiv.id = 'PopUpWindow';
	NewDiv.innerHTML = 'Edit Account Name: <input autofocus="autofocus" value="'+currentUser+'" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {document.getElementById(\'update\').click();}if (event.keyCode == 27) {document.getElementById(\'cancel\').click();}"/><br/><br/><input type="button" value="Cancel" class="cancel" id="cancel" onclick="cancelUser();"/>&#160;&#160;&#160;<input class="ok" type="button" value="Update" id="update" onclick="updateUser();"/><br/><br/><input class="cancel" type="button" value="Delete" id="delete" onclick="deleteUser();"/>';
	theContainer.appendChild(NewDiv);
}
function createUser(){

	HTMLOptionsCollection.prototype.forEach = Array.prototype.forEach;

	var userInput = document.getElementById('accountInput');

	var NewUserName = document.getElementById('NewName').value;
	var UserExists = 'false';
	if (NewUserName.length==0){
		alert('Please enter an account name.');
	}
	if (NewUserName.length>0){
		userInput.options.forEach(function(element, index){
			if ( element.value === NewUserName ) {
					UserExists = 'true';
				}
			}
		);
		if (UserExists=='false'){
			var UserList = document.getElementById('users');
			var newOption = document.createElement('option');
			newOption.value = NewUserName;
			newOption.innerHTML = NewUserName;
			UserList.appendChild(newOption);
		}
		var greydiv = document.getElementById('greyedout');
		greydiv.parentNode.removeChild(greydiv);
		var NewAccountPage = document.getElementById('PopUpWindow');
		NewAccountPage.parentNode.removeChild(NewAccountPage);

		userInput.options.forEach(function(element, index){
		  if ( element.value === NewUserName ) {
			userInput.selectedIndex = index;
		  }
		});
	}
}
function updateUser(){
	var userInput = document.getElementById('accountInput');
	var currentUser = userInput.options[userInput.selectedIndex].text;

	HTMLOptionsCollection.prototype.forEach = Array.prototype.forEach;

	var NewUserName = document.getElementById('NewName').value;
	var UserExists = 'false';
	if (NewUserName.length==0){
		alert('Please enter a username');
	}
	if (NewUserName.length>0){
		userInput.options.forEach(function(element, index){
			if ( element.value === NewUserName ) {
					UserExists = 'true';				
					alert(NewUserName+' already exists, please choose another name.');
				}
			}
		);
		if (UserExists=='false'){
			var UserList = document.getElementById('users');
			var greydiv = document.getElementById('greyedout');
			greydiv.parentNode.removeChild(greydiv);
			var NewAccountPage = document.getElementById('PopUpWindow');
			NewAccountPage.parentNode.removeChild(NewAccountPage);

			userInput.options.forEach(function(element, index){
			  if ( element.value === currentUser ) {
				userInput.selectedIndex = index;
				element.value = NewUserName;
				element.textContent = NewUserName;
			  }
			});
		}
	}
}

function deleteUser(){
	HTMLOptionsCollection.prototype.forEach = Array.prototype.forEach;

	var userInput = document.getElementById('accountInput');
	var currentUser = userInput.options[userInput.selectedIndex].text;
	var deleteConfirm = confirm('Are you sure you want to delete '+currentUser+'? This cannot be undone.');
	if (deleteConfirm==true){
		userInput.options.forEach(function(element, index){
			if ( element.value === currentUser ) {
				if ( element.id === 'firstUser') {
					alert('Cannot delete '+currentUser+'.');
				}
				if ( element.id != 'firstUser') {
					element.parentNode.removeChild(element);	
				}
			}
		});
	}
	var greydiv = document.getElementById('greyedout');
	greydiv.parentNode.removeChild(greydiv);
	var NewAccountPage = document.getElementById('PopUpWindow');
	NewAccountPage.parentNode.removeChild(NewAccountPage);
	var originalUser = 'firstUser';
	userInput.options.forEach(function(element, index){
	  if ( element.id === originalUser ) {
		userInput.selectedIndex = index;
	  }
	});

}
function cancelUser(){
	var greydiv = document.getElementById('greyedout');
	greydiv.parentNode.removeChild(greydiv);
	var NewAccountPage = document.getElementById('PopUpWindow');
	NewAccountPage.parentNode.removeChild(NewAccountPage);
	HTMLOptionsCollection.prototype.forEach = Array.prototype.forEach;
	var userInput = document.getElementById('accountInput');
	var originalUser = 'firstUser';
	userInput.options.forEach(function(element, index){
	  if ( element.id === originalUser ) {
		userInput.selectedIndex = index;
	  }
	});
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
	if (TabContent=='Other'){
		tabContentDiv.innerHTML = 'These buildings are those that are neither offensive, defensive, or resource-giving.<br/><br/><span class="button" onclick="loadSubContent(this);">Town Hall</span> <span class="button" onclick="loadSubContent(this);">Clan Castle</span> <span class="button" onclick="loadSubContent(this);">Decorations</span> <span class="button" onclick="loadSubContent(this);">Obstacles</span>';
		
	}
	if (TabContent=='Defense'){
		tabContentDiv.innerHTML = 'Defenses serve to safeguard trophies and protect resources from enemy troops.<br/><br/><span class="button" onclick="loadSubContent(this);">Cannons</span> <span class="button" onclick="loadSubContent(this);">Archer Towers</span> <span class="button" onclick="loadSubContent(this);">Mortars</span> <span class="button" onclick="loadSubContent(this);">Air Defenses</span> <span class="button" onclick="loadSubContent(this);">Wizard Towers</span> <span class="button" onclick="loadSubContent(this);">Hidden Teslas</span> <span class="button" onclick="loadSubContent(this);">X-bows</span> <span class="button" onclick="loadSubContent(this);">Walls</span> <span class="button" onclick="loadSubContent(this);">Traps</span>';
		
	}
	if (TabContent=='Resources'){
		tabContentDiv.innerHTML = 'Resources are the currencies used to purchase and upgrade assets.<br/><br/><span class="button" onclick="loadSubContent(this);">Gold Mine</span> <span class="button" onclick="loadSubContent(this);">Gold Storage</span> <span class="button" onclick="loadSubContent(this);">Elixir Collector</span> <span class="button" onclick="loadSubContent(this);">Elixir Storage</span> <span class="button" onclick="loadSubContent(this);">Dark Elixir Drill</span> <span class="button" onclick="loadSubContent(this);">Dark Elixir Storage</span> <span class="button" onclick="loadSubContent(this);">Builder’s Hut</span>';
		
	}
	if (TabContent=='Army'){
		tabContentDiv.innerHTML = 'The Army section of the in-game shop that will impact the strength of your attacking army, allowing you to win more attacks.<br/><br/><span class="button" onclick="loadSubContent(this);">Army Camp</span> <span class="button" onclick="loadSubContent(this);">Barracks</span> <span class="button" onclick="loadSubContent(this);">Dark Barracks</span> <span class="button" onclick="loadSubContent(this);">Laboratory</span> <span class="button" onclick="loadSubContent(this);">Spell Factory</span> <span class="button" onclick="loadSubContent(this);">Barbarian King Altar</span> <span class="button" onclick="loadSubContent(this);">Archer Queen Altar</span>';
		
	}
	if (TabContent=='Troops'){
		tabContentDiv.innerHTML = 'Troops are used against either the goblins on the campaign map, or other players in order to win Trophies and loot Gold and Elixir.<br/><br/><span class="button" onclick="loadSubContent(this);">Tier 1</span> <span class="button" onclick="loadSubContent(this);">Tier 2</span> <span class="button" onclick="loadSubContent(this);">Tier 3</span> <span class="button" onclick="loadSubContent(this);">Dark Elixer Troops</span> <span class="button" onclick="loadSubContent(this);">Heroes</span> <span class="button" onclick="loadSubContent(this);">Spells</span>';
		
	}
}

function loadSubContent(currentButton){
	var theSubContent = currentButton.textContent;
	var theContainer = document.getElementById('HomeBackground');
	var greydiv = document.createElement('div');
	greydiv.id= 'greyedout';
	theContainer.appendChild(greydiv);
	var NewDiv = document.createElement('div');
	NewDiv.id = 'PopUpWindow';
	NewDiv.innerHTML = '<span id="backButton" onclick="closePopUpWindow();">Back</span><br/>'+theSubContent;
	theContainer.appendChild(NewDiv);
}
function closePopUpWindow(){
	var greydiv = document.getElementById('greyedout');
	greydiv.parentNode.removeChild(greydiv);
	var NewAccountPage = document.getElementById('PopUpWindow');
	NewAccountPage.parentNode.removeChild(NewAccountPage);
}