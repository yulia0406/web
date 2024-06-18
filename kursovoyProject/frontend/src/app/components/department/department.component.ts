import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDepartment } from 'src/app/models/department';
import { IEmployee } from 'src/app/models/employee';
import { IJob } from 'src/app/models/jobs';
import { DepartmentService } from 'src/app/service/department.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: IDepartment;
  employees: IEmployee[];
  id: number
  name: string;
  gender: string;
  birthdate: Date;
  number: number;
  job: IJob;

  idEmployee: number

  name_delete: string;

  constructor(
    private departmentService: DepartmentService,
    private employeesService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.departmentService.get(id).subscribe({
      next: (department) => {this.department = department},
      error: (error) => {}
    });
    this.employeesService.getByDepartment(id).subscribe(
      {
        next: employees => {this.employees = employees},
        error: (error) => {}
      }
    );
  }
  
  openAddEmployeeForm(): void {
    const employeeModalBox = this.modalService.open(UpdateEmployeeComponent, {centered: true});
    employeeModalBox.componentInstance.title = "Добавление сотрудника";
    employeeModalBox.componentInstance.department = Object.assign({}, this.department);
    employeeModalBox.componentInstance.departmentEnable = false;
    employeeModalBox.result.then((employee : IEmployee) => {
      if (!employee) return;
      this.employeesService.add(employee).subscribe({
        next: (response) => {
          this.employees.push(response);
        },
        error: (error) => {
          alert(error);
        }
      });
    }).catch((error) => {});
  }

  openUpdateEmployeeForm(id: number, index: number): void {
    let employee = Object.assign({}, this.employees[index]);
    const employeeModalBox = this.modalService.open(UpdateEmployeeComponent, {centered: true});
    employeeModalBox.componentInstance.title = "Изменить сотрудника";
    employeeModalBox.componentInstance.id = employee.id;
    employeeModalBox.componentInstance.gender = employee.gender;
    employeeModalBox.componentInstance.name = employee.name;
    employeeModalBox.componentInstance.birthdate = employee.birthdate;
    employeeModalBox.componentInstance.number = employee.number;
    employeeModalBox.componentInstance.department = employee.department;
    employeeModalBox.componentInstance.job = employee.job;
    employeeModalBox.componentInstance.departmentEnable = false;
    employeeModalBox.result.then((employee : IEmployee) => {
      if (!employee) return;
      this.employeesService.update(employee).subscribe({
        next:(reponse) => {
          this.employees[index] = reponse;
        },
        error:(error) => alert(error)
      });
    }).catch((error) => {});
  }

  openEmployee(id: number): void {
    this.router.navigate(['employee', id]);
  } 

  deleteEmployee(id: number, index: number): void {
    this.employeesService.delete(id).subscribe({
      next: (response) => {
        if (!response) return;
        this.employees.splice(index, 1);
      },
      error: (error) => alert(error)
  });
  }
}
