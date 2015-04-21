// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/googleMapPlugin')

      $stateProvider.state('embeddedGoogleMapTest', {
        url: '/embeddedGoogleMapTest',
        templateUrl: 'partials/embeddedGoogleMapTest/embeddedGoogleMapTest.html',
        controller: 'embeddedGoogleMapTestCtrl'
      });

      $stateProvider.state('googleMapPlugin', {
        url: '/googleMapPlugin',
        templateUrl: 'partials/googleMapPlugin/googleMapPlugin.html',
        controller: 'googleMapPluginCtrl'
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
    .run(function($ionicPlatform, $cordovaPush, $rootScope) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

        //Configure an android device for push notifications
        var androidConfig = {
          "senderID": "595286717495"
        };

        $cordovaPush.register(androidConfig).then(function(result) {
          // Success
          console.log('Success = ' + result);
        }, function(err) {
          // Error
          console.log('Error = ' + error);
        });

        $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
          switch(notification.event) {
            case 'registered':
              if (notification.regid.length > 0 ) {
                alert('registration ID = ' + notification.regid);
              }
              break;

            case 'message':
              // this is the actual push notification. its format depends on the data model from the push server
              alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
              break;

            case 'error':
              alert('GCM error = ' + notification.msg);
              break;

            default:
              alert('An unknown GCM event has occurred');
              break;
          }
        });
      });
    });

