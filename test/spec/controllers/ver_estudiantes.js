'use strict';

describe('Controller: VerEstudiantesCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var VerEstudiantesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerEstudiantesCtrl = $controller('VerEstudiantesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerEstudiantesCtrl.awesomeThings.length).toBe(3);
  });
});
