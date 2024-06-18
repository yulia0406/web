import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDepartment } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {
  constructor(
    private departmentService : DepartmentService,
    private router: Router,
    private modalService: NgbModal,
    ) {}

    departments: IDepartment[];
    news = {"backgroundcolor":"#e6e6ca"}

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(
      {
        next: departments => {this.departments = departments},
        error: (error) => {}
      }
    )
  }

  openDepartments() : void {
    this.router.navigate(['departments']);
  }

  openEmployees() : void {
    this.router.navigate(['employees']);
  }

  openOperations() : void {
    this.router.navigate(['operations']);
  }

  openJobs() : void {
    this.router.navigate(['jobs']);
  }
}