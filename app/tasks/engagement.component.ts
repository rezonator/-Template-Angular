import {Component, OnInit, Inject} from "@angular/core";
import {Task,Engagement, TaskStatus, TSToken, ITaskService} from "../model";
import {MessageService} from "../shared/message.service";
import {TaskService} from "./task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector : "engagement" ,
    templateUrl : "./app/tasks/engagement.component.html",
    providers : [TaskService, MessageService],
})
export class EngagementComponent implements OnInit {

    // Search and data.
    private searchTerm = "";
    engagement : Engagement;
    tasks : Array<Task> = new Array<Task>();    
    
    // Sample data.
    ids : Array<string> = [];
    idCounts : Array<number> = [];
    tasksOverTime : Array<number> = [];

    // Mapped ids.
    private _ids = new Map<string, number>();


    constructor(private taskService : TaskService, private messageService : MessageService, private route : ActivatedRoute) {        
    }   

    ngOnInit() {
        // Get route params.
        this.route.params.subscribe(pars => {
            this.engagement = this.taskService.getEngagement(pars["id"], true);
            if(this.engagement != null)
                this.tasks = this.engagement.tasks;
        });           

        this.messageService.success('Data loaded fine!');
    }  

    /* Search relared */
    clearSearchTerm() {
        this.searchTerm = "";
    }

    getTaskClass(task: Task) {
        return {'priority-low' : task.priority === 0, 'priority-normal' : task.priority === 1, 'priority-high' : task.priority === 2 , 'priority-critical' : task.priority === 3};
    }
}