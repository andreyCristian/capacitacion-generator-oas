'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:InscribirMateriaCtrl
 * @description
 * # InscribirMateriaCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('InscribirMateriaCtrl', function(estudianteRequest, $scope) {
    var ctrl = this;
    ctrl.vista_previa = false;
    ctrl.mis_materias = [];
    ctrl.materias = [];
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

    var get_mis_materias = function() {
      ctrl.mis_materias = [];
      estudianteRequest.get('estudiante_materia', $.param({
          query: "Estudiante.Id:" + ctrl.estudiante_actual.Id,
          related: "Materia",
          limit: 0
        }))
        .then(function(response) {
          ctrl.mis_materias = response.data;
        });
    };

    var get_materias = function() {
      ctrl.materias = [];
      estudianteRequest.get('materia', $.param({
          related: "Tipo",
          limit: 0
        }))
        .then(function(response) {
          angular.forEach(response.data, function(materia) {
            ctrl.materias.push(materia);
          });
        });
    };

    ctrl.gridOptions.onRegisterApi = function(gridApi) {
      ctrl.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        ctrl.estudiante_actual = row.entity;
        if (ctrl.estudiante_actual !== null) {
          ctrl.vista_previa = true;
          get_mis_materias();
          get_materias();
        }
      });
    };

    ctrl.limpiar_seleccion = function() {
      ctrl.vista_previa = null;
    };

    ctrl.guardar = function() {
      var inscripcion = {
        Estudiante: ctrl.estudiante_actual,
        Materia: ctrl.materia_actual
      };
      estudianteRequest.post('estudiante_materia', inscripcion)
        .then(function(response) {
          if (response.status === 201) {
            get_estudiantes();
            swal(
              'Buen trabajo!',
              'ha inscrito correctamente !',
              'success'
            );
            ctrl.limpiar_seleccion();
          }
        });
    };
    ctrl.cancelar_materia = function(m) {
      console.log(m);
      swal({
        title: 'Está seguro?',
        text: "No podrá volver a inscribir esta materia!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
      }).then(function() {
        estudianteRequest.delete('estudiante_materia', m.Id)
          .then(function(response) {
            if (response.data === 'OK') {
              get_estudiantes();
              ctrl.limpiar_seleccion();
              swal(
                'Materia Cancelada!',
                'La materia ha sido cancelada con éxito.',
                'success'
              );
            } else {
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
