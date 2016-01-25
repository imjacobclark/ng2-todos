import {Component} from 'angular2/core';
import {TodoService} from './todo-service.service';
import {TodoModel} from './todo-model.model';

@Component({
    selector: 'todo-input',
    template: `
        <form (submit)="onSubmit()">
            <input type="text" [(ngModel)]="todoModel.title">
        </form>
    `
})
export class TodoInput {
    todoModel: TodoModel = new TodoModel();

    constructor(public todoService: TodoService){}

    onSubmit(){
        this.todoService.todos.push(this.todoModel);
        this.todoModel = new TodoModel();
    }
}
