import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService{
  arr=[];
  constructor(private http:Http){}
    storeServers(item){
      this.arr = [];
      this.arr.push(item);

        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8888/AngularJS/servers/action.php', this.arr,
        {headers: myHeaders}
      );
    }

    getServers(){
      return this.http.get('http://localhost:8888/AngularJS/servers/read.php')
      .map(
        ( response: Response ) => {
          const data = response.json();
          return data;
        }
      );
    }

    getAppName(){
      return this.http.get('https://ng-http-4bca8.firebaseio.com/data/appName.json')
      .map(
        ( response: Response ) => {
          const data = response.json();
          return data;
        }
      );
    }

}
