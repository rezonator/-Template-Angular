import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Task, TaskStatus, TaskPriority, ITaskService } from "../model"


@Injectable()
export class TaskService implements ITaskService {
    tasks = [
        { id : "123", name : "task1", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring", 
            priority : TaskPriority.Low  },
        { id : "123", name : "task1", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.High },
        { id : "123", name : "task1", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.Normal },
        { id : "123", name : "task1", ownerid : "someid", created : "02/03/2016", assigned : "Jarek", description :"Som task",  status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.Critical }
    ];

    constructor(private http : Http) {}

    // Get's snapshot of tasks.
    getTasksForTheme(themeId : string) {
        return this.tasks;
    }

    // Returns a simulated stream of tasks.
    getTasksStream() {
        return Observable.create((observer: Observer<Task>) => {
            setTimeout(() => {
                observer.next( { id : "1", name : "task1", created : "02/03/2016", assigned : "Jarek", description :"Som task",  ownerid : "jarek", status : TaskStatus.Idle, update : "somestring",
            priority : TaskPriority.High  } );
            }, 1000);

            setTimeout(() => {
                observer.next( { id : "2", name : "task2", created : "02/03/2016", assigned : "Jarek", description :"Som task", ownerid : "marek", status : TaskStatus.InProgress, update : "somestring2",
            priority : TaskPriority.Low  });
            }, 2000);
        });    
    }
}