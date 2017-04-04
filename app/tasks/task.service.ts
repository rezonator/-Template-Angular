import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Task, TaskStatus, Engagement, TaskPriority, ITaskService } from "../model"


@Injectable()
export class TaskService implements ITaskService {

    tasks = [
        { id : "1", name : "task1", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring", 
            priority : TaskPriority.Low , engagementId : "1" },
        { id : "2", name : "task2", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.High, engagementId : "1" },
        { id : "3", name : "task3", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.Normal, engagementId : "1" },
        { id : "4", name : "task4", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.Critical , engagementId : "1"}
    ];

    engagements = [
    {
      id : "1",
      name : "First engagement",
      description : "Hello, this is my first engagement",
      ownerIds : [""],
      created : "01/03/2017",
      tasks : this.tasks
    }];

    constructor(private http : Http) {}

    // Get's snapshot of tasks.
    getTasksForEng(engId : string) {
        return this.tasks.filter(t => t.engagementId == engId);
    }

    // Get engagement data .
    getEngagement(engId : string, full : boolean = false) {
        return this.engagements.find(en => en.id == engId);
    }

    getTaskForId(taskId : string) : Task {
        var task = this.tasks.find(t => t.id == taskId);
        if(task == undefined)
            return null;
        return task;
    }

    getEngForUser(userId: string): Engagement[] {
        return this.engagements;
    }


    // Returns a simulated stream of tasks.
    getTasksStream() {
        return Observable.create((observer: Observer<Task>) => {
            setTimeout(() => {
                observer.next( { id : "1", name : "task1", created : "02/03/2016", assigned : "Jarek", description :"Som task",  ownerid : "jarek", status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.High,  engagementId : "1"  } );
            }, 1000);

            setTimeout(() => {
                observer.next( { id : "2", name : "task2", created : "02/03/2016", assigned : "Jarek", description :"Som task", ownerid : "marek", status : TaskStatus.InProgress, update : "somestring2",
            priority : TaskPriority.Low ,  engagementId : "1" });
            }, 2000);
        });    
    }
}