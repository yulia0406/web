import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-job-form',
  templateUrl: './update-job-form.component.html',
  styleUrls: ['./update-job-form.component.css']
})
export class UpdateJobFormComponent {
  constructor(
    private activeModal : NgbActiveModal){}

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
