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
