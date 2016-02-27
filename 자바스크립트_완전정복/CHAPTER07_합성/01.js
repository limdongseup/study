function SimpleGalery(selector) {
    this.$images = $(selector);
}

// 이미지 정렬 기능
SimpleGalery.prototype.align = function() {
    horizontalAlignable.align.(this.$images);
};

var horizontalAlignable = {
    align : function($images) {
        var length = $images.length;

        for(var i = 0 ; i < length ; i++) {
            var x = i * 200;

            $images.eq(i).css({
                left : x,
                top : 0
            });
        }
    }
};

$(function() {
    var gallery1 = new SimpleGallery('#container1 img');

    gallery1.align();
});