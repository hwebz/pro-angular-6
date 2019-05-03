export class Model {
  user;
  items;

  constructor() {
    this.user = 'hwebz';
    this.items = [
      { action: 'Buy flowers', done: false},
      { action: 'Get Shoes', done: false},
      { action: 'Do homeworkd', done: true},
      { action: 'Running around a lake', done: false}
    ];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
