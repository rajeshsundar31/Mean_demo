import { Component } from '@angular/core';
import { VehicleComponent } from './vehicle/vehicle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_work';
  component:any;

  add(){
    this.component = VehicleComponent;
  }

}
