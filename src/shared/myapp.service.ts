
'use strict'
import * as angular from "angular";
import { IContactRecord } from './interfaces';

export module myService {

    export class DataMgr {
        private qService: ng.IQService;
        private httpService: ng.IHttpService;
        private _contactData: Array<IContactRecord>=[];

        static $inject = ['$http',"$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        get ContactData(): Array<IContactRecord> {
            return this._contactData;
        }
        set ContactData(val: Array<IContactRecord>) {
            this._contactData = val;
        }f

        updateData(recordIndex:number, updateRecord:IContactRecord){
            this.ContactData[recordIndex] = updateRecord;
        }
        deleteData(id:number){
            this.ContactData.forEach((v:IContactRecord,i:number,arr:IContactRecord[])=>{
                if(v.id === id) this.ContactData.splice( i, 1 );
                return;
            })
        }

        getData(url:string): ng.IPromise<Object[]> {
            var deferred = this.qService.defer();
            if(this.ContactData.length===0){
            this.httpService.get(url).then((result: any): void => {
                if (result.status === 200) {
                    this.ContactData = result.data;
                    deferred.resolve(result.data);
                } else {
                    deferred.reject(result);
                }
            }, error => {
                deferred.reject(error);
            });
            }else{
                deferred.resolve(this.ContactData);
            }
            return deferred.promise;
        }

        postData(param:any) {
            this.ContactData.push(param);
        }
    }
}

angular.module('myApp.shared', [])
    .service('DataMgr', myService.DataMgr)