import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IJob } from 'src/app/models/jobs';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent {
  jobs: IJob[];
  
  constructor(
    private activeModal: NgbActiveModal
  ) {}


  save(job: IJob) {
    this.activeModal.close(job);
  }

  close() {
    this.activeModal.close();
  }
}
