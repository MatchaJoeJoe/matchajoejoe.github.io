function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://gardenlifegame.com/php/Megs/tokensignin.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if(xhr.responseText.startsWith("0")){
      console.log('Signed in as: ' + xhr.responseText);
      var profile = googleUser.getBasicProfile();
      document.getElementById('username').innerHTML = profile.getName();
      document.getElementById('userimage').src = profile.getImageUrl();
      document.getElementById('signed-in').style.display = "block";
      document.getElementById('signed-out').style.display = "none";
    }
    else
    {
      document.getElementById('prompt').innerHTML = "Could not verify login, please try again. If the problem persists, please contact the developer.";
    }
  };
  xhr.send('id_token=' + id_token);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  document.getElementById('signed-in').style.display = "none";
  document.getElementById('signed-out').style.display = "grid";
}
