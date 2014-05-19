(function () {
	'use strict';
	angular.module('adventureEditor', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/state1');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html'
			});
	});
})();