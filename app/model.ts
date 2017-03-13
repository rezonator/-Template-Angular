import {OpaqueToken} from "@angular/core";

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

// Task service.
export interface ITaskService {
     getTasksForTheme(themeId : string) : Array<Task>;
}

export const TSToken = new OpaqueToken("tstoken");