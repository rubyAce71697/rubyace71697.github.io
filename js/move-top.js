/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($) {
    $.fn.UItoTop = function(options) {
        var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1000, easingType: 'linear' },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;
        $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        $(containerIDhash).hide().on('click.UItoTop', function() {
            console.log('------------------------------------');
            console.log("hiding the button");
            console.log('------------------------------------');
            $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);

            $('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType);




            return false;
        }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() { $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear'); },

            function() { $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear'); });



        $(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") { $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 }); }
            if (sd > settings.min) {
                $(containerIDhash).fadeIn(settings.inDelay);
                $("#img-banner").fadeIn(settings.inDelay);
                console.log('------------------------------------');
                console.log("iding");
                console.log('------------------------------------');

            } else {
                console.log('------------------------------------');
                console.log("showing");
                console.log('------------------------------------');
                $(containerIDhash).fadeOut(settings.Outdelay);
                $("#img-banner").fadeOut(settings.inDelay);

            }

        });
    };
})(jQuery);