import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addTodo(newText) {
    if (newText !== '') {
      this.model.items.push(new TodoItem(newText, false));
    }
  }
}
