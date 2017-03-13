import {Pipe, PipeTransform} from "@angular/core";
import {Task} from "../model";

// You can add pure : false - will run constantly! 
@Pipe({ name : "taskFilter"})
export default class TaskFilterPipe implements PipeTransform {
    transform(tasks : Array<Task>, filter: string) {
        filter = filter.toUpperCase();
        return filter == undefined || filter === "" ? 
            tasks : 
            tasks.filter(t => t.name.toUpperCase().indexOf(filter) !== -1);
    }
}