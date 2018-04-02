import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class ServiceProvider {
	
	private url = 'http://localhost:8080/';

  constructor(public http: Http, public storage: Storage) {

    this.storage.get('token').then((val) => {
    	let headers = new Headers()
    	headers.append("Authorization", "Bearer " + val.access_token);
    	headers.append("Content-Type", "application/json; charset=utf-8");
      
      this.storage.set("services", []);
      this.storage.set("packages", []);

  		this.http.get(this.url + 'api/v1/services', new RequestOptions({ headers: headers }))
  			.subscribe(res => {                  
          let services: Service[] = [];
          let packages: Service[] = [];
  				for(val of res.json()){
            if(val.package == false){
              services.push(val)            
            }else{
              packages.push(val)
            }
  				}

          console.log(packages)

          this.storage.set("services", services);
          this.storage.set("packages", packages);
  			}, (err) => {
  				
  			});	  	
    })
  }
}

export class Service {    
  name: string;
  description: string;
  price: number;
  status: boolean;
  package: boolean;
  id: number
}