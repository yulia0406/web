import { Injectable } from '@angular/core';
import { ITypeOperation } from '../models/typeOperation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ITypeOperation[]> {
    return this.http.get<ITypeOperation[]>(`${environment.apiUrl}/api/typeOperations`);
  }

  get(id: number): Observable<ITypeOperation> {
    return this.http.get<ITypeOperation>(`${environment.apiUrl}/api/typeOperations/${id}`);
  }

  add(typeOperation: ITypeOperation): Observable<ITypeOperation> {
    return this.http.post<ITypeOperation>(`${environment.apiUrl}/api/typeOperations/add`, typeOperation);
  }

  update(typeOperation: ITypeOperation): Observable<ITypeOperation> {
    return this.http.post<ITypeOperation>(`${environment.apiUrl}/api/typeOperations/update`, typeOperation);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/typeOperations/delete/${id}`);
  }
}
