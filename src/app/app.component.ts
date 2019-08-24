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
  slct = [];
  toggle: boolean;
  list: any;
 
addTodo(newTodoName)
{
  var newTodo={
    name: newTodoName,
    checkbox: false
  };
  this.todos.push(newTodo);
  console.log(this.todos)
  this.reqTodo = this.todos;
  this.toggle = true;
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
  this.list = 1;
  this.toggle = false;
}

showUnSelected()
{
  this.slct = this.todos.filter( (td) => 
  {
    if(td.checkbox==false )
    return td;
  });
  
  console.log(this.slct);
  this.list = 2;
  this.toggle = false;

}
showAll()
{
  this.slct = this.todos.filter( (a) => 
  {
    if(a.checkbox==true || a.checkbox==false)
    return a;
  });
  
  console.log(this.slct);
  this.list = 3;
  this.toggle = false;

}
}

// [checked]="countries[i].checked" (change)="countries[i].checked= !countries[i].checked"

// {{ todo.label ? '&#10004;' : '&#10006;' }}