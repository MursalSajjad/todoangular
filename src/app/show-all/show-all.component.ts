import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  @Input() all: {name:string, checkbox: boolean}[] = [];

  constructor() { }

  ngOnInit() {
  }

}
