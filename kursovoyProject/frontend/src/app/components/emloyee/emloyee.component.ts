import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IEmployee } from 'src/app/models/employee';
import { IEmployeeOperation } from 'src/app/models/employeeOperation';
import { IOperation } from 'src/app/models/operation';
import { EmployeeOperationService } from 'src/app/service/employee-operation.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { OperationService } from 'src/app/service/operation.service';
import { UpdateOperationComponent } from '../update-operation/update-operation.component';

@Component({
  selector: 'app-emloyee',
  templateUrl: './emloyee.component.html',
  styleUrls: ['./emloyee.component.css']
})
export class EmloyeeComponent implements OnInit {

  employee: IEmployee;
  employeeOperations: IEmployeeOperation[];

  constructor(
    private employeeService: EmployeeService,
    private employeeOperationService: EmployeeOperationService,
    private operationService: OperationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.employeeService.get(id).subscribe({
      next: (employee) => {
        this.employee = employee;
      },
      error: (error) => {}
    });

    this.employeeOperationService.getByEmployee(id).subscribe({
      next: (employeeOperations) => {this.employeeOperations = employeeOperations},
      error: (error) => {}
    });
  }

  addOperation(): void {
    const operationModalBox = this.modalService.open(UpdateOperationComponent, {centered: true});
    operationModalBox.componentInstance.title = "Создание операции";
    operationModalBox.result.then((response) => {
      if (!response) return;
      this.operationService.add(response).subscribe({
        next: (operation) => {
          const employeeOperation : IEmployeeOperation = {
            id: 0,
            employee: this.employee,
            operation: operation
          }
          this.employeeOperationService.add(employeeOperation).subscribe({
            next: (response) => {
              this.employeeOperations.push(response);
            },
            error: (error) => {}
          })
        }
      })
    }).catch((error) => {});
  }

  deleteOperation(id: number, index: number): void {
    this.employeeOperationService.delete(id).subscribe({
      next: (response) => {
      if (!response) return;
      this.employeeOperations.splice(index, 1);
    },
    error: (error) => alert(error)
  });
}
}
