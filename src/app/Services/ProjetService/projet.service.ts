import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from 'app/models/Projet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private getUrl: string= "http://localhost:8083/kaddem/Projet/";
  constructor(private _httpClient: HttpClient) { }
  getProjets(): Observable<Projet[]> {
   
    return this._httpClient.get<Projet[]>(this.getUrl+"findAllProjets").pipe(
      map(response => response)
    )
  }

  saveProjet(projet: Projet): Observable<Projet> {
    return this._httpClient.post<Projet>(this.getUrl+"addProjet", projet);
  }

  getProjet(id: number): Observable<Projet> {
    return this._httpClient.get<Projet>(`${this.getUrl+"findProjectById"}/${id}`).pipe(
      map(response => response)
    )
  }
  
 deleteProjet(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl+"deleteProjetbyId"}/${id}`, {responseType: 'text'});
  }
}




