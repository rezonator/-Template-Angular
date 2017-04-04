import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import {TaskService} from "./task.service";

@Injectable()
export class TaskRouteActivator implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const exists = this.taskService.checkTaskExists(route.params["id"]);
        if(!exists)
            this.router.navigate(["/404"]);
        return exists;
    }

    constructor(private taskService : TaskService, private router : Router) {
    }

}