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
               scope.isOpen = false;
           };

            //add the click event
           scope.clicked = function () {
               scope.isOpen = !scope.isOpen;

               // set up popup menu under its parent
               if (el.parents('.subItem-section').length == 0)
                 scope.setSubmenuPosition();

               //set click anywhere to close the menu
               ctrl.setOpenMenuScope(scope);
           };

           // create isVertical function for menu items to display and work correctly
           scope.isVertical = function () {
               return ctrl.isVertical() || el.parents('.subItem-section').length > 0;
           };

           // set the position of the sub menu when horizontal
           scope.setSubmenuPosition = function () {
             var pos = el.offset();
               $('.subItem-section').css({ 'left': pos.left + 20, 'top': 36});
           };
       }
   };
});
