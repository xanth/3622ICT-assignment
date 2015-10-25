export default class SplashController {
    constructor($scope, $facebook) {
        this.$facebook = $facebook;
        this.$scope = $scope;

        this.$scope.isLoggedIn = false;
        this.$scope.login = function() {
          this.$facebook.login().then(function() {
            this.refresh();
          });
        }
        this.refresh();
    }

    refresh() {
      this.$facebook.api("/me").then(
      function(response) {
        this.$scope.welcomeMsg = "Welcome " + response.name;
        this.$scope.isLoggedIn = true;
      },
      function(err) {
        this.$scope.welcomeMsg = "Please log in";
      });
    }
}

SplashController.$inject = ['$scope', '$facebook'];
