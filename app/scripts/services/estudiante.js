'use strict';

/**
 * @ngdoc service
 * @name estudiantesApp.estudiante
 * @description
 * # estudiante
 * Factory in the estudiantesApp.
 */
angular.module('estudiantesApp')
  .factory('estudianteRequest', function($http, CONF) {
    // Public API here
    return {
      get: function(tabla, params) {
        var peticion = CONF.PATH_API_ESTUDIANTES + tabla + "?" + params;
        return $http.get(peticion);
      },
      post: function(tabla, elemento) {
        //se realiza definicion de post con formato header, para resolucion del problema post
        return $http.post(CONF.PATH_API_ESTUDIANTES + tabla, elemento, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        });
      },
      put: function(tabla, id, elemento) {
        return $http.put(CONF.PATH_API_ESTUDIANTES + tabla + "/" + id, elemento);
      },
      delete: function(tabla, id) {
        return $http.delete(CONF.PATH_API_ESTUDIANTES + tabla + "/" + id);
      }
    };
  });
