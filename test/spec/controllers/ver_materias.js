'use strict';

describe('Controller: VerMateriasCtrl', function () {

  // load the controller's module
  beforeEach(module('estudiantesApp'));

  var VerMateriasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerMateriasCtrl = $controller('VerMateriasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerMateriasCtrl.awesomeThings.length).toBe(3);
  });
});
