import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyConditionService {

  public url = "https://my-health123.herokuapp.com/api/beneficiaries"

  constructor(private http: HttpClient) { }
  
  getMyCondition(id: any):Observable<object>{
    return this.http.get(this.url);
  }
}
