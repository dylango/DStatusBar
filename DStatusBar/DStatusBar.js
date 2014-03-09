var DStatusBar = (function(){
	var barDOM = document.createElement('div'),
		showBar = function(evt){
			var tgt = evt.target;
			if (tgt.tagName==='A' && !!tgt.href) {
				barDOM.textContent = tgt.href;
				barDOM.style.opacity='0.85';
			}
		},
		hideBar = function(){
			barDOM.style.opacity='0';
		};
	barDOM.setAttribute('id', 'DStatusBar');
	barDOM.setAttribute('style', 'background-color:#ddd;border-radius:7px 7px 0 0;bottom:0;color:#000;font-family:Arial;font-size:9px;left:7px;letter-spacing:0;line-height:1;margin:0;opacity:0;padding:4px 8px 2px;position:fixed;transition:opacity 400ms;z-index:999999999');
	document.body.appendChild(barDOM);
	document.addEventListener('mouseover', showBar);
	document.addEventListener('mouseout', hideBar);
})();
