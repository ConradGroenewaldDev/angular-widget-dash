﻿"use strict";

angular.module("cgFramework").controller("cgFrameworkController",
    ['$scope', '$rootScope', '$window', '$timeout', '$location',
function ($scope, $rootScope, $window, $timeout, $location) {
            // make responsive menu button visible (ng-if)
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            //flag for changing menu display to top
            $scope.isMenuVertical = true;

            //listen to message from cgMenuController rootScope (selected event)
            $scope.$on('cg-menu-item-selected-event', function (evt, data){
                // do the routing from available routers
                $scope.routeString = data.route;
                $location.path(data.route);
                checkWidth();
                broadcastMenuState();
            });

            //listen to message from cgMenuController rootScope (menu display change event)
            $scope.$on('cg-menu-orientation-changed-event', function (evt, data){
                // do the routing from available routers
                $scope.isMenuVertical = data.isMenuVertical;
            });

            //display menu button on smaller screen sizes
            // check the window size wrap the window in a jquery object
            $($window).on('resize.cgFramework', function () {
                //use $apply to tell angular jquery changing scope
               $scope.$apply(function () {
                   checkWidth();
                   //add broadCastState so menu appears
                   broadcastMenuState();
               });
            });
            $scope.$on("$destroy", function () {
                $($window).off("resize.cgFramework"); //remove the handler
            });

            var checkWidth = function () {
                //get the max value of width and innerWidth
                var width = Math.max($($window).width(), $window.innerWidth);
                $scope.isMenuVisible = (width > 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            //add the click function for responsive menu
            $scope.menuButtonClicked = function () {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                // function to communicate back to cgMenu by broadcasting on root scope
                broadcastMenuState();
                // let angular know scope is changing with jquery
                $scope.$apply();
            };

            var  broadcastMenuState = function () {
                $rootScope.$broadcast('menu-show',
                    {
                        show: $scope.isMenuVisible,
                        isVertical: $scope.isMenuVertical,
                        allowHorizontalToggle: !$scope.isMenuButtonVisible
                    });
            };

            //create timeout function for responsive nav
            $timeout(function (){
               checkWidth();
            }, 0);
           
        }
]);