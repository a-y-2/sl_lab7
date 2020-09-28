import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;
  count: number;

  constructor() { 
    this.todos = ["READING", "SLEEPING", "EXERCISE", "REGISTER"];
    this.count = this.todos.length;
  }

  ngOnInit(): void {
  }

}
