angular.module('starter').controller('externalMapLaunchCtrl', ['$scope', 'mapData', function ($scope, mapData) {


  $scope.launchDeviceMap = function ($scope) {

    if (ionic.Platform.isIOS()) {

      var newData = new mapData("apple", "Vancouver", "Toronto", "10");
      window.open(newData.generateQueryUrl());

    }
    else if (ionic.Platform.isAndroid()) {

      var newData = new mapData("google", "Vancouver", "Toronto", "10");
      window.open(newData.generateQueryUrl());

    }

    return;

  };

}]);

angular.module('starter').factory('mapData', function () {

  var possibleMapType = ['apple', 'google'];
  mapData.possibleMapType = angular.copy(possibleMapType);

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

  function mapData(mapType, sourceAddress, desAddress, zoom) {
    this.mapType = mapType;
    this.sourceAddress = sourceAddress;
    this.desAddress = desAddress;
    this.zoom = zoom;
  }

  mapData.prototype.getMapType = function () {
    return this.mapType;
  }

  mapData.prototype.generateQueryUrl = function () {

    var outputUrl, location;
    var qs = "?";

    if (this.mapType) {
      outputUrl = mapTypes[this.mapType].url;
    } else {
      return;
    }

    if (this.sourceAddress && this.desAddress) {
      qs += mapTypes[this.mapType].from + "=" + encodeURIComponent(this.sourceAddress) + "&";
      qs += mapTypes[this.mapType].to + "=" + encodeURIComponent(this.desAddress) + "&";
    } else if (this.sourceAddress || this.desAddress) {


      location = this.sourceAddress ? this.sourceAddress : this.desAddress;

      qs += mapTypes[this.mapType].query + "=" + encodeURIComponent(location)  + "&";

    }

    if (this.zoom) {
      qs += mapTypes[this.mapType].zoom + "=" + encodeURIComponent(this.zoom);
    }

    return outputUrl + qs;
  }

  function checkMapType(mapType) {
    return possibleMapType.indexOf(mapType) !== -1;
  }

  mapData.build = function (data) {
    if (!checkMapType(data.mapType)) {
      return;
    }

    return new mapData(
      data.mapType,
      data.sourceAddress,
      data.desAddress,
      data.zoom
    );
  };

  return mapData;

})