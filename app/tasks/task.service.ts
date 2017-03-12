import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

// Status of the task.
export enum TaskStatus {
    Idle = 0,
    InProgress,
    Done
}

// Simple task.
export interface Task {
    id : string,
    name : string,
    ownerid :string,
    status : TaskStatus,
    update : string   ,
    //tags : Array<any> 
    // pamietac o strukturalnej widzialnosci - szef moze widziec themesy swich podwladnych etc
}

@Injectable()
export class TaskService{
    tasks = [
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring"  },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" },
        { id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" }
    ];

    constructor(private http : Http) {}

    getTasksForTheme(themeId : string) {
        return this.tasks;
    }

}