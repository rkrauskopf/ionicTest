// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/app/embeddedGoogleMapTest')

      $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'partials/menu/menu.html',
        controller: 'MenuCtrl'
      });

      $stateProvider.state('app.embeddedGoogleMapTest', {
        url: '/embeddedGoogleMapTest',
        views: {
          'menuContent': {
            templateUrl: 'partials/embeddedGoogleMapTest/embeddedGoogleMapTest.html',
            controller: 'embeddedGoogleMapTestCtrl'
          }
        }
      });

      $stateProvider.state('app.googleMapPlugin', {
        url: '/googleMapPlugin',
        views: {
          'menuContent': {
            templateUrl: 'partials/googleMapPlugin/googleMapPlugin.html',
            controller: 'googleMapPluginCtrl'
          }
        }
      });

      $stateProvider.state('app.externalMapLaunch', {
        url: '/externalMapLaunch',
        views: {
          'menuContent': {
            templateUrl: 'partials/externalMapLaunch/externalMapLaunch.html'
          }
        }
      });

      $stateProvider.state('summaryPage', {
        url: '/summaryPage',
        templateUrl: 'partials/summaryPage/summaryPage.html',
        controller: 'summaryPageCtrl'
      });

      $stateProvider.state('orderList', {
        url: '/orderList',
        templateUrl: 'partials/orderList/orderList.html',
        controller: 'orderListCtrl'
      });

      $stateProvider.state('formTest', {
        url: '/formTest',
        templateUrl: 'partials/formTest/formTest.html',
        controller: 'formTestCtrl'
      });

      $stateProvider.state('publicSafety', {
        url: '/publicSafety',
        templateUrl: 'partials/publicSafety/publicSafety.html',
        controller: 'publicSafetyCtrl'
      });

      $stateProvider.state('listType', {
        url: '/listType',
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
      });

    })
    .run(function($ionicPlatform, $rootScope) {
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

