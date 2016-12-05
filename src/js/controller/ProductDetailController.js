var app = require('../Myapp');

app.controller('ProductDetail',function($scope){

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