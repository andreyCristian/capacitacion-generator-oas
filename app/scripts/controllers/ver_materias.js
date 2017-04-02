'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:VerMateriasCtrl
 * @description
 * # VerMateriasCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('VerMateriasCtrl', function($scope, estudianteRequest) {
    var ctrl = this;
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
    estudianteRequest.get('materia?related=Tipo&limit=0', '').then(function(response) {
      ctrl.gridOptions.data = response.data;
      console.log(ctrl.gridOptions.data);
    });
    ctrl.gridOptions.onRegisterApi = function(gridApi) {
      ctrl.gridApi = gridApi;

      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        ctrl.materia_actual = row.entity;
        if (ctrl.materia_actual !== null) {
          ctrl.vista_previa = true;
        }
      });
    };
    ctrl.limpiar_seleccion = function() {
      ctrl.vista_previa = null;
    };
  });
