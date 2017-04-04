import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { userRoutes } from "./user.routes";
import { UserInfoComponent } from "./user-info.component";
import { UsersService } from "./users.service";

/* Feature module */
@NgModule({
    imports : [
        CommonModule,
        userRoutes
    ],
    declarations :[
        UserInfoComponent
    ],
    providers : [
        UsersService
    ]
})
export class UserModule {}