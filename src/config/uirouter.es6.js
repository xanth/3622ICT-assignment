export default function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/splash');
  $stateProvider
    .state('splash', {
      url: '/splash',
      template: require('../../views/splash.html'),
      controller: 'SplashController',
      controllerAs: 'splash'
    })
    .state('home', {
      url: '/home',
      template: require('../../views/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('album', {
      url: '/album/:album',
      template: require('../../views/album.html'),
      controller: 'AlbumController',
      controllerAs: 'album'
    })
    .state('posts', {
      url: '/posts',
      template: require('../../views/posts.html'),
      controller: 'PostsController',
      controllerAs: 'posts'
    })
    .state('about', {
      url: '/about',
      template: require('../../views/about.html')
    })
    .state('docs', {
      url: '/docs',
      template: require('../../views/docs.html')
    });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
