"use strict";

angular.module('cgMenu').controller('cgMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            //add a flag for toggle menu
            $scope.isVertical = true;
            $scope.openMenuScope = null;
            $scope.showMenu = true;
            $scope.allowHorizontalToggle = true;

            // create getter for Active side arrow
            this.getActiveElement = function () {
                return $scope.activeElement;
            };

            $scope.showMenu = true;

            this.setActiveElement = function (el) {
                //keep control of which item is active in the menu
                $scope.activeElement = el;
            };

            // add isVertical to controller because out of scope
            this.isVertical = function () {
                return $scope.isVertical;
            };

            this.setRoute = function (route) {
              //communicate outside the cgMenu control
                //create unique name as perameter
                $rootScope.$broadcast('cg-menu-item-selected-event',
                    //pass in an object
                    { route: route });
            };

            // control the click anywhere to close submenu
            this.setOpenMenuScope = function (scope) {
                $scope.openMenuScope = scope;
            };

            //add function click event to display side menu as top menu
            $scope.toggleMenuOrientation = function () {

                // close any open menu
                if ($scope.openMenuScope)
                    $scope.openMenuScope.closeMenu();

                // set toggle menu to its opposite
                $scope.isVertical = !$scope.isVertical;
             // set root scope so the menu can be used in any spa framework
                $rootScope.$broadcast('cg-menu-orientation-changed-event',
                    {isMenuVertical: $scope.isVertical});
            };

            // look for click event in the whole document in jquery
            angular.element(document).bind('click', function (e) {
                if ($scope.openMenuScope && !$scope.isVertical) {
                    if ($(e.target).parent().hasClass ('selectable-item'))
                        return;
                    $scope.$apply(function () {
                        $scope.openMenuScope.closeMenu();
                    });

                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            $scope.$on('menu-show', function (evt, data){
                $scope.showMenu = data.show;
                $scope.isVertical = data.isVertical;
                $scope.allowHorizontalToggle = data.allowHorizontalToggle;
            });
        }
]);