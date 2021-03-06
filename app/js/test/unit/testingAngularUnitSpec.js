describe('Testing AngularJS Test Suite', function(){

    beforeEach(module('testingAngularApp'));

    describe('Testing AngularJS Controller', function(){
        var scope = {};
        var ctrl;
        beforeEach(inject(function($controller){
            ctrl = $controller('testingAngularCtrl', {$scope:scope})
        }));
        afterEach(function(){
            //Cleanup
        })
        it('should initialize the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('tea bag');
        });
    });
});