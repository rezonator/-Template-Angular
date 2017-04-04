
import {Component, OnInit, Inject} from "@angular/core";
import {Task,Engagement, TaskStatus, TSToken, ITaskService} from "../model";
import {MessageService} from "../shared/message.service";
import {TaskService} from "./task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector : "engagement-list" ,
    templateUrl : "./app/tasks/engagement-list.component.html",
    providers : [TaskService, MessageService],
})
export class EngagementListComponent implements OnInit {
    engagements : Array<Engagement>;
    private searchTerm = "";


    constructor(private taskService : TaskService, private messageService : MessageService, private route : ActivatedRoute) {        
    }   

    ngOnInit(): void {
         this.route.params.subscribe(pars => {
            this.engagements = this.taskService.getEngForUser(pars["id"]);
        });           

        this.messageService.success('Engagements loaded fine!');
    }

        /* Search relared */
    clearSearchTerm() {
        this.searchTerm = "";
    }

}