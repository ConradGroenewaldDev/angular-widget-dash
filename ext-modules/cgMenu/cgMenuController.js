"use strict";

angular.module('cgMenu').controller('cgMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            this.setActiveElement = function (el) {
                //keep control of which item is active in the menu
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
              //communicate outside the cgMenu control
                //create unique name as perameter
                $rootScope.$broadcast('cg-menu-item-selected-event',
                    //pass in an object
                    { route: route });
            };
        }
]);