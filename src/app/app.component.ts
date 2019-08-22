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
  sall = [
    ];
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
}

showUnSelected()
{
   this.uslct = this.todos.filter( (todo) => {
      if(todo.checkbox==false)
      return todo
    });
  console.log(this.uslct);
}

showAll()
{
  this.sall = this.todos.filter( (a) => 
  {
    if(a.checkbox==true || a.checkbox==false)
    return a;
  });
  
  console.log(this.sall);
}
}

// [checked]="countries[i].checked" (change)="countries[i].checked= !countries[i].checked"

// {{ todo.label ? '&#10004;' : '&#10006;' }}