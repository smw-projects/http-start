import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService{

  constructor(private http:Http){}
    storeServers(servers: any[]){
      //   const myHeaders = new Headers({'Content-Type': 'application/json'});
      //   return this.http.post('https://ng-http-4bca8.firebaseio.com/data.json', servers,
      //   {headers: myHeaders}
      // );
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://ng-http-4bca8.firebaseio.com/data.json', servers,
        {headers: myHeaders}
      );
    }

    getServers(){
      return this.http.get('https://ng-http-4bca8.firebaseio.com/data.json')
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
