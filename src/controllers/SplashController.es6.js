export default class SplashController {
    constructor($facebook, $state) {
        this.$facebook = $facebook;
        this.$state    = $state;

        this.welcomeMsg = 'Hi';
        this.isLoggedIn = false;
        this.refresh();
    }

    login() {
      this.$facebook.login().then(() => {
        this.refresh();
      });
    }

    refresh() {
      this.$facebook.api("/me").then(
        (response) => {
          this.welcomeMsg = `Welcome  ${response.name}`;
          this.isLoggedIn = true;
          this.$state.go('home')
        },
        (err) => {
          this.welcomeMsg = "Please log in";
          this.isLoggedIn = false;
        }
      );
    }
}

SplashController.$inject = ['$facebook', '$state'];
