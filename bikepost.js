(function($) {
	$(document).ready(function(){
		$.urlMakerOnLoad = function() {
			$('textarea.markItUpEditor').urlMaker(
				{
					bindTo: 'li.editor-image',
					codeType: 'image',
					resizeX: 800,
					resizeY: 800,
					codePrepend: '<center>',
					codeAppend: '</center>'
				}
			);
		}
		$('li.editor-image').unbind('mouseup');
		$('<script src="http://urlmaker.net/api/urlmaker.jquery.js"></script>').appendTo('body');
	});
})(jQuery);

