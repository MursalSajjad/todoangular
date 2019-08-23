import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() data: {name: string,checkbox: boolean}[] = [];

  
  constructor() { 
  }
  ngOnInit() {

    console.log(this.data);
  }

}