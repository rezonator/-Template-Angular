import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./tasks/task-list.component";
import {UserInfoComponent} from "./user/user-info.component";
import {OrgInfoComponent} from "./org/org-info.component";


const routes: Routes = [
    {path: "", component: TaskListComponent},
    {path: "user/:id", component: UserInfoComponent},
    {path: "org/:id", component: OrgInfoComponent}    
];

export const appRoutingProviders: Array<any> = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);