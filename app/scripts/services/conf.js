'use strict';

/**
 * @ngdoc service
 * @name estudiantesApp.conf
 * @description
 * # conf
 * Constant in the estudiantesApp.
 */
angular.module('estudiantesApp')
  .constant('CONF',{
    PATH_API_ESTUDIANTES:"http://localhost:8080/v1/"
  });
