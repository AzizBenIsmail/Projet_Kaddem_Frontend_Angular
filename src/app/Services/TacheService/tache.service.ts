import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from 'app/models/Tache';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private getUrl: string= "http://localhost:8084/dbkaddem2/tache";
  constructor(private _httpClient: HttpClient) { }
  getTaches(): Observable<Tache[]> {
    return this._httpClient.get<Tache[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveTache(tache: Tache): Observable<Tache> {
    return this._httpClient.post<Tache>(this.getUrl, tache);
  }

  getTache(id: number): Observable<Tache> {
    return this._httpClient.get<Tache>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteTache(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}
