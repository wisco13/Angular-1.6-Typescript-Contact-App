'use strict';


// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version:any) {


 class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    //@enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
  return function(text:any = "test") {
    var gr = new Greeter(text);
    var msg = gr.greet();
    console.log(msg);
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
