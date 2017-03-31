'use strict';

describe('Service: conf', function () {

  // load the service's module
  beforeEach(module('estudiantesApp'));

  // instantiate service
  var conf;
  beforeEach(inject(function (_conf_) {
    conf = _conf_;
  }));

  it('should do something', function () {
    expect(!!conf).toBe(true);
  });

});
