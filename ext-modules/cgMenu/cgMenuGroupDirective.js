"use strict";

angular.module('cgMenu').directive('cgMenuGroup', function () {
   return {
    require: '^cgMenu',
       transclude: true,
       scope: {
           label: '@',
           icon: '@',
       },
       templateUrl: 'ext-modules/cgMenu/cgMenuGroupTemplate.html',
       link: function(scope, el, attrs, ctrl){
           // add ability to open and close the group menu function
           scope.isOpen = false;
           scope.closeMenu = function () {
               scope.isopen = false;
           };

            //add the click event
           scope.clicked = function () {
               scope.isOpen = !scope.isOpen;
           };

           // create isVertical function for menu items to display and work correctly
           scope.isVertical = function () {
               return ctrl.isVertical();
           };
       }
   };
});
