///<reference path="../node_modules/@types/angular/index.d.ts" />
///<reference path="../node_modules/@types/angular-route/index.d.ts" />

'use strict';
import * as angular from "angular";
import {} from "../node_modules/angular/angular";
require("./shared/myapp.service");
require('../node_modules/angular-route/angular-route');
require('../node_modules/jquery/dist/jquery');
require('./view1/view1');
require('./view2/view2');
require('./components/myapp.components');
require('./components/version/version');

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.components',
  'myApp.version',
  'myApp.shared'
]).
config(['$routeProvider', function($routeProvider:any) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
 
angular.bootstrap(document,["myApp"]);
