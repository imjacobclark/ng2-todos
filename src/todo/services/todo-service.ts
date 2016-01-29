import {Injectable} from 'angular2/core';

import {TodoModel} from '../services/todo-model';

@Injectable()
export class TodoService{
    todos = [
        new TodoModel("Eat"),
        new TodoModel("Sleep"),
        new TodoModel("Code")
    ];
    
    addTodo(todo: TodoModel){
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo:TodoModel){
        todo.toggle();
        
        const i = this.todos.indexOf(todo);
           
        console.log(this.todos);  
         
        this.todos = [...this.todos];
    }
}
