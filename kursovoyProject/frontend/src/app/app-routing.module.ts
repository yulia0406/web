import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmloyeesComponent } from './components/emloyees/emloyees.component';
import { EmloyeeComponent } from './components/emloyee/emloyee.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { OperationsComponent } from './components/operations/operations.component';

const routes: Routes = [
  {path: '', component: DepartmentsComponent},
  {path: 'departments', component:  DepartmentsComponent},
  {path: 'department/:id', component:  DepartmentComponent},
  {path: 'employees', component: EmloyeesComponent},
  {path: 'employee/:id', component: EmloyeeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'operations', component: OperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
