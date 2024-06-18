import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITypeOperation } from 'src/app/models/typeOperation';
import { EmployeeService } from 'src/app/service/employee.service';
import { TypeOperationService } from 'src/app/service/type-operation.service';
import { TypeOperationFormComponent } from '../type-operation-form/type-operation-form.component';
import { IOperation } from 'src/app/models/operation';

@Component({
  selector: 'app-update-operation',
  templateUrl: './update-operation.component.html',
  styleUrls: ['./update-operation.component.css']
})
export class UpdateOperationComponent {
  constructor(
    private activeModal: NgbActiveModal,
    private typeOperationService: TypeOperationService,
    private modalService: NgbModal) { }

  title: string;
  id: number
  name: string;
  gender: string;
  date: Date;
  number: number;
  typeOperation: ITypeOperation;

  close(): void {
    this.activeModal.close();
  }

  save(): void {
    if (!this.name || !this.date || !this.typeOperation) {
      alert('Не заполнены все поля')
      return;
    }

    let operation : IOperation = {
      id: this.id,
      name: this.name,
      date: this.date,
      typeOperation: this.typeOperation
    }

    this.activeModal.close(operation);
  }

  openTypeOperations(): void {
    this.typeOperationService.getAll().subscribe({
      next: (response) => {
        const typeOperationsModalBox = this.modalService.open(TypeOperationFormComponent, {centered: true});
        typeOperationsModalBox.componentInstance.typeOperations = response;
        typeOperationsModalBox.result.then((typeOperation) => {
          this.typeOperation = typeOperation;
        }).catch((error) => {});
      },
      error: (error) => {
        alert(error);
      }
    });
  }
}
