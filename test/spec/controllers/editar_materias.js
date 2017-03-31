'use strict';

describe('Controller: EditarMateriasCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var EditarMateriasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarMateriasCtrl = $controller('EditarMateriasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarMateriasCtrl.awesomeThings.length).toBe(3);
  });
});
