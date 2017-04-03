"use strict";

/**
 * @ngdoc function
 * @name estudiantesApp.decorator:TextTranslate
 * @description
 * # TextTranslate
 * Decorator of the estudiantesApp
 */
var text_es = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
  LISTADO_ESTUDIANTES: "Listado de estudiantes",
  VISTA_PREVIA_ESTUDIANTES:"Ver estudiante",
  EDITAR_ESTUDIANTES:"Editar estudiante",
  BTN:{
      NUEVO:"Nuevo",
      BORRAR:"Borrar",
      GUARDAR:"Guardar",
      ELIMINAR:"Eliminar",
      ACEPTAR:"Aceptar"
  },
  DOCUMENTO:"Documento",
  NOMBRES_ESTUDIANTE:"Nombres del estudiante",
  APELLIDOS_ESTUDIANTE:"Apellidos del estudiante"
};

var text_en = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Now get to start to develop ..."
};

angular.module('estudiantesApp')
  .config(function($translateProvider) {
    $translateProvider
      .translations("es", text_es)
      .translations("en", text_en);
    $translateProvider.preferredLanguage("es");
    $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
  });
