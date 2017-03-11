import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./tasks/task-list.component";

const routes: Routes = [
    {path: "", component: TaskListComponent}
//    {path: "weather/:woeId", component: WeatherComponent}
];

export const appRoutingProviders: Array<any> = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);