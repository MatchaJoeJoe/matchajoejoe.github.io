var tt = null, ii = null, imgs = [], current = 0;
window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	var c = document.getElementById('images'),
		i;
		
	imgs = c.getElementsByTagName('img');
	current = imgs[0];
		
	for (i = 0; i < imgs.length; i++) { 
		
		imgs[i].onmouseover = function() {
			var self = this; 
		
			var img = new Image();
			img.src = this.src.replace(/t\.png/, '.png');

			if (tt) {
				window.clearTimeout(tt);
				tt = null;
			}
			
			if (ii) {
				window.clearInterval(ii);
				ii = null;
			}
			
			tt = window.setTimeout(
				function() {
					var doc = document.getElementById('image');
					doc.innerHTML = '<div align="center" style="padding-top: 200px;"><img src="images/loading.gif" align="absmiddle">&nbsp;&nbsp;Loading ...</div>';
	
					if (!img.complete) {
						ii = window.setInterval(
							function() {
								if (img.complete) {
									doc.innerHTML = '';
									doc.appendChild(img);
									
									window.clearInterval(ii);
								}
							},
							10
						);
					} else {
						doc.innerHTML = '';
						doc.appendChild(img);
					}
					
					self.className = 'current';
					current.className = null;
					
					current = self;
				},
				10
			);
		}
		
	}
	
	imgs[0].onmouseover();
}