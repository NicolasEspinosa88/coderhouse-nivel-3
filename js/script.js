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
    })
});


// IIFE
(function(){
  'use strict';
  angular .module('My-App',[])// declarando una aplicacion
          .controller('ListProductController', function($scope){
            $scope.title = 'Lista de Productos';
            
          })
          .controller('NavigationController', function($scope){

          })
          .controller('FeaturedProductController', function($scope){
            $scope.title = 'Productos Destacados';

          })
          .controller('ProductDetail',function($scope){

            $scope.title = 'asdfasdfasdfasdf'
            $scope.description = 'asdfasdfasdf sadfa sdfasd fasdf asdf asdf ';
            $scope.imagen1 = 'http://loremflickr.com/320/240?random=1';
            $scope.imagen2 = 'http://loremflickr.com/320/240?random=2';
            $scope.imagen3 = 'http://loremflickr.com/320/240?random=3';
            $scope.imagen4 = 'http://loremflickr.com/320/240?random=4';
            $scope.imagen5 = 'http://loremflickr.com/320/240?random=5';
            $scope.price = 400;
            $scope.date = '30/11/2016';
            $scope.rating = 0;
          })


})();
