import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TaskComponent } from './task/task.component';
import { MyscmComponent } from './myscm/myscm.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: MyscmComponent},
  {path: "task", component: TaskComponent},
  {path: "driver", component: DriverComponent},
  {path: "vehicle", component: VehicleComponent},
  {path: "form", component: FormsComponent},
  {path: "signup", component: SignupComponent},
  {path: "Organization", component: OrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[ DriverComponent, VehicleComponent, MyscmComponent, LoginComponent, OrganizationComponent]