(function() {
    'use strict';

    describe('Karma/Mocha Unit POC Test',
        function() {
            var controller, $scope, $httpBackend;

            beforeEach(
                function() {
                    module('starter');
                    inject(function($controller, $rootScope, _$httpBackend_, $state, publicSafety) {
                        $scope = $rootScope.$new();
                        $httpBackend = _$httpBackend_;

                        controller = $controller('publicSafetyCtrl', {
                            $scope       : $scope,
                            $state       : $state,
                            publicSafety : publicSafety
                        });
                    });

                }
            );

            it('publicSafetyCtrl initializes as expected',
                function() {
                    //assert.equal(1,1);
                    expect($scope.publicSafety).to.equal('test');
                    expect('this').to.equal('this');
                }
            );
        }
    );
})();