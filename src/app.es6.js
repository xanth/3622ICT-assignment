import lodash       from 'lodash';
import angular      from 'angular';
import uirouter     from 'angular-ui-router';
import ngFacebook   from 'ng-facebook';

import { facebookInit, facebookConfig } from './config/facebook.es6.js';
import   routes                         from './config/uirouter.es6.js';

import clouds           from './directives/clouds.es6.js';
import SplashController from './controllers/SplashController.es6.js';

angular.module('app', ['ngFacebook', 'ui.router', 'clouds'])
.config( facebookConfig )
.config( routes )
.run( facebookInit )
.controller('SplashController', SplashController);
