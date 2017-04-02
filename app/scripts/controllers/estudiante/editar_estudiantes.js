'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:EditarEstudiantesCtrl
 * @description
 * # EditarEstudiantesCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('EditarEstudiantesCtrl', function(estudianteRequest, $scope) {
    var ctrl = this;
    ctrl.vista_previa = false;
    ctrl.estudiante_actual = null;
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
      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        ctrl.estudiante_actual = row.entity;
        if (ctrl.estudiante_actual !== null) {
          ctrl.vista_previa = true;
        }
      });
    };

    ctrl.limpiar_seleccion = function() {
      ctrl.vista_previa = null;
    };

    ctrl.guardar = function() {
      estudianteRequest.put('estudiante', ctrl.vista_previa.Id, ctrl.estudiante_actual)
        .then(function(response) {
          if (response.data === 'OK') {
            get_estudiantes();
            swal(
              'Buen trabajo!',
              'Se editó correctamente!',
              'success'
            );
            ctrl.limpiar_seleccion();
          }
        });
    };
    ctrl.eliminar = function() {

      swal({
        title: 'Está seguro?',
        text: "No podrá revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      }).then(function() {
        estudianteRequest.delete('estudiante', ctrl.estudiante_actual.Id)
          .then(function(response) {

            if (response.data === 'OK') {
              get_estudiantes();
              ctrl.limpiar_seleccion();
              swal(
                'Eliminado!',
                'El estudiante ha sido eliminado.',
                'success'
              );
          }else{
              swal(
                'No ha podido ser eliminado!',
                 response.data,
                'error'
              );
          }
          });

      });
    };

  });
