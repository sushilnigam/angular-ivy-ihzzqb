import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name = 'Welcome Test';
  name1 = 'Welcome Test';
  constructor() { }

  ngOnInit() {
  }
  receivename($event: string) {  
    this.name = $event;  
    }  

  messagelist = [{  
    id: 1,  
    msg: 'Test first notification'  
}, {  
    id: 2,  
    msg: 'Test first notificationqqqqq'  
}, {  id: 3,  
  msg: 'Test first notificationqqqqqttttttt'  }]; 
  
  @ViewChild(ChildComponent) child;  
 
  ngAfterViewInit() {  
     this.name1= this.child.name1;  
     }  
}