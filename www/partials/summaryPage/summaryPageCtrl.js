angular.module('starter').controller('summaryPageCtrl', function($scope) {
    $scope.getMapTime = function getMapTimeFn() {
        //var origin = "Austin, Tx";
        var origin = new google.maps.LatLng(30.2500000, -97.7500000);
        var destination = new google.maps.LatLng(32.7767000, -96.7970000);

        //var destination = "Dallas, Tx";

        var service = new google.maps.DistanceMatrixService();

        var options = {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
        };

        service.getDistanceMatrix(options, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                alert('Error was: ' + status);
            }
            else {
                var results = response.rows[0].elements;
                console.log(results);
            }
        });
    };
});