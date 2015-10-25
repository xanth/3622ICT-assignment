const _           = require('lodash');
const angular     = require('angular');
const ngFacebook  = require('ng-facebook');

import { facebookInit, facebookConfig } from './config.es6.js';

import clouds           from './directives/clouds.es6.js';
import SplashController from './controllers/SplashController.es6.js';

angular.module('app', ['ngFacebook', 'clouds'])
.config( facebookConfig )
.run( facebookInit )
.controller('SplashController', SplashController);
