import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./tasks/task-list.component";
import {UserInfoComponent} from "./user/user-info.component";
import {OrgInfoComponent} from "./org/org-info.component";
import {TaskDetailsComponent} from "./tasks/task-details/task-details.component";
import {EngagementDetailsComponent} from "./engagements/engagement-details/engagement-details.component";
import { EngagementListComponent } from "./engagements/engagement-list.component";
import { CreateEngagementComponent } from "./engagements/create-engagement.component";
import { Error404Component } from "./errors/404.component";
import { EngagementRouteActivator } from "./engagements/engagement-route-activator.service";
import { TaskRouteActivator } from "./tasks/task-route-activator.service";
import {AboutComponent} from "./general/about.component";

declare var require:any;

const routes: Routes = [
    /*{path: "", redirectTo: "/engagements", pathMatch : 'full'},*/
    {path: "", component: TaskListComponent},
    {path: "engagements", component: EngagementListComponent},
    {path: "engagement/:id", component : EngagementDetailsComponent, canActivate : [EngagementRouteActivator] },
    {path: "engagements/new" , component:CreateEngagementComponent, canDeactivate : ["canDeactivateCreateEngagement"]},
    {path: "user/:id", component: UserInfoComponent},
    {path: "org/:id", component: OrgInfoComponent}   ,
    {path: "task/:id", component: TaskDetailsComponent, canActivate : [TaskRouteActivator]} ,
    {path : "404", component:Error404Component},
    { path: 'general', loadChildren: './general/general.module#GeneralModule' }
];

export const appRoutingProviders: Array<any> = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);