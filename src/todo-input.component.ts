import {Component} from 'angular2/core';
import {TodoService} from './todo-service.service';

@Component({
    selector: 'todo-input',
    template: `
        <input type="text" #todoInput>

        <button
            (click)="onClick(todoInput.value)"
            (click)="todoInput.value = ''"
        >Add todo</button>
    `
})
export class TodoInput {
    constructor(public todoService: TodoService){}

    onClick(value){
        this.todoService.todos.push(value);
    }
}
