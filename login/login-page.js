var email = 'not signed in';
var googleUser;
function onSignIn(googleUser) {
  window.googleUser = googleUser;
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
      checkAllowed(profile.getEmail());
    }
    else
    {
      document.getElementById('prompt').innerHTML = "Could not verify login, please try again. If the problem persists, please contact the developer.";
    }
  };
  xhr.send('id_token=' + id_token);
}
function checkAllowed(email_address){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://gardenlifegame.com/php/Megs/checkemail.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    console.log('Response: ' + xhr.responseText);
    if(xhr.responseText.startsWith("0")){
      document.getElementById('access-response').style.display = "none";
    } else {
      document.getElementById('access-response').innerHTML = "Access Denied for " + email_address;
    }
  }
  xhr.send('email_address=' + email_address);
}
function signOut() {
  window.googleUser = null;
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  document.getElementById('signed-in').style.display = "none";
  document.getElementById('signed-out').style.display = "grid";
  document.getElementById('access-response').innerHTML = "Access not checked";
}
