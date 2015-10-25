export default function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/splash');
  $stateProvider
    .state('splash', {
      url: '/splash',
      template: require('../../partials/splash.html'),
      controller: 'SplashController',
      controllerAs: 'splash'
    });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
