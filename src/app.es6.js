import angular      from 'angular';
import uirouter     from 'angular-ui-router';
import uibootstrap  from 'angular-ui-bootstrap';
import ngFacebook   from 'ng-facebook';

require('angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.css');
require('angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js');
require('../styles/main.css');

import { facebookInit, facebookConfig } from './config/facebook.es6.js';
import   routes                         from './config/uirouter.es6.js';

import   spin                           from './directives/spin/spin.es6.js';

import FacebookGraph   from './services/FacebookGraph.es6.js';

import SplashController from './controllers/SplashController.es6.js';
import HomeController   from './controllers/HomeController.es6.js';
import AlbumController  from './controllers/AlbumController.es6.js';
import PostsController  from './controllers/PostsController.es6.js';
import MenuController   from './controllers/MenuController.es6.js';

angular.module('app', ['ngFacebook', 'ui.bootstrap', 'ui.router', 'bootstrapLightbox', 'spin'])
.run( facebookInit )
.config( facebookConfig )
.config( routes )
.constant('defaultObjectID', '815157038515764')
.service('FacebookGraph', FacebookGraph)
.controller('SplashController', SplashController)
.controller('HomeController', HomeController)
.controller('AlbumController', AlbumController)
.controller('PostsController', PostsController)
.controller('MenuController', MenuController);
