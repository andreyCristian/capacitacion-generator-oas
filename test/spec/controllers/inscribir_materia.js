'use strict';

describe('Controller: InscribirMateriaCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var InscribirMateriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InscribirMateriaCtrl = $controller('InscribirMateriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InscribirMateriaCtrl.awesomeThings.length).toBe(3);
  });
});
