facebookConfig.$inject = [`$facebookProvider`];

export function facebookConfig($facebookProvider) {
  $facebookProvider.setAppId(`904181319668743`);
}

facebookInit.$inject = [`$rootScope`];

export function facebookInit($rootScope) {
  // Load the facebook SDK asynchronously
  (() => {
    // If we've already installed the SDK, we're done
    if (document.getElementById('facebook-jssdk')) {return;}

    // Get the first script element, which we'll use to find the parent node
    var firstScriptElement = document.getElementsByTagName('script')[0];

    // Create a new script element and set its id
    var facebookJS = document.createElement('script');
    facebookJS.id = 'facebook-jssdk';

    // Set the new script's source to the source of the Facebook JS SDK
    facebookJS.src = 'https://connect.facebook.net/en_US/all.js';

    // Insert the Facebook JS SDK into the DOM
    firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
}
