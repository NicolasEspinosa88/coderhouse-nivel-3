jQuery(document).ready(function($) {
  $('.rating .star').hover(function() {
    $(this).addClass('to_rate');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
  }).mouseout(function() {
    $(this).parent().find('.star').removeClass('to_rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
  }).click(function() {
    $(this).removeClass('to_rate').addClass('rated');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
    /*Save your rate*/
    /*TODO*/
    });
  var $slides = document.querySelector('#slides');
  var $slidesControls = Array.from(document.querySelectorAll('#slides_controls input'));
  var $slideWidth = document.querySelector('#slide_width');
  var $slidesVisible = document.querySelector('#slides_visible');


  $slidesControls.forEach(function (element, index) {
    element.addEventListener('change', function () {
      document.documentElement.style.setProperty('--slide', index);
    });
  });

  $slideWidth.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
      document.documentElement.style.setProperty('--slideWidth', this.value + 'px');
    }
  });

  $slidesVisible.addEventListener('input', function () {
    document.documentElement.style.setProperty('--slidesVisible', this.value);
  });
});

