"use strict";

angular.module("cgMenu").directive('cgMenu', ['$timeout', function ($timeout) {
    return {
        // isolate scope because to be stand alone componant
        scope: {

        },
        //directive definition object
        transclude: true,
        templateUrl: 'ext-modules/cgMenu/cgMenuTemplate.html',
        controller: 'cgMenuController',
        link: function (scope, el, attr){
            //set default menu item
            var item = el.find('.selectable-item:first');
            $timeout(function () {
                item.trigger('click');
            });
        }
    };
}]);