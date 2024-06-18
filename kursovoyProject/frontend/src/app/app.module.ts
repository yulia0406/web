import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmloyeesComponent } from './components/emloyees/emloyees.component';
import { EmloyeeComponent } from './components/emloyee/emloyee.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { OperationsComponent } from './components/operations/operations.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { AddDepartmentComponent } from './components/update-department/add-department.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { DepartmentsFormComponent } from './components/departments-form/departments-form.component';
import { UpdateOperationComponent } from './components/update-operation/update-operation.component';
import { TypeOperationFormComponent } from './components/type-operation-form/type-operation-form.component';
import { TypeOperationsFormComponent } from './components/type-operations-form/type-operations-form.component';
import { UpdateJobFormComponent } from './components/update-job-form/update-job-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    DepartmentsComponent,
    DepartmentComponent,
    EmloyeesComponent,
    EmloyeeComponent,
    JobsComponent,
    OperationsComponent,
    AddDepartmentComponent,
    UpdateEmployeeComponent,
    JobsFormComponent,
    DepartmentsFormComponent,
    UpdateOperationComponent,
    TypeOperationFormComponent,
    TypeOperationsFormComponent,
    UpdateJobFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
