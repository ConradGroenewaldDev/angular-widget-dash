"use strict";

angular.module('cgDashboard').directive('cgDashboard', function () {
   return {
    // inherit scope from the spDashboard directive in app folder here by leaving it blank (default)
        templateUrl: 'ext-modules/cgDashboard/cgDashboardTemplate.html'
   };
});
