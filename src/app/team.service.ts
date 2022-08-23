import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  ProceedLogin(inputdata: any) {
    return this.http.post('https://localhost:7298/api/Login/create-user', inputdata);
  }
  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }

  /* GetToken() {
 
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
 
   }*/


  getTeam() {
    return this.http.get<any>("https://localhost:7298/api/Teams");
  }
  PostTeam(data: any) {
    return this.http.post("https://localhost:7298/api/Teams", data);
  }
  DeleteTeam(id: any) {
    return this.http.delete(`https://localhost:7298/api/Teams/${id}`);
  }

  PutTeam(id: any) {
    return this.http.put("https://localhost:7298/api/Teams/", id);

  }
}
