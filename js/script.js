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
});

var $slides = document.querySelector('#slides');
  if($slides !== null){
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
  }


// IIFE
(function(){
  'use strict';
  angular .module('My-App',[])// declarando una aplicacion
          .controller('ListProductController', function($scope){
            $scope.title = 'Lista de Productos';

            $scope.products = [
              {
                id:1,
                title:'asdfsdf1',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample57.jpg',
                precio: 4000,
                description:'asdfasdf asdf sadf ;lkjasdf l;ksadfj  sad;lkfjsad;flkasjdf'
              },
              {
                id:2,
                title:'asdfsdf2',
                image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample57.jpg',
                precio: 14000,
                description:'asdfasdf asdf sadf ;lkjasdf l;ksadfj  sad;lkfjsad;flkasjdf'
              }
            ];
          })
          .controller('NavigationController', function($scope){

          })
          .controller('FeaturedProductController', function($scope){
            $scope.title = 'Productos Destacados';

            $scope.featuredProducts=[
              {
                id:1,
                title:'alalalallala 1',
                imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample98.jpg',
                precio:300,
                rate:2
              },
              {
                id:2,
                title:'alalalallala 2',
                imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample98.jpg',
                precio:1000,
                rate:1
              },
              {
                id:3,
                title:'alalalallala 3',
                imagen:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample98.jpg',
                precio:560,
                rate:5
              }
            ];

          })
          .controller('ProductDetail',function($scope){

            $scope.product ={
              title : 'asdfasdfasdfasdf',
              description : 'asdfasdfasdf sadfa sdfasd fasdf asdf asdf ',
              imagen1 : 'http://loremflickr.com/320/240?random=1',
              imagen2 : 'http://loremflickr.com/320/240?random=2',
              imagen3 : 'http://loremflickr.com/320/240?random=3',
              imagen4 : 'http://loremflickr.com/320/240?random=4',
              imagen5 : 'http://loremflickr.com/320/240?random=5',
              price : 400,
              date : '30/11/2016',
              rating : 0,
              featured: true
            };
          });
})();
