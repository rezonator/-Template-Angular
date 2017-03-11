import {Component} from "@angular/core";

// Status of the task.
enum TaskStatus {
    Idle = 0,
    InProgress,
    Done
}

// Simple task.
interface Task {
    id : string,
    name : string,
    ownerid :string,
    status : TaskStatus,
    update : string    
}

@Component({
    templateUrl : "./app/tasks/task-list.component.html"
})
export class TaskListComponent {
    tasks : Array<Task> = new Array<Task>();

    constructor() {
        this.tasks.push({ id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" });
        this.tasks.push({ id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" });
        this.tasks.push({ id : "123", name : "task1", ownerid : "someid", status : TaskStatus.Idle, update : "somestring" });
    }   
}