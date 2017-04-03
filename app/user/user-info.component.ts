import {Component,OnInit, OnDestroy } from "@angular/core";
import {UsersService} from "./users.service";
import {User} from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : "user-info",
    templateUrl : "./app/user/user-info.component.html",
    styleUrls : ['./app/user/user-info.component.css'],
    providers : [ UsersService ]
})
export class UserInfoComponent implements OnInit, OnDestroy {
      userId: string;
      user : User;
      private sub: any;

        ngOnDestroy(): void {
            this.sub.unsubscribe();
        }

        ngOnInit(): void {
             this.sub = this.route.params.subscribe(params => {
                this.userId = params['id']; // (+) converts string 'id' to a number
                // In a real app: dispatch action to load the details here.
            });

            // load user data.
            this.user = this.usersService.getUserData(this.userId);
        }

    constructor(private usersService : UsersService, private route: ActivatedRoute) {        
    }   


}