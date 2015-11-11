"use strict";

angular.module("cgMenu").directive('cgMenu', function () {
    return {
        // isolate scope because to be stand alone componant
        scope: {

        },
        //directive definition object
        transclude: true,
        templateUrl: 'ext-modules/cgMenu/cgMenuTemplate.html',
        controller: 'cgMenuController',
        link: function (scope, el, attr){
        }
    };
});