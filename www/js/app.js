// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
          //intent: 'INTENT' // send SMS inside a default SMS app
      }
    };

    $cordovaSms
      .send('3614539048', 'SMS content', options)
      .then(function() {
        alert('Success');
        // Success! SMS was sent
      }, function(error) {
        // An error occurred
        alert('failure');
      });

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('tabs', {
      url : '/tab',
      abstract : true,
      templateUrl : 'templates/tabs.html'
    })

      //This is the route for the SignIn Page
     .state('tabs.signIn', {
      url : '/signIn',
      views : {
        'signIn-tab' : {
            templateUrl : 'templates/form_signin.html'
        }
      }
    })

     .state('tabs.signUp', {
       url : '/signUp',
       views : {
        'signUp-tab' : {
          templateUrl : 'templates/form_signup.html'
        }
       }
     })

//--------------The Routing Rules For the Menu Page are defined here---------------------------

$stateProvider
    .state('menu', {
      url : '/menu',
      abstract : true,
      templateUrl : 'templates/sideMenu.html'
    })

     .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'dashboard-page': {
        templateUrl: 'templates/content.html'
      }
     }
  })
    
    .state('menu.payment', {
       url : '/payment',
       views : {
        'dashboard-page' : {
          templateUrl : 'templates/payment.html'
        }
       }
     })


    .state('menu.payhistory', {
       url : '/payhistory',
       views : {
        'dashboard-page' : {
          templateUrl : 'templates/pay_history.html'
        }
       }
     })


    .state('menu.complaint', {
       url : '/complaint',
       views : {
        'dashboard-page' : {
          templateUrl : 'templates/complaint.html'
        }
       }
     })

//----------------------The Routing rules for the "Menu Pages" End Here--------------------------


//---------------The Routing states if URL provided that does not exist in this page happens, direct to the login page----
     $urlRouterProvider.otherwise('/tab/signIn');
//-------------------------------------------------------------------------------------------------------------------------     
})