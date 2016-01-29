import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item-renderer',
    template: `
        <style>
            .completed {
                text-decoration: line-through;
            }
        </style>
        <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="toggle.emit(todo)">Toggle</button>
    `
})
export class TodoItemRenderer {
    @Input() todo;
    @Output() toggle = new EventEmitter();
}
