(function($) {
    function TabMenu(target, options) {
        var self = this;

        self._options = {
            showMore : 'show',
            cookieName : 'CM',
            size : '600'
        };

        $.extend(true, self._options, options);

        self._$container = null;
        self._$tabBtn = null;
        self._$clickItem = null;

        self._init(target);
        self._initEventListener();
        self._setSize();
    }

    TabMenu.prototype._init = function(target) {
        var self = this;

        self._$container = target;
        self._$tabBtn = self._$container.find('dt button');

        self._insertDataAttribute();
        self._tabSelect(self._getCookie(self._options.cookieName));
        self._$container.find('.more')[self._options.showMore]();

        if(!self._getCookie(self._options.cookieName)) {
            self._setCookie(self._options.cookieName, 0);
        }
    };

    TabMenu.prototype._initEventListener = function() {
        var self = this;

        self._$tabBtn.on('click', function() {
            if(self._$clickItem !== null) {
                self._removeClass(self._$clickItem);
            }

            self._addClass($(this));

            self._$clickItem = $(this);

            self._setCookie(self._options.cookieName,$(this).data('num'));
        });
    };

    TabMenu.prototype._addClass = function($item) {
        $item.closest('dl').addClass('on');
    };

    TabMenu.prototype._removeClass = function($item) {
        $item.closest('dl').removeClass('on');
    };

    TabMenu.prototype._tabSelect = function(num) {
        var self = this,
            $button = self._$container.find('dl:eq(' + num + ') dt button');

        self._addClass($button);
        self._$clickItem = $button;
    };

    TabMenu.prototype._insertDataAttribute = function() {
        var self = this;

        $.each(self._$tabBtn, function(index) {
            $(this).data('num', index);
        });
    };

    TabMenu.prototype._setCookie = function(name, value) {
        var cookie = name + '=' + value;

        document.cookie = cookie;
    };

    TabMenu.prototype._getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
        }
        return "";
    };

    TabMenu.prototype._setSize = function() {
        var self = this,
            size = 0;

        size = self._$tabBtn.width() * self._$tabBtn.length;

        if(self._options.size >= size + 100) {
            self._$container.css({
                'width' : self._options.size + 'px'
            });
        }
    };

    $.fn.tabMenu = function(options) {
        $.each($(this), function() {
            new TabMenu($(this), options);
        });
    };


    $(function() {
        $('.tabMenu').tabMenu({
            showMore : 'show', // show or hide
            size : '360', // size > tabwidth * length
        });

        $('.tabMenu2').tabMenu({
            showMore : 'show', // show or hide
            size : '360', // size > tabwidth * length
            cookieName : 'CM2'
        });
    });
})(jQuery);