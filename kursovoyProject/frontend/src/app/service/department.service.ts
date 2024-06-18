import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartment } from 'src/app/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${environment.apiUrl}/api/departments`);
  }

  get(id: number): Observable<IDepartment> {
    return this.http.get<IDepartment>(`${environment.apiUrl}/api/departments/${id}`);
  }

  add(department: IDepartment): Observable<IDepartment> {
    return this.http.post<IDepartment>(`${environment.apiUrl}/api/departments/add`, department);
  }

  update(department: IDepartment): Observable<IDepartment> {
    return this.http.post<IDepartment>(`${environment.apiUrl}/api/departments/update`, department);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/api/departments/delete/${id}`);
  }
}
