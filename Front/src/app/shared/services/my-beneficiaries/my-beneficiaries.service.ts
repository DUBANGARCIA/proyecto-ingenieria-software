import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface response{
  data: [
    {
      id: number,
      first_name: string,
      last_name: string,
      gender: string,
      age: string,
      email: string
    }]
}

@Injectable({
  providedIn: 'root'
})
export class MyBeneficiariesService {
  public url = "https://my-health123.herokuapp.com/api/beneficiaries"

  constructor(private http: HttpClient) { }

  getBeneficiaries(token):Observable<object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.url, {headers: headers});
  }
  setBeneficiaries(body, token):Observable<object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(this.url+"/"+body.beneficiaryId, body, {headers: headers});
  }
}
