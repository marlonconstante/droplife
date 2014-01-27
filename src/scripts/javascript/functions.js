module.exports = function (jQuery) {
  "use strict";

  jQuery("#back-top").hide();

  // fade in #back-top
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 700) {
        jQuery('#back-top').fadeIn();
      } else {
        jQuery('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    jQuery('#back-top').find('a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // scroll body to 0px on click
    jQuery('a#gotop2').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    var body = jQuery('body').innerHeight();
    jQuery(".scroll").click(function (event) {
      event.preventDefault();
      jQuery('html,body').animate({scrollTop: jQuery(this.hash).offset().top - body}, 1500);
    });


  });
};