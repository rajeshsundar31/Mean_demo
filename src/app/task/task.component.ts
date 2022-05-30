import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // step = 0;
  panelOpenState=false;
  // blur_circular:any;
  newComponent = true;
  startComponent = false;

  constructor() { }


  ngOnInit(): void {
  }

  addNew(){
    this.newComponent = false;
    this.startComponent=true;
  }
}
