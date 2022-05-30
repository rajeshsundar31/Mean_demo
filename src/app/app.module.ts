import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RoutingComponents } from './app-routing.module';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MyscmComponent } from './myscm/myscm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogformComponent } from './dialogform/dialogform.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import { LoginComponent } from './auth/login/login.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AgmCoreModule } from '@agm/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OrganizationComponent } from './organization/organization.component';
// import { DriverComponent } from './driver/driver.component';
// import { VehicleComponent } from './vehicle/vehicle.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    TaskComponent,
    RoutingComponents,
    MyscmComponent,
    DialogformComponent,
    LoginComponent,
    FormsComponent,
    SignupComponent,
    OrganizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatDialogModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAL-aVnUdrc0p2o0iWCSsjgKoqW5ywd0MQ'
    })

  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
