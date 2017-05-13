
'use strict';

  //
 import * as angular from "angular"
 require('./interpolate-filter');
 require('./version-directive');
 require('./format-phone.directive');

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive',
  'myApp.version.format-phone.directive'
])
 
.value('version', '0.1');
