'use strict';

/**
 * @ngdoc service
 * @name estudiantesApp.estudiante
 * @description
 * # estudiante
 * Factory in the estudiantesApp.
 */
angular.module('estudiantesApp')
  .factory('estudianteRequest', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
