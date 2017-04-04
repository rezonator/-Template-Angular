// this is used to wait for the whole data to load :)
/* WORK IN PROGRESS */
import {Injectable} from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable() 
export class EngagementDetailsResolver implements Resolve<any> {
        
    constructor() {
                
    }

        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            
        }
}