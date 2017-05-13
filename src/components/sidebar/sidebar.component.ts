
'use strict'

import {IHttpService, IPromise} from 'angular';

export class SideMenuComponentController {
    private res:any;
  constructor (
    private $http: IHttpService
  ) {}

  fetch (url: string): IPromise<string> {
    return this.$http.get(url).then(_ => _.data)
  }
}

export let SideMenuComponent = {
  bindings: { 
    url: '<'
  },  
  templateUrl : `./components/sidebar/sidebar.component.html` ,
  controller: SideMenuComponentController
}