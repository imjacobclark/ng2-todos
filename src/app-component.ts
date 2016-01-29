import {Component} from 'angular2/core';

import {TodoInput} from './todo/components/todo-input-component';
import {TodoList} from './todo/components/todo-list-component';

import {StatusSelector} from './todo/components/status-selector-component';
import {SearchBox} from './search/components/search-box-component';

@Component({
    selector: 'app',
    directives: [TodoInput, TodoList, StatusSelector, SearchBox],
    template: `
        <search-box (update)="term = $event"></search-box>
        
        <todo-input></todo-input>
        
        <status-selector (select)="status = $event"></status-selector>
        
        <todo-list [status]="status" [term]="term"></todo-list>
    `
})
export class AppComponent {
}
