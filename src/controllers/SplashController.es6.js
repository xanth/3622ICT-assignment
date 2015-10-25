export default class SplashController {
    constructor($scope, $facebook) {
        this.$facebook = $facebook;
        this.$scope = $scope;

        this.$scope.isLoggedIn = false;
        this.$scope.login = () => {
          this.$facebook.login().then(() => {
            this.refresh(this.$scope);
          });
        }
        this.refresh(this.$scope);
    }

    refresh($scope) {
      this.$facebook.api("/me").then(
        (response) => {
          $scope.welcomeMsg = `Welcome  ${response.name}`;
          $scope.isLoggedIn = true;
        },
        (err) => {
          $scope.welcomeMsg = "Please log in";
        }
      );
    }
}

SplashController.$inject = ['$scope', '$facebook'];
