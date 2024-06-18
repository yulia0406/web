import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDepartment } from 'src/app/models/department';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.css']
})
export class DepartmentsFormComponent {
  departments: IDepartment[];
  
  constructor(
    private activeModal: NgbActiveModal
  ) {}


  save(departmant: IDepartment) {
    this.activeModal.close(departmant);
  }

  close() {
    this.activeModal.close();
  }
}
