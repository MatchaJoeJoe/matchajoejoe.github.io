function showButton(theButton){
	theButton.className='pageButton quickfadein';
	theButton.style.opacity='1';
}
function hideButton(theButton){
	theButton.className='pageButton quickfadeout';
	theButton.style.opacity='0';
}
window.addEventListener('load', loadASCIIDoc, false);	
var ASCIIDocName = "RavenWings.txt";
function loadASCIIDoc(){
alert(ASCIIDocName);
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("ASCII").innerHTML=xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", ASCIIDocName ,true);
	xmlhttp.send();
}
