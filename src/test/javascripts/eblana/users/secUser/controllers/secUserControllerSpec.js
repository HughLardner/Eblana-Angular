describe("eblana.users.secUser module", function() {
    var scope;

    beforeEach(angular.mock.module("eblana.users.secUser", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("SecUserController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("SecUserController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
