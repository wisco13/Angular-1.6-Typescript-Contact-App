///<reference path="../../node_modules/@types/angular/index.d.ts" />
///<reference path="../../node_modules/@types/angular-route/index.d.ts" />
'use strict';
import * as angular from "angular";
import { IContactRecord } from "../shared/interfaces";
import * as DataMgr from "../shared/myapp.service";

module ContactsHomePageModule {

  export interface IContactFieldsScope extends ng.IScope, IContactRecord {
    PageTitle: string;
    AddRecordText: string;
    ContactRecords: IContactRecord[];
  }

  export class View1Controller {
    private data: IContactRecord[] = [{
      id:1,
      FirstName: 'fasd',
      LastName: 'dasd',
      Phone: 2222,
      Email: 'sd'
    }, {
      id:2,
      FirstName: 'wwewewe',
      LastName: 'dasrrrrd',
      Phone: 6666,
      Email: '@dfdfgdfg'
    }];

    static $inject = ["$scope", "$location", "DataMgr"];

    constructor(protected $scope: ContactsHomePageModule.IContactFieldsScope,
      private $location: ng.ILocationService,
      private dataMgr: DataMgr.myService.DataMgr) {
      $scope.PageTitle = "Contact Home Page";
      $scope.AddRecordText = "New Contact"
      $scope.ContactRecords = this.data
      this.loadData();
    }

    loadData(){
      this.dataMgr.getData('shared/data.json')
      .then((res:any)=>{
        this.$scope.ContactRecords=res;
      })
      .catch((e:any)=>{
        console.log(e);
      })
    }

    onEdit(id:number){
      this.$location.path('/view2/'+id)
    }

    onDelete(id:number){
      this.dataMgr.deleteData(id);
    }
    onAddNewContact() {
      this.$location.path("/view2");
    }
  }
}

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider: any) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      controllerAs: 'ctrl'
    })
    .when('/view2/:id',{
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: 'ctrl'
    });
  }])

  .controller('View1Ctrl', ContactsHomePageModule.View1Controller);