angular.module('starter').controller('externalMapLaunchCtrl', ['$scope', 'mapData', function ($scope, mapData) {


  $scope.launchDeviceMap = function ($scope) {

    if (ionic.Platform.isIOS()) {
      var newData = mapData.build("apple", "Vancouver", "Toronto", "10");
      window.open(newData.generateQueryUrl());
    }
    else if (ionic.Platform.isAndroid()) {
      var newData = mapData.build("google", "Vancouver", "Toronto", "10");
      window.open(newData.generateQueryUrl());
    }
    //Windows or Browser platform
    else {
      var newData = mapData.build("nothing", "Vancouver", "Toronto", "10");
    }
  };

}]);

angular.module('starter').factory('mapData', function () {

  // Available maps for mapData
  var possibleMapType = ['apple', 'google'];
  // Static variable for the possibleMapType
  mapData.possibleMapType = angular.copy(possibleMapType);

  // URL Scheme for generating the url for map
  var mapTypes = {
      apple: {
        url: "maps://maps.apple.com/",
        from: "saddr",
        to: "daddr",
        zoom: "z",
        query: "q"
      },
      google: {
        url: "http://maps.google.com/maps",
        from: "saddr",
        to: "daddr",
        zoom: "z",
        query: "q"
      }
    };

  // Constructor
  function mapData(mapType, sourceAddress, desAddress, zoom) {
    this.mapType = mapType;
    this.sourceAddress = sourceAddress;
    this.desAddress = desAddress;
    this.zoom = zoom;
  }

  // Getting for the mapType
  mapData.prototype.getMapType = function () {
    return this.mapType;
  };

  // Generate the url according to the data
  mapData.prototype.generateQueryUrl = function () {

    var outputUrl, location;
    var qs = "?";

    if (this.mapType) {
      outputUrl = mapTypes[this.mapType].url;
    }
    else {
      return;
    }

    if (this.sourceAddress && this.desAddress) {
      qs += mapTypes[this.mapType].from + "=" + encodeURIComponent(this.sourceAddress) + "&";
      qs += mapTypes[this.mapType].to + "=" + encodeURIComponent(this.desAddress) + "&";
    }
    else if (this.sourceAddress || this.desAddress) {
      location = this.sourceAddress ? this.sourceAddress : this.desAddress;
      qs += mapTypes[this.mapType].query + "=" + encodeURIComponent(location)  + "&";
    }

    if (this.zoom) {
      qs += mapTypes[this.mapType].zoom + "=" + encodeURIComponent(this.zoom);
    }

    return outputUrl + qs;
  };

  // Verify if the mapType is supported
  function checkMapType(mapType) {
    return possibleMapType.indexOf(mapType) !== -1;
  }

  // Create the mapData with values
  mapData.build = function (mapType, sourceAddress, desAddress, zoom) {
    if (!checkMapType(mapType)) {
      return;
    }

    return new mapData(
      mapType,
      sourceAddress,
      desAddress,
      zoom
    );
  };

  return mapData;

});