'use strict';

module directives {

  export function myDirective(): ng.IDirective {
    return {
      restrict: 'A',
      require: ['ngModel'],
      //templateUrl: 'myDirective.html',
      replace: true,
      // scope:{

      // },
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrls) => {
        //use of $location service
        console.log(element.val())
        element.on('keypress',(e:any)=>{
          console.log(e.target.value);
          
        })
      }
    };
  }

}
  // angular.module('directives', [])
  //   .directive('myDirective', ['toaster', directives.myDirective]);

var appVersion = ['version', function(version:any) {
  return function(scope:any, elm:any, attrs:any) {
    elm.text(version);
    console.log(version);
  };
}];

angular.module('myApp.version.version-directive', [])

.directive('appVersion', directives.myDirective);
// .directive('appVersion', ['version', function(version:any) {
//   return function(scope:any, elm:any, attrs:any) {
//     elm.text(version);
//   };
// }]);
