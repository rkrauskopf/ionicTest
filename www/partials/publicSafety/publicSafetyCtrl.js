angular.module('starter').controller('publicSafetyCtrl', function($scope, $state, publicSafety) {
    $scope.goToListType = function goToListTypeFn() {
        $state.go('listType');
    };

    $scope.publicSafety = 'test';
    //$scope.publicSafety = publicSafety;

});