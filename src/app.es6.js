const _           = require('lodash');
const angular     = require('angular');
const ngFacebook  = require('ng-facebook');

import SplashController from './controllers/SplashController.es6.js';

import { facebookInit, facebookConfig } from './config.es6.js';

angular.module('app', ['ngFacebook'])
.config( facebookConfig )
.run( facebookInit )
.controller('SplashController', SplashController);
