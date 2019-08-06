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
 all = [];
 array = [
   {name:"Mursal", class: 5},
   {name:"Maham", class: 4},
   {name:"Hina", class: 6},
   {name:"Sana", class: 7},

 ]

 
addTodo(newTodoName)
{
  var newTodo={
    name: newTodoName,
    checkbox: false
  };
  this.todos.push(newTodo);
  console.log(this.todos)
}

deleteTodo(todo)
{
  this.todos=this.todos.filter(t=> t.name!==todo.name)
}

showSelected()
{
   this.reqTodo = this.todos.filter( (todo) => {
      if(todo.checkbox==true)
      return todo
    });
  console.log(this.reqTodo);
}

showUnSelected()
{
  this.reqTodo = this.todos.filter( (td) => 
  {
    if(td.checkbox==false )
    return td;
  });
  
  console.log(this.reqTodo);
}
showAll()
{
  this.reqTodo = this.todos.filter( (a) => 
  {
    if(a.checkbox==true || a.checkbox==false)
    return a;
  });
  
  console.log(this.reqTodo);
}
}

// [checked]="countries[i].checked" (change)="countries[i].checked= !countries[i].checked"

//{{ todo.label ? '&#10004;' : '&#10006;' }}