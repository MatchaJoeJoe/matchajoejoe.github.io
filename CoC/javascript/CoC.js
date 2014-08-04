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
		NewDiv.id = 'NewAccount';
		NewDiv.innerHTML = 'New Account Name: <input autofocus="autofocus" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {document.getElementById(\'ok\').click();}if (event.keyCode == 27) {document.getElementById(\'cancel\').click();}"/><br/><br/><input type="button" value="Cancel" class="cancel" id="cancel" onclick="cancelUser();"/>&#160;&#160;&#160;<input class="ok" type="button" value="OK" id="ok" onclick="createUser();"/>';
		theContainer.appendChild(NewDiv);
	}
	if (currentUser != 'New'){
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			} else { // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				alert(xmlhttp.responseText);
				//document.getElementById("accountinfo").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","php/getuser.php?q="+currentUser,true);
		xmlhttp.send();
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
	NewDiv.id = 'NewAccount';
	NewDiv.innerHTML = 'Edit Account Name: <input autofocus="autofocus" value="'+currentUser+'" type="text" id="NewName" onkeydown="if (event.keyCode == 13) {document.getElementById(\'ok\').click();}if (event.keyCode == 27) {document.getElementById(\'cancel\').click();}"/><br/><br/><input type="button" value="Cancel" class="cancel" id="cancel" onclick="cancelUser();"/>&#160;&#160;&#160;<input class="ok" type="button" value="Update" id="update" onclick="updateUser();"/><br/><br/><input class="cancel" type="button" value="Delete" id="delete" onclick="deleteUser();"/>';
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
		var NewAccountPage = document.getElementById('NewAccount');
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
			var NewAccountPage = document.getElementById('NewAccount');
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
	var NewAccountPage = document.getElementById('NewAccount');
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
	var NewAccountPage = document.getElementById('NewAccount');
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
		tabContentDiv.innerHTML = 'These buildings are those that are neither offensive, defensive, or resource-giving.<br/><br/><span class="button">Town Hall</span> <span class="button">Clan Castle</span> <span class="button">Decorations</span> <span class="button">Obstacles</span>';
		
	}
	if (TabContent=='Defense'){
		tabContentDiv.innerHTML = 'Defenses serve to safeguard trophies and protect resources from enemy troops.<br/><br/><span class="button">Cannons</span> <span class="button">Archer Towers</span> <span class="button">Mortars</span> <span class="button">Air Defenses</span> <span class="button">Wizard Towers</span> <span class="button">Hidden Teslas</span> <span class="button">X-bows</span> <span class="button">Walls</span> <span class="button">Traps</span>';
		
	}
	if (TabContent=='Resources'){
		tabContentDiv.innerHTML = 'These buildings are those that are neither offensive, defensive, or resource-giving.';
		
	}
	if (TabContent=='Army'){
		tabContentDiv.innerHTML = 'These buildings are those that are neither offensive, defensive, or resource-giving.';
		
	}
	if (TabContent=='Troops'){
		tabContentDiv.innerHTML = 'These buildings are those that are neither offensive, defensive, or resource-giving.';
		
	}
}