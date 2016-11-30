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

            $scope.products = [
              {
                id:1,
                title:'asdfsdf1',
                image: 'asdfasdfsadf',
                precio: 4000,
                description:'asdfasdf asdf sadf ;lkjasdf l;ksadfj  sad;lkfjsad;flkasjdf'  
              },
              {
                id:2,
                title:'asdfsdf2',
                image: 'asdfasdfsadf',
                precio: 14000,
                description:'asdfasdf asdf sadf ;lkjasdf l;ksadfj  sad;lkfjsad;flkasjdf'  
              }

            ]
            
          })
          .controller('NavigationController', function($scope){

          })
          .controller('FeaturedProductController', function($scope){
            $scope.title = 'Productos Destacados';

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
            }
          })


})();
