import angular from 'angular';
require("./clouds.css");

function clouds() {
  return {
    restrict: 'AEC',
    scope: {},
    template: require('./clouds.html')
  }
}

export default angular.module('clouds', [])
  .directive('clouds', clouds)
  .name;
