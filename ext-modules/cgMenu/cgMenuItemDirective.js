"use strict";

angular.module('cgMenu').directive('cgMenuItem', function () {
    return {
        //directive definition object, allows access to menu controller
        require: '^cgMenu',
        // add an isolate scope for menu item, pass items off as strings
        scope: {
            label: '@',
            //icon brought in through font awesome
            icon: '@',
            route: '@',
        },
        templateUrl: 'ext-modules/cgMenu/cgMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            //create the isActive function for side menu arrow
            scope.isActive = function() {
                return el === ctrl.getActiveElement();
            };
            //allow for routing on click function
            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                //let angular know using jquery to change scope
                scope.$apply(function () {
                    //created in cgMenu controller
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});