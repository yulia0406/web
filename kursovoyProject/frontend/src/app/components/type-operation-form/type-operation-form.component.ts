import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITypeOperation } from 'src/app/models/typeOperation';

@Component({
  selector: 'app-type-operation-form',
  templateUrl: './type-operation-form.component.html',
  styleUrls: ['./type-operation-form.component.css']
})
export class TypeOperationFormComponent {
  typeOperations: ITypeOperation[];
  
  constructor(
    private activeModal: NgbActiveModal
  ) {}

  save(typeOperation: ITypeOperation) {
    this.activeModal.close(typeOperation);
  }

  close() {
    this.activeModal.close();
  }
}
