import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Task, TaskStatus, ITaskService } from "../model"


@Injectable()
export class TaskService implements ITaskService {
    tasks = [
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring"  },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" }
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
                observer.next( { id : "1", name : "task1", ownerid : "jarek", status : TaskStatus.Idle, update : "somestring"  });
            }, 1000);

            setTimeout(() => {
                observer.next( { id : "2", name : "task2", ownerid : "marek", status : TaskStatus.InProgress, update : "somestring2"  });
            }, 2000);
        });    
    }
}