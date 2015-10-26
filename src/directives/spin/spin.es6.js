import angular from 'angular';
require('spinkit/css/spinkit.css');

function spin() {
  return {
    restrict: 'AEC',
    scope: {},
    template: require('./spin.html')
  }
}

export default angular.module('spin', [])
  .directive('spin', spin)
  .name;
