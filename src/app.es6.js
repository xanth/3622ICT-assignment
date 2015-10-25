import angular      from 'angular';
import uirouter     from 'angular-ui-router';
import uibootstrap  from 'angular-ui-bootstrap';
import ngFacebook   from 'ng-facebook';

require('angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.css');
require('angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js');

import clouds from './directives/clouds/clouds.es6.js';

import { facebookInit, facebookConfig } from './config/facebook.es6.js';
import   routes                         from './config/uirouter.es6.js';

import FacebookGraph   from './services/FacebookGraph.es6.js';

import SplashController from './controllers/SplashController.es6.js';
import HomeController   from './controllers/HomeController.es6.js';
import AlbumController  from './controllers/AlbumController.es6.js';

angular.module('app', ['ngFacebook', 'ui.bootstrap', 'ui.router', 'bootstrapLightbox', 'clouds'])
.run( facebookInit )
.config( facebookConfig )
.config( routes )
.constant('defaultObjectID', '815157038515764')
.service('FacebookGraph', FacebookGraph)
.controller('SplashController', SplashController)
.controller('HomeController', HomeController)
.controller('AlbumController', AlbumController);
