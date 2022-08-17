import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
toggleValue=true;
  ngOnInit(): void {
  }
  toggled(event:any){
console.log(event);

this.toggleValue=event;
  }
}
