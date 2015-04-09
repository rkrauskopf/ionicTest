// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/formTest')

      $stateProvider.state('publicSafety', {
        url: '/publicSafety',
        templateUrl: 'partials/publicSafety/publicSafety.html',
        controller: 'publicSafetyCtrl'
      });

      $stateProvider.state('listType', {
        url: '/listType',
        views123: {
          templateUrl: 'partials/listType/listType.html',
          controller: 'listTypeCtrl',
            resolve: {
              obj: function(publicSafety) {
                return publicSafety
              },
              objValue: function() {
                return 'devicesDamaged'
              }
            }
        }

      });

      $stateProvider.state('formTest', {
        url: '/formTest',
        templateUrl: 'partials/formTest/formTest.html',
        controller: 'formTestCtrl'
      });

    })
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

