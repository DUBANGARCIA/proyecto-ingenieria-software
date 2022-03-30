import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = "https://my-health123.herokuapp.com/api/login"
  constructor(private http: HttpClient) { }

  valideUser(body):Observable<object>{
    return this.http.post(this.url, body);
  }
}
