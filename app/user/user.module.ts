import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { userRoutes } from "./user.routes";
import { UserInfoComponent } from "./user-info.component";
import { UsersService } from "./users.service";

const ROUTES = [
    {path: "profile", component: UserInfoComponent}
];

/* Feature module */
@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild(ROUTES)
        //userRoutes
    ],
    declarations :[
        UserInfoComponent
    ],
    providers : [
        UsersService
    ],
    exports : []
})
export class UserModule {}