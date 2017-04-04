import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./tasks/task-list.component";
import {UserInfoComponent} from "./user/user-info.component";
import {OrgInfoComponent} from "./org/org-info.component";
import {TaskDetailsComponent} from "./tasks/task-details/task-details.component";


const routes: Routes = [
    {path: "", redirectTo: "/tasks", pathMatch : 'full'},
    {path: "tasks", component: TaskListComponent},
    {path: "user/:id", component: UserInfoComponent},
    {path: "org/:id", component: OrgInfoComponent}   ,
    {path: "task/:id", component: TaskDetailsComponent}   ,
];

export const appRoutingProviders: Array<any> = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);