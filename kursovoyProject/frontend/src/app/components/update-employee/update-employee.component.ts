import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { IDepartment } from 'src/app/models/department';
import { IEmployee } from 'src/app/models/employee';
import { IJob } from 'src/app/models/jobs';
import { EmployeeService } from 'src/app/service/employee.service';
import { JobsService } from 'src/app/service/jobs.service';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { DepartmentService } from 'src/app/service/department.service';
import { DepartmentsFormComponent } from '../departments-form/departments-form.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  constructor(
    private activeModal: NgbActiveModal,
    private employeeService: EmployeeService,
    private jobsService: JobsService,
    private modalService: NgbModal,
    private departmentService: DepartmentService) { }

  title: string;
  id: number
  name: string;
  gender: string;
  birthdate: Date;
  number: number;
  department: IDepartment;
  job: IJob;
  departmentEnable: boolean = true;

  close(): void {
    this.activeModal.close();
  }

  save(): void {
    if (!this.name || !this.gender || !this.birthdate || !this.number || !this.job) {
      alert('Не заполнены все поля')
      return;
    }

    let employee : IEmployee = {
      id: this.id,
      name: this.name,
      gender: this.gender,
      birthdate: this.birthdate,
      number: this.number,
      department: this.department,
      job: this.job
    }

    this.activeModal.close(employee);
  }

  openDepartments(): void {
    if (!this.departmentEnable) return;
    this.departmentService.getAll().subscribe({
      next: (response) => {
        const departmentsModalBox = this.modalService.open(DepartmentsFormComponent, {centered: true});
        departmentsModalBox.componentInstance.departments = response;
        departmentsModalBox.result.then((department) => {
          this.department = department;
        }).catch((error) => {});
      }
    });
  }

  openJobs(): void {
    this.jobsService.getAll().subscribe({
      next: (response) => {
        const jobsModalBox = this.modalService.open(JobsFormComponent, {centered: true});
        jobsModalBox.componentInstance.jobs = response;
        jobsModalBox.result.then((job) => {
          this.job = job;
        }).catch((error) => {});
      }
    });
  }
}
