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
}
