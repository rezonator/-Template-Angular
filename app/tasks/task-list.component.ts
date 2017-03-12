import {Component, OnInit} from "@angular/core";
import {Task, TaskStatus, TaskService} from "./task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl : "./app/tasks/task-list.component.html",
    providers : [TaskService]
})
export class TaskListComponent implements OnInit {
    tasks : Array<Task> = new Array<Task>();    

    constructor(private taskService : TaskService, private route : ActivatedRoute) {        
    }   

    ngOnInit() {
        this.route.params.subscribe(pars => {
            var itemz = this.taskService.getTasksForTheme("1").map(r => r as Task);
            this.tasks = itemz;
        });         
    }

}