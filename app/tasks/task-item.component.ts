import {Component, Input} from "@angular/core";
import {Task} from "../model";


@Component({
    selector: "task-item",
    templateUrl : "./app/tasks/task-item.component.html"
})
export class TaskItemComponent {
    @Input() private task : Task;

    
}
