export default class MenuController {
    constructor($facebook, $state, $scope) {
      $scope.logout = this.logout;
    }

    logout(){
      $facebook.logout()
      $state.go('splash')
    }
}

MenuController.$inject = ['$facebook', '$state', '$scope'];
