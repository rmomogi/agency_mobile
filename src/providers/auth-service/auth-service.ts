import { Http , Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private url = 'http://localhost:8080/';
  
  constructor(public http: Http) {
  	console.log('AuthService Provider')    
  }

  login(credentials){
    let header = new Headers()
    header.append("Authorization", "Basic YXBwbGljYXRpb246c2VjcmV0")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Content-Type", "application/x-www-form-urlencoded");

    let params = new URLSearchParams()
    params.append('grant_type', 'password');
    params.append('username', credentials.email);
    params.append('password', credentials.password);
    
  	return new Promise((resolve, reject) => {
  		this.http.post(this.url + 'oauth/token', params, new RequestOptions({ headers: header }))
  			.subscribe(res => {
          localStorage.setItem('token', res.json())
  				resolve();
  			}, (err) => {
    			reject(err.json());
  			})
  	});
  }

  register(data){
    let header = new Headers()
    header.append("Content-Type", "application/x-www-form-urlencoded");

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
