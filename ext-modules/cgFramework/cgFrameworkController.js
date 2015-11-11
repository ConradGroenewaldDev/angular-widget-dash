"use strict";

angular.module("cgFramework").controller("cgFrameworkController",
    ['$scope',
        function ($scope) {
            //listen to message from cgMenuController rootScope
            $scope.$on('cg-menu-item-selected-event', function (evt, data){
                // do the routing from available routers
                $scope.routeString = data.route;
            });
           
        }
]);