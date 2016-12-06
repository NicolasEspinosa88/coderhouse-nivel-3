var app = require('./Myapp');

app
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state({
				name: 'productList',
				url: '/list',
				controller: 'ListProductController',
				templatUrl: '../views/listProducts.html'
			})
			.state({
				name:'404',
				url: '/404',
				templateUrl: '<h1>PAGINA NO EXISTE</h1>'
			})
		$urlRouterProvider.otherwise('/404')
	})	