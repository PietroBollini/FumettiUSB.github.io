(function (window) {

	//// TOC Toggling //////////////////////////////////////////////////////////////////////////////////////////////////

	window.onhashchange=function () {
		window.document.getElementById("toggle").checked=false;
	};


	document.onscroll=function (e){

		if ( document.documentElement.scrollTop > 10 ) {
			document.body.classList.add("scrolled")
		} else {
			document.body.classList.remove("scrolled")
		}

	};

	//// browser-specific css selectors (eg html[data-useragent*='MSIE 10.0']) /////////////////////////////////////////

	document.documentElement.setAttribute('data-useragent', navigator.userAgent);

})(window);
