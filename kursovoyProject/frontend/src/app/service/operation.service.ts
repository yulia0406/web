import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOperation } from '../models/operation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IOperation[]> {
    return this.http.get<IOperation[]>(`${environment.apiUrl}/api/operations`);
  }

  get(id: number): Observable<IOperation> {
    return this.http.get<IOperation>(`${environment.apiUrl}/api/operations/${id}`);
  }

  add(operation: IOperation): Observable<IOperation> {
    return this.http.post<IOperation>(`${environment.apiUrl}/api/operations/add`, operation);
  }

  update(operation: IOperation): Observable<IOperation> {
    return this.http.post<IOperation>(`${environment.apiUrl}/api/operations/update`, operation);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/operations/delete/${id}`);
  }
}
