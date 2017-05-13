
import { IHttpService, IPromise } from 'angular';
'use strict'

interface HeaderModel {
  fileSaved: string;
}
 export class HeaderComponentController {
  private _
  private res: any;
  private model: HeaderModel;
  constructor(
    private $http: IHttpService,
    private $scope: ng.IScope
  ) {
    $scope.$on('fileSaved', (event: ng.IAngularEvent, data: string) => {
      this.model = new Model('File Saved');
    }
    
    );

  }
}

export class HeaderComponent implements ng.IComponentOptions {

  public bindings: any;
  public controller: any;
  //public controllerAs: any;
  public templateUrl: string;

  constructor() {
    this.bindings = {
      textBinding: '@',
      dataBinding: '<', 
      functionBinding: '&'
    };
    this.controller = HeaderComponentController; 
    //this.controllerAs = 'ctrl';
    this.templateUrl = './components/header/header.component.html';
  }

}

class Model implements HeaderModel {
  constructor(
    public fileSaved: string
  ) { }
}

// export let HeaderComponent = {
//   bindings: { 
//     url: '<'
//   },  
//   template: `
//     <h1>We have a result1!</h1>
//     <span>{{$ctrl.res}}</span> 
//   `,
//   controller: HeaderComponentController
// }