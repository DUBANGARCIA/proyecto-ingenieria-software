import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface peticion {
  first_name: string,
  last_name: string,
  gender : string,
  age : string,
  email: string,
  password: string
}
export interface response{
  data:{
    token: string,
    message: string,
  }
  
}
@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  public url = "https://my-health123.herokuapp.com/api/register"


  constructor(private http: HttpClient) { }

  registrarUser(body: peticion):Observable<object>{
    return this.http.post(this.url, body);
  }
}
  