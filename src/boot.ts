import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './components/app-component'
import {TodoService} from './services/todo-service';

bootstrap(AppComponent, [HTTP_PROVIDERS, TodoService]);
