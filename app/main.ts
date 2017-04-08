/* webpack shennanningans */

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./tasks/task-list.component";
import {TaskItemComponent} from './tasks/task-item.component'
import {routing} from './app.routes';
import {HttpModule} from "@angular/http";
import {EnumPipe} from "./shared/enum.pipe";
import {GEnumPipe} from "./shared/genum.pipe";
import {PEnumPipe} from "./shared/penum.pipe";
import BarGraphComponent from "./dashboard/bar-graph.component"
import {FormsModule} from "@angular/forms";
import {UserInfoComponent} from "./user/user-info.component";
import {UserSettingsComponent} from "./user/user-settings.component";
import {OrgInfoComponent} from "./org/org-info.component";
import TaskFilterPipe from "./tasks/tasks-filter.pipe";
import EngagementFilterPipe from "./engagements/engagement-filter.pipe";
import {CountArrayPipe} from "./shared/countArray.pipe";
import {TaskDetailsComponent} from "./tasks/task-details/task-details.component";
/* Tabz */
import {Tab} from "./shared/tabs/tab.component";
import {TabHeading} from "./shared/tabs/tab-heading";
import {Tabset} from "./shared/tabs/tabset.component";
import {TabTransclude} from "./shared/tabs/tab-transclude";
import { NavComponent} from "./nav/nav.component";
import {EngagementDetailsComponent} from "./engagements/engagement-details/engagement-details.component";
import {EngagementListComponent} from "./engagements/engagement-list.component";
import {EngagementItemComponent} from "./engagements/engagement-item.component";
import {CreateEngagementComponent} from "./engagements/create-engagement.component";

// errors
import {Error404Component} from "./errors/404.component";
import {EngagementRouteActivator} from "./engagements/engagement-route-activator.service";
import {TaskRouteActivator} from "./tasks/task-route-activator.service";

import "./prod"; // import for side effect.
import { TaskService } from "./tasks/task.service";
import { checkEngagementNewDirty } from "./shared/utils";

@NgModule({
    imports: [BrowserModule, routing,FormsModule, HttpModule],
    providers: [
        EngagementRouteActivator, 
        TaskRouteActivator, 
        TaskService,
        {
            provide : 'canDeactivateCreateEngagement',
            useValue : checkEngagementNewDirty
        }    
    ],
    declarations: [AppComponent, TaskDetailsComponent, TaskItemComponent, TaskListComponent, EnumPipe, GEnumPipe, PEnumPipe, TaskFilterPipe, EngagementFilterPipe, 
        BarGraphComponent, UserInfoComponent, CountArrayPipe, OrgInfoComponent, Tab, TabHeading, Tabset, TabTransclude, NavComponent, EngagementItemComponent,
        EngagementDetailsComponent, EngagementListComponent, CreateEngagementComponent, Error404Component, UserSettingsComponent],
    bootstrap: [AppComponent]    
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);