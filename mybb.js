(function() {

    var plugin = function($) {
        $(document).ready(function() {
            $.urlMakerOnLoad = function() {
                $('div.messageEditor').css('height', (parseInt($('div.messageEditor').css('height'))+40)+'px');
                $('#message, textarea#message_new').urlMaker(
                        {
                            prepend: '<ul><li>',
                            append: '</li></ul>',
                            codeType: 'bbcode-preview',
                            hrefText: 'Add Image',
                            resizePreview: 300
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
		    var $jq = jQuery.noConflict();
                    done = true;
                    plugin(jQuery);
                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                }
                ;
            };
            head.appendChild(script);
        }
        ;

        getJQueryScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    } else {
        plugin(jQuery);
    }

}());
