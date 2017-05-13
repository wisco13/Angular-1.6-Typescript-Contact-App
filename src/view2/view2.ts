
'use strict';
import * as angular from "angular";
import * as DataMgr from "../shared/myapp.service";
import { IContactRecord } from "../shared/interfaces";
module ContactsForm {

  export class TextFieldController {
    public label: string;
    public requiredWarning: string;

    public value: any;
    public hasError: boolean;
    public model: ng.INgModelController;

    public user: IContactRecord;
    public currentRecord:number;

    static $inject = ["$scope", "DataMgr", "$location", "$routeParams","$rootScope"];
    constructor(private $scope: ng.IScope,
      private dataMgr: DataMgr.myService.DataMgr,
      private $location: ng.ILocationService,
      private $routeParams: ng.route.IRouteParamsService,
      private $rootScope: ng.IRootScopeService) {
    }

    onInit(): void {
      if (angular.isDefined(this.$routeParams.id)) {
        let record = this.dataMgr.ContactData.forEach((v, i, arr) => {
          if (v.id === Number(this.$routeParams.id)) {
            this.model;
            this.user = new User(v.id, v.FirstName, v.LastName, v.Email, v.Phone);
            this.currentRecord = i;
          }
        })
      };
    }
    onChange(e: any, form): void {

      if (e.$viewValue == "") {
        this.hasError = true;
        form.$setValidity("required", false);
      } else {
        this.hasError = false;
        form.$setValidity("required", true)
      }
      e.$setViewValue(e.$viewValue);
    }

    submitForm(form: any): void {
      console.log(this);
      console.log(form);
      if (angular.isUndefined(form.id)) {
        form.id = Math.round(Math.random() * 100000);
        this.dataMgr.postData(form);
      }else{
        this.dataMgr.updateData(this.currentRecord, form)
      }
      this.$rootScope.$broadcast("fileSaved",true);
      this.$location.path("/view1");
    }
  }

  //   angular.module('app').component('textField', {
  //     templateUrl: 'textField.html',
  //     controller: TextFieldController,
  //     require: {
  //       model: "ngModel"
  //     },
  //     controllerAs: 'vm',
  //     bindings: {
  //       label: "@",
  //       requiredWarning: "@"
  //     }
  //   });
}
//require('../components/version/interpolate-filter');

class User implements IContactRecord {
  constructor(
    public id,
    public FirstName?,
    public LastName?,
    public Email?,
    public Phone?
  ) { }
}


angular.module('myApp.view2', ['ngRoute', 'myApp.version.version-directive'])

  .config(['$routeProvider', function ($routeProvider: any) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: 'ctrl'
    });
  }])

  .controller('View2Ctrl', ContactsForm.TextFieldController);
