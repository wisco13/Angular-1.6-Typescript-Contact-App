'use strict';

module directives {

  export function formatPhoneDirective(): ng.IDirective {
    return {
      restrict: 'A',
      require: ['ngModel'],
      replace: true,
      scope: {
        phoneText: "="
      },
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrls) => {
        //use of $location service
        console.log(element.val());
        var field = scope.$parent.userForm.phonenum;
        function format(n: any) {
          var arr = [],
            nArr = n.split("");
          var i = 0;
          while (nArr.length !== 0) {
            if (i === 1) arr.push(nArr.splice(0, 3).join(""));
            else arr.push(nArr.splice(0, 4).join(""));
            i++;
          }
          return arr.join("-");
        }
        element.on('blur', (e: any) => {
          if (e.target.value.length == 11) {
            scope.$parent.ctrl.user.Phone = format(e.target.value);
            // scope.$apply(() => {
              
            // });
              field.$setValidity();
          }
        })
      }
    };
  }

}

angular.module('myApp.version.format-phone.directive', [])

  .directive('formatPhone', directives.formatPhoneDirective);