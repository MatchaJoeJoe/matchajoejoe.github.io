addEventListener('load', eventwindowloaded, false);	
function eventwindowloaded() {
	eyeChange;
	skinChange;
	hairChange;
	shirtChange;
	pantsChange;
	shoeChange;
	
	avatarEyes = document.getElementById('avatarEyes');
	avatarSkin = document.getElementById('avatarSkin');
	avatarShirt = document.getElementById('avatarShirt');
	avatarHair = document.getElementById('avatarHair');
	avatarPants = document.getElementById('avatarPants');
	avatarShoes = document.getElementById('avatarShoes');

	eyeColor = document.getElementById('eyeColor');
	eyeColor.addEventListener('change', eyeChange, true);
	eyeColor.addEventListener('click', eyeChange, true);
	eyeColor.addEventListener('touchstart', eyeChange, true);
	eyeColor.addEventListener('touchmove', eyeChange, false);
	eyeColor.addEventListener('mousedown', eyeChange, false);
	eyeColor.addEventListener('mousemove', eyeChange, false);
	eyeColor.addEventListener('mouseup', eyeChange, false);
	
	eyeBrightness = document.getElementById('eyeBrightness');
	eyeBrightness.addEventListener('change', eyeChange, true);
	eyeBrightness.addEventListener('click', eyeChange, true);
	eyeBrightness.addEventListener('touchstart', eyeChange, true);
	eyeBrightness.addEventListener('touchmove', eyeChange, false);
	eyeBrightness.addEventListener('mousedown', eyeChange, false);
	eyeBrightness.addEventListener('mousemove', eyeChange, false);
	eyeBrightness.addEventListener('mouseup', eyeChange, false);

	eyeStyle = document.getElementById('eyeStyle');
	eyeStyle.addEventListener('change', eyeStyleChange, true);
	eyeStyle.addEventListener('click', eyeStyleChange, true);
	eyeStyle.addEventListener('touchstart', eyeStyleChange, true);
	eyeStyle.addEventListener('touchmove', eyeStyleChange, false);
	eyeStyle.addEventListener('mousedown', eyeStyleChange, false);
	eyeStyle.addEventListener('mousemove', eyeStyleChange, false);
	eyeStyle.addEventListener('mouseup', eyeStyleChange, false);
	
	skinColor = document.getElementById('skinColor');
	skinColor.addEventListener('change', skinChange, true);
	skinColor.addEventListener('click', skinChange, true);
	skinColor.addEventListener('touchstart', skinChange, true);
	skinColor.addEventListener('touchmove', skinChange, false);
	skinColor.addEventListener('mousedown', skinChange, false);
	skinColor.addEventListener('mousemove', skinChange, false);
	skinColor.addEventListener('mouseup', skinChange, false);

	skinBrightness = document.getElementById('skinBrightness');
	skinBrightness.addEventListener('change', skinChange, true);
	skinBrightness.addEventListener('click', skinChange, true);
	skinBrightness.addEventListener('touchstart', skinChange, true);
	skinBrightness.addEventListener('touchmove', skinChange, false);
	skinBrightness.addEventListener('mousedown', skinChange, false);
	skinBrightness.addEventListener('mousemove', skinChange, false);
	skinBrightness.addEventListener('mouseup', skinChange, false);

	hairColor = document.getElementById('hairColor');
	hairColor.addEventListener('change', hairChange, true);
	hairColor.addEventListener('click', hairChange, true);
	hairColor.addEventListener('touchstart', hairChange, true);
	hairColor.addEventListener('touchmove', hairChange, false);
	hairColor.addEventListener('mousedown', hairChange, false);
	hairColor.addEventListener('mousemove', hairChange, false);
	hairColor.addEventListener('mouseup', hairChange, false);

	hairBrightness = document.getElementById('hairBrightness');
	hairBrightness.addEventListener('change', hairChange, true);
	hairBrightness.addEventListener('click', hairChange, true);
	hairBrightness.addEventListener('touchstart', hairChange, true);
	hairBrightness.addEventListener('touchmove', hairChange, false);
	hairBrightness.addEventListener('mousedown', hairChange, false);
	hairBrightness.addEventListener('mousemove', hairChange, false);
	hairBrightness.addEventListener('mouseup', hairChange, false);

	hairStyle = document.getElementById('hairStyle');
	hairStyle.addEventListener('change', hairStyleChange, true);
	hairStyle.addEventListener('click', hairStyleChange, true);
	hairStyle.addEventListener('touchstart', hairStyleChange, true);
	hairStyle.addEventListener('touchmove', hairStyleChange, false);
	hairStyle.addEventListener('mousedown', hairStyleChange, false);
	hairStyle.addEventListener('mousemove', hairStyleChange, false);
	hairStyle.addEventListener('mouseup', hairStyleChange, false);

	shirtColor = document.getElementById('shirtColor');
	shirtColor.addEventListener('change', shirtChange, true);
	shirtColor.addEventListener('click', shirtChange, true);
	shirtColor.addEventListener('touchstart', shirtChange, true);
	shirtColor.addEventListener('touchmove', shirtChange, false);
	shirtColor.addEventListener('mousedown', shirtChange, false);
	shirtColor.addEventListener('mousemove', shirtChange, false);
	shirtColor.addEventListener('mouseup', shirtChange, false);

	shirtBrightness = document.getElementById('shirtBrightness');
	shirtBrightness.addEventListener('change', shirtChange, true);
	shirtBrightness.addEventListener('click', shirtChange, true);
	shirtBrightness.addEventListener('touchstart', shirtChange, true);
	shirtBrightness.addEventListener('touchmove', shirtChange, false);
	shirtBrightness.addEventListener('mousedown', shirtChange, false);
	shirtBrightness.addEventListener('mousemove', shirtChange, false);
	shirtBrightness.addEventListener('mouseup', shirtChange, false);

	pantsColor = document.getElementById('pantsColor');
	pantsColor.addEventListener('change', pantsChange, true);
	pantsColor.addEventListener('click', pantsChange, true);
	pantsColor.addEventListener('touchstart', pantsChange, true);
	pantsColor.addEventListener('touchmove', pantsChange, false);
	pantsColor.addEventListener('mousedown', pantsChange, false);
	pantsColor.addEventListener('mousemove', pantsChange, false);
	pantsColor.addEventListener('mouseup', pantsChange, false);

	pantsBrightness = document.getElementById('pantsBrightness');
	pantsBrightness.addEventListener('change', pantsChange, true);
	pantsBrightness.addEventListener('click', pantsChange, true);
	pantsBrightness.addEventListener('touchstart', pantsChange, true);
	pantsBrightness.addEventListener('touchmove', pantsChange, false);
	pantsBrightness.addEventListener('mousedown', pantsChange, false);
	pantsBrightness.addEventListener('mousemove', pantsChange, false);
	pantsBrightness.addEventListener('mouseup', pantsChange, false);
	
	shoeColor = document.getElementById('shoeColor');
	shoeColor.addEventListener('change', shoeChange, true);
	shoeColor.addEventListener('click', shoeChange, true);
	shoeColor.addEventListener('touchstart', shoeChange, true);
	shoeColor.addEventListener('touchmove', shoeChange, false);
	shoeColor.addEventListener('mousedown', shoeChange, false);
	shoeColor.addEventListener('mousemove', shoeChange, false);
	shoeColor.addEventListener('mouseup', shoeChange, false);

	shoeBrightness = document.getElementById('shoeBrightness');
	shoeBrightness.addEventListener('change', shoeChange, true);
	shoeBrightness.addEventListener('click', shoeChange, true);
	shoeBrightness.addEventListener('touchstart', shoeChange, true);
	shoeBrightness.addEventListener('touchmove', shoeChange, false);
	shoeBrightness.addEventListener('mousedown', shoeChange, false);
	shoeBrightness.addEventListener('mousemove', shoeChange, false);
	shoeBrightness.addEventListener('mouseup', shoeChange, false);
}

function eyeChange(ev){
	avatarEyes.setAttribute("style","-webkit-filter:hue-rotate(" + eyeColor.value + "deg) brightness(" + eyeBrightness.value + "%)")
}
function eyeStyleChange(ev){
	avatarEyes.setAttribute("src","images/avatar/avatar_eyes" + eyeStyle.value + ".png")
}
function skinChange(ev){
	avatarSkin.setAttribute("style","-webkit-filter:hue-rotate(" + skinColor.value + "deg) brightness(" + skinBrightness.value + "%)")
}
function hairChange(ev){
	avatarHair.setAttribute("style","-webkit-filter:hue-rotate(" + hairColor.value + "deg) brightness(" + hairBrightness.value + "%)")
}
function hairStyleChange(ev){
	avatarHair.setAttribute("src","images/avatar/avatar_hair" + hairStyle.value + ".png")
}
function shirtChange(ev){
	avatarShirt.setAttribute("style","-webkit-filter:hue-rotate(" + shirtColor.value + "deg) brightness(" + shirtBrightness.value + "%)")
}
function pantsChange(ev){
	avatarPants.setAttribute("style","-webkit-filter:hue-rotate(" + pantsColor.value + "deg) brightness(" + pantsBrightness.value + "%)")
}
function shoeChange(ev){
	avatarShoes.setAttribute("style","-webkit-filter:hue-rotate(" + shoeColor.value + "deg) brightness(" + shoeBrightness.value + "%)")
}
