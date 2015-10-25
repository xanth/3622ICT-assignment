export default class SplashController {
    constructor($scope, $facebook) {
        this.$scope = $scope;
        $scope.isLoggedIn = false;
        $scope.login = function() {
          $facebook.login().then(function() {
            refresh();
          });
        }
        function refresh() {
        $facebook.api("/me").then(
          function(response) {
            $scope.welcomeMsg = "Welcome " + response.name;
            $scope.isLoggedIn = true;
          },
          function(err) {
            $scope.welcomeMsg = "Please log in";
        });
  }

  refresh();
    }
}

SplashController.$inject = ['$scope', '$facebook'];
