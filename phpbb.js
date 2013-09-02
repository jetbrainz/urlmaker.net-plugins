(function() {

var plugin = function($) {
	$(document).ready(function(){
		$.urlMakerOnLoad = function() {
			$('input[name=addbbcode14]')
				.clone()
				.attr('name', 'urlmaker')
				.attr('value', 'Upload Img')
				.removeAttr('accesskey')
				.removeAttr('onclick')
				.removeAttr('onmouseover')
				.unbind('click')
				.unbind('hover')
				.css({width: '70px'})
				.insertAfter('input[name=addbbcode14]');
			$('textarea[name=message]').urlMaker(
				{
					bindTo: 'input[name=urlmaker]',
					codeType: 'bbcode-preview'
				}
			);
		}
		$('<script src="http://urlmaker.net/api/urlmaker.jquery.js"></script>').appendTo('body');
	});
};

if (typeof jQuery == 'undefined') {
	function getJQueryScript(url)
	{
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		var head = document.getElementsByTagName('head')[0], done = false;
		head.appendChild(script);
		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				done = true;
				plugin(jQuery);
				script.onload = script.onreadystatechange = null;
				head.removeChild(script);
			};
		};
		head.appendChild(script);
	};
	
	getJQueryScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
} else {
	plugin(jQuery);
}

}());
