(function (window) {

	//// TOC Toggling //////////////////////////////////////////////////////////////////////////////////////////////////

	window.onhashchange=function () {
		window.document.getElementById("toggle").checked=false;
	};


	//// browser-specific css selectors (eg html[data-useragent*='MSIE 10.0']) /////////////////////////////////////////

	document.documentElement.setAttribute('data-useragent', navigator.userAgent);

})(window);


