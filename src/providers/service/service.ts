import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service'

@Injectable()
export class ServiceProvider {
	
	private url = 'http://localhost:8080/'
  private headers = new Headers()
  
  constructor(public http: Http, 
              public storage: Storage, 
              public authService:AuthService) {}

  get(){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((data) => {
        this.headers.append("Authorization", "Bearer " + data.access_token)
        this.headers.append("Content-Type", "application/json; charset=utf-8")

        this.http.get(this.url + 'api/v1/services', new RequestOptions({ headers: this.headers }))
        .subscribe(res => {                                      
          resolve(res.json())
        }, (err) => {
          reject(err.json())         
        });     
      })    
    })    
  }
}