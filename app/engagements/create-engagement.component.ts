import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector : "create-engagement",
    templateUrl : "./app/engagements/create-engagement.component.html"
})
export class CreateEngagementComponent{
    isADirtyDirtyBoy: boolean = true;

    constructor(private router : Router) {        
    }

    cancel() {
        this.router.navigate(['/engagements']);
    }

}