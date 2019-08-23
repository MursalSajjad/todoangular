import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos = [];
  reqTodo = [];
  slct=[];
  uslct=[];
  sall = [];
  show: boolean;
  toggle: any;
  pMessage ="Hello child!";
 
addTodo(newTodoName)
{
  var newTodo={
    name: newTodoName,
    checkbox: false
  };
  this.todos.push(newTodo);
  console.log(this.todos)
  this.reqTodo = this.todos;
  this.show = true;
}

deleteTodo(todo)
{
  this.reqTodo=this.todos.filter(t=> t.name!==todo.name)
}

showSelected()
{
   this.slct = this.todos.filter( (todo) => {
      if(todo.checkbox==true)
      return todo
    });
  console.log(this.slct);
  this.show = false;
  this.toggle = 1;
}

showUnSelected()
{
   this.slct = this.todos.filter( (todo) => {
      if(todo.checkbox==false)
      return todo
    });
  console.log(this.slct);
  this.show = false;
  this.toggle = 2;
}

showAll()
{
  this.slct = this.todos.filter( (a) => 
  {
    if(a.checkbox==true || a.checkbox==false)
    return a;
  });
  
  console.log(this.slct);
  this.show = false;
  this.toggle = 3;
}
}

// [checked]="countries[i].checked" (change)="countries[i].checked= !countries[i].checked"

// {{ todo.label ? '&#10004;' : '&#10006;' }}