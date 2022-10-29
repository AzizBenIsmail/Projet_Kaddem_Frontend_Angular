import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import { Observable } from 'rxjs';
import { getSystemErrorMap } from 'util';
import {NgForm} from '@angular/forms';
import { map } from 'rxjs/operators';
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


  public save(equipe: Equipe) {
    return this.http.post<Equipe>(this.equipeAdminUrl+"AddEquipe/", equipe);
  }


  updateEquipe(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8083/kaddem/equipe/updateEquipe/${id}`, value);
  }

  getEquipe(id: number): Observable<Object> {
    //http://localhost:8083/kaddem/equipe/equipe/1
    return this.http.get(`${this.equipeAdminUrl}/equipe/${id}`);
  }
  deleteEquipe(id:number):Observable<Object>{
 //   http://localhost:8083/kaddem/equipe/deleteEquipe/13
    return this.http.delete(`http://localhost:8083/kaddem/equipe/deleteEquipe/${id}`);
  }

  changeValidite(id:number,idD:number):Observable<Object>{
    //   http://localhost:8083/kaddem/equipe/deleteEquipe/13


    return this.http.get(`http://localhost:8083/kaddem/equipe/changeV/${id}/${idD}`);
  }


}
