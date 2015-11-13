"use strict";

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    // create an array of routes
    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<sp-dashboard></sp-dashboard>'
            }
        },

         {
             url: '/locations',
             config: {
                 template: '<sp-locations></sp-locations>'
             }
         },

          {
              url: '/guides',
              config: {
                  template: '<sp-guides></sp-guides>'
              }
          }
    ];

    //loop through the routes
    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });
}]);