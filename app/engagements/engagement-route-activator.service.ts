import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import {TaskService} from "../tasks/task.service";

@Injectable()
export class EngagementRouteActivator implements CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const exists = this.taskService.checkEngExists(route.params["id"]);
        if(!exists)
            this.router.navigate(["/404"]);
        return exists;
    }

    constructor(private taskService : TaskService, private router : Router) {
    }

}