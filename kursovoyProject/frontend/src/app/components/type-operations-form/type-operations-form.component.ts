import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITypeOperation } from 'src/app/models/typeOperation';

@Component({
  selector: 'app-type-operations-form',
  templateUrl: './type-operations-form.component.html',
  styleUrls: ['./type-operations-form.component.css']
})
export class TypeOperationsFormComponent {
  typeOperations: ITypeOperation[];
  name: string;
  
  constructor(
    private activeModal: NgbActiveModal
  ) {}

  save() {
    this.activeModal.close(this.name);
  }

  close() {
    this.activeModal.close();
  }
}
