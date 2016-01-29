import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-selector',
    template: `
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="#status of statuses">
                {{status}}
            </option>
        </select>
    `
})
export class StatusSelector{
    @Output() select = new EventEmitter();
    
    statuses = ["started", "completed"];
    
    ngOnInit(){
        this.select.emit(this.statuses[0]);
    }
}
