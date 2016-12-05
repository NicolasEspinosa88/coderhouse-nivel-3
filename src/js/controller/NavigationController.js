var app = require('../Myapp');

app.controller('NavigationController', function($scope){

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