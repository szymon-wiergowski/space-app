import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from './pilot';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PilotAttrs } from './pilot-attrs';

@Injectable({
  providedIn: 'root',
})
export class PilotService {
  constructor(private http: HttpClient) {}

  public getPilots(): Observable<Pilot[]> {
    return this.http
      .get<PilotAttrs[]>(`${environment.apiUrl}/pilots`)
      .pipe(map(data => data.map(pilotAttrs => new Pilot(pilotAttrs))));
  }

  public getPilot(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(`${environment.apiUrl}/pilots/${id}`).pipe(map(pilotAttrs => new Pilot(pilotAttrs)));
  }

  public createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http
      .post<PilotAttrs>(`${environment.apiUrl}/pilots`, data)
      .pipe(map(pilotAttrs => new Pilot(pilotAttrs)));
  }

  public updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.http
      .put<PilotAttrs>(`${environment.apiUrl}/pilots/${data.id}`, data)
      .pipe(map(pilotAttrs => new Pilot(pilotAttrs)));
  }

  public savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    console.log(pilotAttrs.id);
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }
}
