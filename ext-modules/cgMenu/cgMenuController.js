"use strict";

angular.module('cgMenu').controller('cgMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            //add a flag for toggle menu
            $scope.isVertical = true;

            // create getter for Active side arrow
            this.getActiveElement = function () {
                return $scope.activeElement;
            };

            $scope.showMenu = true;

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

            //add function click event to display side menu as top menu
            $scope.toggleMenuOrientation = function () {
                // set toggle menu to its opposite
                $scope.isVertical = !$scope.isVertical;
             // set root scope so the menu can be used in any spa framework
                $rootScope.$broadcast('cg-menu-orientation-changed-event', {isMenuVertical: $scope.isVertical});
            };

            $scope.$on('menu-show', function (evt, data){
                $scope.showMenu = data.show;
            });
        }
]);