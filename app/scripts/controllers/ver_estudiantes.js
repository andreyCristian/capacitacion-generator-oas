'use strict';

/**
 * @ngdoc function
 * @name estudiantesApp.controller:VerEstudiantesCtrl
 * @description
 * # VerEstudiantesCtrl
 * Controller of the estudiantesApp
 */
angular.module('estudiantesApp')
  .controller('VerEstudiantesCtrl', function ($scope, estudianteRequest) {
    var self = this;
        self.gridOptions = {
          enableFiltering : true,
          enableSorting : true,
          enableRowSelection: true,
          enableRowHeaderSelection: false,
          columnDefs : [
            {field: 'Id',             visible : false},
            {field: 'Documento'},
            {field: 'Nombre'},
            {field: 'Apellido'},
          ]
        };
        self.gridOptions.multiSelect = false;
        estudianteRequest.get('estudiante','limit=0').then(function(response) {
          self.gridOptions.data = response.data;
          console.log(self.gridOptions.data );
        });
        self.gridOptions.onRegisterApi = function(gridApi){
          self.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged($scope,function(row){
          });
        };
  });
