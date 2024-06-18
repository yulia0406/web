import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeOperation } from '../models/employeeOperation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOperationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IEmployeeOperation[]> {
    return this.http.get<IEmployeeOperation[]>(`${environment.apiUrl}/api/employeeOperations`);
  }

  get(id: number): Observable<IEmployeeOperation> {
    return this.http.get<IEmployeeOperation>(`${environment.apiUrl}/api/employeeOperations/${id}`);
  }

  getByEmployee(id: number): Observable<IEmployeeOperation[]> {
    return this.http.get<IEmployeeOperation[]>(`${environment.apiUrl}/api/employeeOperations/employee/${id}`);
  }

  getByOperation(id: number): Observable<IEmployeeOperation[]> {
    return this.http.get<IEmployeeOperation[]>(`${environment.apiUrl}/api/employeeOperations/operation/${id}`);
  }

  add(employee: IEmployeeOperation): Observable<IEmployeeOperation> {
    return this.http.post<IEmployeeOperation>(`${environment.apiUrl}/api/employeeOperations/add`, employee);
  }

  update(employee: IEmployeeOperation): Observable<IEmployeeOperation> {
    return this.http.post<IEmployeeOperation>(`${environment.apiUrl}/api/employeeOperations/update`, employee);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/employeeOperations/delete/${id}`);
  }
}
