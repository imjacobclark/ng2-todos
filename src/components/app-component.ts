import {Component} from 'angular2/core';

import {TodoInput} from './todo-input-component';
import {TodoList} from './todo-list-component';

@Component({
    selector: 'app',
    directives: [TodoInput, TodoList],
    template: `
        <todo-input></todo-input>
        <todo-list></todo-list>
    `
})
export class AppComponent {
}
