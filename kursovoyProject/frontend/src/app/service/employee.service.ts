import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${environment.apiUrl}/api/employees`);
  }

  get(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${environment.apiUrl}/api/employees/${id}`);
  }

  getByDepartment(id: number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${environment.apiUrl}/api/employees/department/${id}`);
  }

  add(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${environment.apiUrl}/api/employees/add`, employee);
  }

  update(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${environment.apiUrl}/api/employees/update`, employee);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/employees/delete/${id}`);
  }
}
