import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import { Observable } from 'rxjs';
import { getSystemErrorMap } from 'util';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private equipeAdminUrl: string;

  constructor(private http: HttpClient) { 
this.equipeAdminUrl="http://localhost:8083/kaddem/equipe/"

  }
  public findAllEquipes(): Observable<Equipe> {
  
    return this.http.get<Equipe>(this.equipeAdminUrl+"All");
    
  }

  updateEquipe(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.equipeAdminUrl}/updateEquipe/${id}`, value);
  }

  getEquipe(id: number): Observable<Object> {
    //http://localhost:8083/kaddem/equipe/equipe/1
    return this.http.get(`${this.equipeAdminUrl}/equipe/${id}`);
  }

}
