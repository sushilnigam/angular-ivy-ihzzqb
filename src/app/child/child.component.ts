import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';  

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messagelist: any[];  
  @Output() nameEmitter = new EventEmitter <string> (); 

    constructor() {}  
    name: string = "";  
    name1: string = "Sushil nigam"; 
    PostData() {  
        this.nameEmitter.emit(this.name);  
    }  
  ngOnInit() {
  }

}


