import { Injectable } from '@angular/core';
import { IJob } from '../models/jobs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${environment.apiUrl}/api/jobs`);
  }

  get(id: number): Observable<IJob> {
    return this.http.get<IJob>(`${environment.apiUrl}/api/jobs/${id}`);
  }

  add(job: IJob): Observable<IJob> {
    return this.http.post<IJob>(`${environment.apiUrl}/api/jobs/add`, job);
  }

  update(job: IJob): Observable<IJob> {
    return this.http.post<IJob>(`${environment.apiUrl}/api/jobs/update`, job);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/jobs/delete/${id}`);
  }
}
