angular.module('starter').controller('listTypeCtrl', function($scope, $state, deviceList, obj, objValue) {

    $scope.deviceList = deviceList;

    $scope.selectDevice = function(name) {
        obj[objValue].push(name);
        $state.go('publicSafety');
    }
});