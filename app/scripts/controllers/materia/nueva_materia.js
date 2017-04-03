'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:NuevaMateriaCtrl
 * @description
 * # NuevaMateriaCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('NuevaMateriaCtrl', function(estudianteRequest) {
    var ctrl = this;
    ctrl.tipo_materia = null;
    ctrl.vista_previa = false;
    ctrl.nueva_materia = null;
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
      estudianteRequest.get('materia?related=Tipo&limit=0', '').then(function(response) {
        ctrl.gridOptions.data = response.data;
        console.log(ctrl.gridOptions.data);
      });
    };
    get_materias();

    var get_tipos = function() {
      estudianteRequest.get('tipo_materia', 'limit=0').then(function(response) {
        ctrl.tipo_materia = response.data;
      });
    };
    get_tipos();
    ctrl.gridOptions.onRegisterApi = function(gridApi) {
      ctrl.gridApi = gridApi;
    };

    ctrl.limpiar_seleccion = function() {
      get_materias();
      ctrl.nueva_materia = null;
      ctrl.vista_previa = !ctrl.vista_previa;
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
      estudianteRequest.post('materia', ctrl.nueva_materia)
        .then(function(response) {
          console.log(response);
          if (response.status === 201) {
            swal(
              'Buen trabajo!',
              'Añadió el estudiante con éxito',
              'success'
            );
            ctrl.limpiar_seleccion();
            get_materias();
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
  estudianteRequest.delete('estudiante', ctrl.nueva_materia.Id)
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
