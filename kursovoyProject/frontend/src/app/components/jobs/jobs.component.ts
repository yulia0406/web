import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IJob } from 'src/app/models/jobs';
import { JobsService } from 'src/app/service/jobs.service';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { UpdateJobFormComponent } from '../update-job-form/update-job-form.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: IJob[];

  constructor(
    private jobService : JobsService,
    private router: Router,
    private modalService: NgbModal,
    ) {}

    ngOnInit(): void {
      this.jobService.getAll().subscribe(
        {
          next: jobs => {this.jobs = jobs},
          error: (error) => {}
        }
      )
    }

    openAddForm(): void {
      const departmentModalBox = this.modalService.open(UpdateJobFormComponent, {centered: true});
      departmentModalBox.componentInstance.title = "Добавить должность";
      departmentModalBox.result.then(name => {
        if (!name) return;
        const job : IJob = {
          id: 0,
          name: name
        };
        this.jobService.add(job).subscribe({
          next:(response) => {
            this.jobs.push(response);
          },
          error: (error) => alert(error.message)
        });
      });
    }

  openUpdateForm(id: number, index: number): void {
    let job = this.jobs[index];
    const departmentModalBox = this.modalService.open(UpdateJobFormComponent, {centered: true});
    departmentModalBox.componentInstance.id = id;
    departmentModalBox.componentInstance.name = job.name;
    departmentModalBox.componentInstance.title = "Изменить должность";
    departmentModalBox.result.then(name => {
      if (!name) return;
      job.name = name;
      this.jobService.update(job).subscribe({
        next: (response) => {
          this.jobs[index] = response;
        },
        error: (error) => alert('Вы ничего не ввели')
      }
      );
    });
  }
}
