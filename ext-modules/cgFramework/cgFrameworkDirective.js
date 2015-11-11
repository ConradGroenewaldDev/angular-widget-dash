"use strict";

// create the custom directive for the framework
angular.module("cgFramework").directive("cgFramework", function () {
   
    return {
        transclude: true,
        scope: {
            //bind a string use the @ symbol
            title: '@',
            subtitle: '@',
            iconFile: '@',
        },
        //create a controller
        controller: "cgFrameworkController",
        // set url to find index page on ext-module folder
        templateUrl: "ext-modules/cgFramework/cgFrameworkTemplate.html",
    };
});
