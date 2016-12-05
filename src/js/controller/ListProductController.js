var app = require('../Myapp');

app.controller('ListProductController', function($scope){
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