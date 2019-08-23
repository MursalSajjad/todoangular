import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() rr: {name: string,checkbox: boolean}[] = [];
  slct=[];
  show :any;
  toggle:any

  constructor() {
    console.log(this.rr)
  }

  ngOnInit() {
  }

  showSelected()
{
   this.slct = this.rr.filter( (todo) => {
      if(todo.checkbox==true)
      return todo
    });
  console.log(this.slct);
  this.show = false;
  this.toggle = 1;
}

showUnSelected()
{
   this.slct = this.rr.filter( (todo) => {
      if(todo.checkbox==false)
      return todo
    });
  console.log(this.slct);
  this.show = false;
  this.toggle = 2;
}

showAll()
{
  this.slct = this.rr.filter( (a) => 
  {
    if(a.checkbox==true || a.checkbox==false)
    return a;
  });
 
  console.log(this.slct);
  this.show = false;
  this.toggle = 3;
}
}