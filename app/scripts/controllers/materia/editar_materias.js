'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:EditarMateriasCtrl
 * @description
 * # EditarMateriasCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('EditarMateriasCtrl', function($scope, estudianteRequest) {
    var ctrl = this;
    ctrl.tipo_materia = null;
    ctrl.vista_previa = false;
    ctrl.materia_actual = null;
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
          field: 'Tipo.Id',
          visible: false
        },
        {
          field: 'Nombre'
        },
        {
          field: 'Tipo.Nombre',
          displayName: 'Tipo de Materia'
        },
      ]
    };
    ctrl.gridOptions.multiSelect = false;
    var get_materias = function() {
      estudianteRequest.get('materia', $.param({
        related: "Tipo",
        limit: 0
      })).then(function(response) {
        ctrl.gridOptions.data = response.data;
        console.log(ctrl.gridOptions.data);
      });
    };
    get_materias();

    var get_tipos = function() {
      estudianteRequest.get('tipo_materia', $.param({
        limit: 0
      })).then(function(response) {
        ctrl.tipo_materia = response.data;
      });
    };
    get_tipos();

    ctrl.gridOptions.onRegisterApi = function(gridApi) {
      ctrl.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        console.log(row.entity);
        ctrl.materia_actual = row.entity;
        if (ctrl.materia_actual !== null) {
          ctrl.vista_previa = true;
        }
      });
    };

    ctrl.limpiar_seleccion = function() {
      get_materias();
      ctrl.vista_previa = null;
      ctrl.vista_previa = false;
    };

    ctrl.anadir_tipo = function() {
      swal({
        title: 'Ingrese el nuevo tipo',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function(text) {
          return new Promise(function(resolve, reject) {
            estudianteRequest.post('tipo_materia', {
                Nombre: text
              })
              .then(function(response) {
                console.log(response);
                setTimeout(function() {
                  if (response.status === 201) {
                    get_tipos();
                    resolve();
                  } else {
                    reject('No ha podido ingresarse el nuevo tipo');
                  }
                }, 1000);
              });
          });
        },
        allowOutsideClick: false
      }).then(function(text) {
        swal({
          type: 'success',
          title: 'Tipo creado!',
          html: 'El tipo' + text + 'ha sido creado con éxito'
        });
      });
    };

    ctrl.guardar = function() {
      estudianteRequest.put('materia', ctrl.materia_actual.Id, ctrl.materia_actual)
        .then(function(response) {
          if (response.data === 'OK') {
            get_materias();
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
        estudianteRequest.delete('estudiante', ctrl.materia_actual.Id)
          .then(function(response) {

            if (response.data === 'OK') {
              get_materias();
              ctrl.limpiar_seleccion();
              swal(
                'Eliminado!',
                'El estudiante ha sido eliminado.',
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
