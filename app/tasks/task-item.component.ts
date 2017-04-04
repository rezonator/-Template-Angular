import {Component, Input} from "@angular/core";
import {Task} from "../model";


@Component({
    selector: "task-item",
    template : `
    <div >
    <a [routerLink]="['/task', task.id]">
        <div class="col-xs-2">
            {{task.name}}
        </div>
        <div class="col-xs-6">
            {{ task.description }}
        </div>
        <div class="col-xs-1">
            {{task.status | enum }}
        </div>
        <div class="col-xs-2">
             {{ task.assigned }}
        </div>
        <div class="col-xs-1">
            {{ task.created | date }}
        </div>
    </a>    
</div>
    `

})
export class TaskItemComponent {
    @Input() private task : Task;
}
