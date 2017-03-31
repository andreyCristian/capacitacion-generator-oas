'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
