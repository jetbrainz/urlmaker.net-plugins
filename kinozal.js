(function($) {
	$(document).ready(function(){
		$.urlMakerOnLoad = function() {
			setInterval(function() {
				if (typeof $('table.up_bblist_cnt td.up_bblist_val input').get(0) != 'undefined') {
					$('table.up_bblist_cnt td.up_bblist_val input').each (function() {
						if ($(this).data('events') && $(this).data('events').click && $(this).data('events').click.length) return;
						$(this).urlMaker(
							{
								bindTo: this,
								codeType: 'link-view',
								resizePreview: 320,
								resizeX: null,
								resizeY: null,
								callBack: function(target, string) {
									if (typeof $(target).get(0) != 'undefined') {
										$(target).val(string);
										$(target).parent().siblings('td').find('input').val(
											string.replace(/view\/img/, 'img/thumb')
										);
									}
								}
							}
						);
					});
				}
				if (typeof $('div.up_bblist_inp textarea.up').get(0) != 'undefined') {
					var el = $('div.up_bblist_inp textarea.up');
					if ($(el).data('events') && $(el).data('events').click && $(el).data('events').click.length) return;
					$(el).urlMaker(
						{
							bindTo: el,
							codeType: 'bbcode-preview',
							resizePreview: 320,
							resizeX: null,
							resizeY: null,
							callBack: function(target, string) {
								if (typeof $(target).get(0) != 'undefined') {
									$(target).val( $(target).val() + "\n" + string);
								}
							}
						}
					);
				}
			}, 100);
		}
		$('<script src="http://urlmaker.net/api/urlmaker.jquery.js"></script>').appendTo('body');
	});
})(jQuery);

