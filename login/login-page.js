function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById('username').innerHTML = profile.getName();
  document.getElementById('userimage').src = profile.getImageUrl();
  document.getElementById('signed-in').style.display = "block";
  document.getElementById('signed-out').style.display = "none";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  document.getElementById('signed-in').style.display = "none";
  document.getElementById('signed-out').style.display = "block";
}
