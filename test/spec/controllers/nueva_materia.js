'use strict';

describe('Controller: NuevaMateriaCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var NuevaMateriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevaMateriaCtrl = $controller('NuevaMateriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevaMateriaCtrl.awesomeThings.length).toBe(3);
  });
});
