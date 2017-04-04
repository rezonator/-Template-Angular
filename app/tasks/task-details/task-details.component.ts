import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {Task} from "../../model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector : "task-details",
    templateUrl : "./app/tasks/task-details/task-details.component.html",
     styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height: 100px; }
    `],
    providers : [TaskService]
})
export class TaskDetailsComponent implements OnInit {

    task : Task;

    constructor (private taskService : TaskService, private route : ActivatedRoute ) {        
    }

    ngOnInit(): void {
        var id = this.route.snapshot.params['id'];
        this.task = this.taskService.getTaskForId(id);        
    }
}