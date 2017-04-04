import {Pipe, PipeTransform} from "@angular/core";
import {Engagement} from "../model";

// You can add pure : false - will run constantly! 
@Pipe({ name : "engagementFilter"})
export default class EngagementFilterPipe implements PipeTransform {
    transform(engagements : Array<Engagement>, filter: string) {
        filter = filter.toUpperCase();
        return filter == undefined || filter === "" ? 
            engagements : 
            engagements.filter(t => t.name.toUpperCase().indexOf(filter) !== -1);
    }
}