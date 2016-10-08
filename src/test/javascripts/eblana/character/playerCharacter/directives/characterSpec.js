describe("eblana.character.playerCharacter module", function() {
    var scope;

    beforeEach(angular.mock.module("eblana.character.playerCharacter", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("character directive", function() {
        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<character></character>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});