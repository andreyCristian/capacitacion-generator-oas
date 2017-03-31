'use strict';

describe('Service: estudiante', function () {

  // load the service's module
  beforeEach(module('estudiantesApp'));

  // instantiate service
  var estudiante;
  beforeEach(inject(function (_estudiante_) {
    estudiante = _estudiante_;
  }));

  it('should do something', function () {
    expect(!!estudiante).toBe(true);
  });

});
