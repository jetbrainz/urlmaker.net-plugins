(function($) {
	$(document).ready(function(){
		$.urlMakerOnLoad = function() {
			$('input#photoExternalUrl').urlMaker(
				{
					codeType: 'direct-link',
					resizeX: 600,
					resizeY: 600,
					hrefText: 'создать ссылку',
					callBack: function(target, string) {
						if (typeof $(target).get(0) != 'undefined') {
							$(target).val(string);
						}
					}
				}
			);
		}
		$('<script src="http://urlmaker.net/api/urlmaker.jquery.js"></script>').appendTo('head');
	});
})(jQuery);

