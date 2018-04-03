import { Http , Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private url = 'http://localhost:8080/';
  private headers = new Headers()

  constructor(public http: Http, public storage: Storage) {
  	this.headers.append("Authorization", "Basic YXBwbGljYXRpb246c2VjcmV0")
    this.headers.append("Access-Control-Allow-Methods", "*")
    this.headers.append("Content-Type", "application/x-www-form-urlencoded")
  }

  login(credentials){
    let params = new URLSearchParams()
    params.append('grant_type', 'password');
    params.append('username', credentials.email);
    params.append('password', credentials.password);
    
  	return new Promise((resolve, reject) => {
  		this.http.post(this.url + 'oauth/token', params, new RequestOptions({ headers: this.headers }))
  			.subscribe(res => {          
          this.storage.set('token', res.json())          
  				resolve();
  			}, (err) => {
    			reject(err.json());
  			})
  	});
  }

  register(data){    
    let params = new URLSearchParams()
    params.append('email', data.email);
    params.append('password', data.password);
    params.append('phone', data.phone);
    params.append('fullName', data.fullName);

  	return  new Promise((resolve, reject) => {
  		this.http.post(this.url + 'api/v1/users', params)
  			.subscribe(res => {
  				resolve(res)
  			}, (err) => {
  				reject(err)
  			})
  	})
  }
}
