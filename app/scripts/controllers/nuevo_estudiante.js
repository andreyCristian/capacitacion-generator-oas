'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:NuevoEstudianteCtrl
 * @description
 * # NuevoEstudianteCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('NuevoEstudianteCtrl', function (estudianteRequest) {
      var ctrl = this;
      ctrl.vista_previa = false;
      ctrl.nuevo_estudiante = null;
      ctrl.gridOptions = {
        enableFiltering: true,
        enableSorting: true,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        columnDefs: [{
            field: 'Id',
            visible: false
          },
          {
            field: 'Documento'
          },
          {
            field: 'Nombre'
          },
          {
            field: 'Apellido'
          },
        ]
      };
      ctrl.gridOptions.multiSelect = false;
      var get_estudiantes = function() {
        estudianteRequest.get('estudiante', 'limit=0').then(function(response) {
          ctrl.gridOptions.data = response.data;
          console.log(ctrl.gridOptions.data);
        });
      };
      get_estudiantes();

      ctrl.gridOptions.onRegisterApi = function(gridApi) {
        ctrl.gridApi = gridApi;
      };

      ctrl.limpiar_seleccion = function() {
        ctrl.vista_previa = !ctrl.vista_previa;
        ctrl.nuevo_estudiante = null;
      };

      ctrl.guardar = function() {
        estudianteRequest.post('estudiante', ctrl.nuevo_estudiante)
          .then(function(response) {
              console.log(response);
            if (response.status === 201) {
              swal(
                'Buen trabajo!',
                'Añadió el estudiante con éxito',
                'success'
              );
              ctrl.limpiar_seleccion();
              get_estudiantes();
            }
          });
      };
  });
