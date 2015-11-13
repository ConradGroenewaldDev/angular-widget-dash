"use strict";

angular.module('app').directive('spDashboard', [function () {
    return {
        scope: {

        },
        template: '<cg-dashboard></cg-dashboard>',
        // set the grid layout
        link: function (scope){

            // title for dashboard
            scope.title = "My First dashboard";

            // set option for grid from github documentation
            scope.gridsterOpts = {
                columns: 12,
                margins: [20,20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false
            };

            scope.widgets = [
                {
                  title: 'First',
                  sizeX: 3,
                  sizeY: 3,
                  row: 0,
                  col: 0
                },
                {
                    title: 'Second',
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                },
            ];
        }
    }
}]);