function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  document.getElementsByClassName('signed-in')[0].style.display = "block";
  document.getElementsByClassName('signed-out')[0].style.display = "hidden";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  document.getElementsByClassName('signed-in')[0].style.display = "hidden";
  document.getElementsByClassName('signed-out')[0].style.display = "block";
}
