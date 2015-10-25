import angular from 'angular';
require("../../templates/clouds.css");

function clouds() {
  return {
    restrict: 'AEC',
    scope: {},
    templateUrl: `./templates/clouds.html`
  }
}

export default angular.module('clouds', [])
  .directive('clouds', clouds)
  .name;
