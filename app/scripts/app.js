'use strict';

/**
 * @ngdoc overview
 * @name estudiantesApp
 * @description
 * # estudiantesApp
 *
 * Main module of the application.
 */
angular
  .module('estudiantesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'ui.utils.masks',
    'pascalprecht.translate'
  ])
    .run(function(amMoment) {
      amMoment.changeLocale('es');
    })
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ver_estudiantes', {
        templateUrl: 'views/estudiante/ver_estudiantes.html',
        controller: 'VerEstudiantesCtrl',
        controllerAs: 'verEstudiantes'
      })
      .when('/editar_estudiantes', {
        templateUrl: 'views/estudiante/editar_estudiantes.html',
        controller: 'EditarEstudiantesCtrl',
        controllerAs: 'editarEstudiantes'
      })
      .when('/ver_materias', {
        templateUrl: 'views/ver_materias.html',
        controller: 'VerMateriasCtrl',
        controllerAs: 'verMaterias'
      })
      .when('/editar_materias', {
        templateUrl: 'views/editar_materias.html',
        controller: 'EditarMateriasCtrl',
        controllerAs: 'editarMaterias'
      })
      .when('/nuevo_estudiante', {
        templateUrl: 'views/estudiante/nuevo_estudiante.html',
        controller: 'NuevoEstudianteCtrl',
        controllerAs: 'nuevoEstudiante'
      })
      .when('/nueva_materia', {
        templateUrl: 'views/nueva_materia.html',
        controller: 'NuevaMateriaCtrl',
        controllerAs: 'nuevaMateria'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
