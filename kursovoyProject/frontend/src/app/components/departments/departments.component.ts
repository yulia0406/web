import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDepartmentComponent } from 'src/app/components/update-department/add-department.component';
import { IDepartment } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  
  departments: IDepartment[];
  nameDepartment: string
  id_delete: number
  idDepartment: number 
  nameUpdateDepartment: string
  name_delete: string
  
  constructor(
    private departmentService : DepartmentService,
    private router: Router,
    private modalService: NgbModal,
    ) {}

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(
      {
        next: departments => {this.departments = departments},
        error: (error) => {}
      }
    )
  }

  openUpdateForm(id: number, index: number): void {
    let department = this.departments[index];
    const departmentModalBox = this.modalService.open(AddDepartmentComponent, {centered: true});
    departmentModalBox.componentInstance.id = id;
    departmentModalBox.componentInstance.name = department.name;
    departmentModalBox.componentInstance.title = "Изменить департаммент";
    departmentModalBox.result.then(name => {
      if (!name) return;
      department.name = name;
      this.departmentService.update(department).subscribe({
        next: (response) => {
          this.departments[index] = response;
        },
        error: (error) => alert('Вы ничего не ввели')
      }
      );
    });
  }

  openDepartmentForm(): void {
    const departmentModalBox = this.modalService.open(AddDepartmentComponent, {centered: true});
    departmentModalBox.componentInstance.title = "Добавить департамент";
    departmentModalBox.result.then(name => {
      if (!name) return;
      const departmant : IDepartment = {
        id: 0,
        name: name
      };
      this.departmentService.add(departmant).subscribe({
        next:(response) => {
          this.departments.push(response);
        },
        error: (error) => alert(error.message)
      });
    });
  }

  openDepartment(id: number): void {
    this.router.navigate(['department', id]);
  } 

  deleteDepartment(id: number, index: number): void {
    this.departmentService.delete(id).subscribe({
      next: (response) => {
      if (!response) return;
      this.departments.splice(index, 1);
    },
    error: (error) => alert(error)
  });
}
}
