import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CompetitionModel } from '../models/competitionModel';

@Injectable({
  providedIn: 'root'
})
export class ApiIntergration {

  http = inject(HttpClient);

  apiUrl = 'https://api.freeprojectapi.com/api/ProjectCompetition';

  private headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
  userRegistraion(registerObj: any): Observable<any> {
    

    return this.http.post(
      `${this.apiUrl}/register`,
      registerObj, 
      {headers: this.headers }
    );
  }

  userLogin(loginObj: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/login`,loginObj,{headers: this.headers});
  }

  createCompetition(competitionObj: CompetitionModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/competition`,competitionObj,{headers:this.headers});
  }

  getAllCompetition(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>(`${this.apiUrl}/GetAllCompetition`);
  }

  registerEvent(registerEventObj: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/project`, registerEventObj, {headers: this.headers});
  }
  
}
