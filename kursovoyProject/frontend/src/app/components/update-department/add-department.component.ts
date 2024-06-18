import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDepartment } from '../../models/department';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  constructor(
    private activeModal : NgbActiveModal, 
    private departmentService : DepartmentService){}

  title: string;
  id: number = 0; 
  name : string;

  save() {
    this.activeModal.close(this.name);
  }

  close() {
    this.activeModal.close();
  }
}