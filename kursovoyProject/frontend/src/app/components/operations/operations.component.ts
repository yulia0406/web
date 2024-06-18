import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IOperation } from 'src/app/models/operation';
import { ITypeOperation } from 'src/app/models/typeOperation';
import { OperationService } from 'src/app/service/operation.service';
import { TypeOperationsFormComponent } from '../type-operations-form/type-operations-form.component';
import { TypeOperationService } from 'src/app/service/type-operation.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  typeOperations: ITypeOperation[];
  operations: IOperation[];
  operation: IOperation[];

  constructor(
    private operationService: OperationService,
    private typeOperationService: TypeOperationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.operationService.getAll().subscribe({
      next: (operation) => {
        this.operations = operation;
      },
      error: (error) => {}
    });
    this.getTypeOperations()
  }

  getTypeOperations(): void {
    const id = this.route.snapshot.params['id'];
    this.typeOperationService.getAll().subscribe({
      next: (typeOperation) => {
        this.typeOperations = typeOperation;
      },
      error: (error) => {}
    });
  }

  addTypeOperations(): void {
    const departmentModalBox = this.modalService.open(TypeOperationsFormComponent, {centered: true});
    departmentModalBox.result.then(name => {
      if (!name) return;
      const typeOperation : ITypeOperation = {
        id: 0,
        name: name
      };
      this.typeOperationService.add(typeOperation).subscribe({
        next:(response) => {
          this.typeOperations.push(response);
        },
        error: (error) => alert(error.message)
      });
    });
    this.getTypeOperations()
  }
}
