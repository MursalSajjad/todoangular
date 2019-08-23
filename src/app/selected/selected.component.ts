import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  @Input() selected: {name: string,checkbox: boolean}[] = [];  

  constructor() { }

  ngOnInit() {
  }
}