require("../../libs/carouFredSel/jquery.carouFredSel-6.2.1-packed");

module.exports = function ($) {
  "use strict";
  var $carousel = $('#carousel'),
      $pager = $('#pager');

  addImages(window, $carousel, $pager);

  function getCenterThumb() {
    var $visible = $pager.triggerHandler('currentVisible');
    return Math.floor($visible.length / 2);
  }

  $carousel.carouFredSel({
    responsive: true,
    items: {
      visible: 1,
      width: 800,
      height: (500 / 800 * 100) + '%'
    },
    scroll: {
      fx: 'crossfade',
      onBefore: function (data) {
        var src = data.items.visible.first().attr('src');
        src = src.split('/large/').join('/small/');

        $pager.trigger('slideTo', [ 'img[src="' + src + '"]', -getCenterThumb() ]);
        $pager.find('img').removeClass('selected');
      },
      onAfter: function () {
        $pager.find('img').eq(getCenterThumb()).addClass('selected');
      }
    },
    prev: {
      button: "#prev_btn2",
      key: "left"
    },
    next: {
      button: "#next_btn2",
      key: "right"
    }
  });
  $pager.carouFredSel({
    width: '100%',
    auto: false,
    height: 120,
    items: {
      visible: 'odd'
    },
    onCreate: function () {
      var center = getCenterThumb();
      $pager.trigger('slideTo', [ -center, { duration: 0 } ]);
      $pager.find('img').eq(center).addClass('selected');
    }
  });
  $pager.find('img').click(function () {
    var src = $(this).attr('src');
    src = src.split('/small/').join('/large/');
    $carousel.trigger('slideTo', [ 'img[src="' + src + '"]' ]);
  });
};

function addImages(window, carousel, pager){
  var url = window.location.href.toString();
  var product = url.substring(url.indexOf('_') + 1, url.indexOf('.', url.indexOf('_')));
  var index;
  for (index = 1; index <= 6; index++) {
    carousel.append($('<img src="../../images/products/' + product + '/slide' + index + '.jpg" alt=""/>'));
    pager.append($('<img src="../../images/products/' + product + '/slide' + index + '.jpg" width="120" height="68" alt=""/>'));
  }
}






