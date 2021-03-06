import {Component, OnInit, Inject} from "@angular/core";
import {Task, TaskStatus, TSToken, ITaskService} from "../model";
import {TaskItemComponent} from "./task-item.component"
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "./task.service";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {MessageService} from "../shared/message.service";
import {Observable} from "rxjs";

@Component({
    templateUrl : "./app/tasks/task-list.component.html",
    providers : [TaskService, MessageService],
        styles : [`
        .priority-low {  background-color: yellow !important;  }
        .priority-normal {  background-color: grey !important;    }
        .priority-high { background-color: blue !important;  }
        .priority-critical {   background-color: red !important;    }
        .nopad { padding : 0;}
    `    
    ]
})
export class TaskListComponent implements OnInit {
// @Input() private tasks : Array<Task>;
// but then we cant use router , would have to pass this input from some parent component like TaskView specifically

    private searchTerm = "";

    tasks : Array<Task> = new Array<Task>();    
    
    // Sample data.
    ids : Array<string> = [];
    idCounts : Array<number> = [];
    tasksOverTime : Array<number> = [];

    private _ids = new Map<string, number>();


    constructor(private taskService : TaskService, private messageService : MessageService, private route : ActivatedRoute) {        
    }   

    ngOnInit() {
        // Get route params.
        this.route.params.subscribe(pars => {
            var itemz = this.taskService.getTasksForEng("1").map(r => r as Task);
            this.tasks = itemz;
        });         

        // Get strean of tasks and werk on them.
        const tasks = (this.taskService.getTasksStream() as Observable<Task>)
            .subscribe(x => {
               this.updateIds(x);
               this.updateTasksOverTime(x);
            });

        this.messageService.success('Data loaded fine!');
    }

    private updateIds(t : Task) {
        const count = this._ids.get(t.id) || 0;
        this._ids.set(t.id, count + 1);

        const values: Array<string> = [];
        const counts: Array<number> = [];

        this._ids.forEach((count, name) => {
            values.push(name);
            counts.push(count);
        });        
        this.updateArray(this.ids, values);
        this.updateArray(this.idCounts, counts);
    }

    private updateTasksOverTime(t : Task) {

    }

     private updateArray(target: Array<any>, source: Array<any>) {
        for (let i = 0; i < source.length; i++) {
            target[i] = source[i];
        }
        target.length = source.length;
    }

    /* Search relared */
    clearSearchTerm() {
        this.searchTerm = "";
    }

    getTaskClass(task: Task) {
        return {'priority-low' : task.priority === 0, 'priority-normal' : task.priority === 1, 'priority-high' : task.priority === 2 , 'priority-critical' : task.priority === 3};
    }
}