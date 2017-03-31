'use strict';

describe('Controller: EditarEstudiantesCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var EditarEstudiantesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarEstudiantesCtrl = $controller('EditarEstudiantesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarEstudiantesCtrl.awesomeThings.length).toBe(3);
  });
});
