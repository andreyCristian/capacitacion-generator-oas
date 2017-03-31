'use strict';

describe('Controller: NuevoEstudianteCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var NuevoEstudianteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevoEstudianteCtrl = $controller('NuevoEstudianteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevoEstudianteCtrl.awesomeThings.length).toBe(3);
  });
});
