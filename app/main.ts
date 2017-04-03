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
import BarGraphComponent from "./dashboard/bar-graph.component"
import {FormsModule} from "@angular/forms";
import {UserInfoComponent} from "./user/user-info.component";
import {OrgInfoComponent} from "./org/org-info.component";
import TaskFilterPipe from "./tasks/tasks-filter.pipe";
/* Tabz */
import {Tab} from "./shared/tabs/tab.component";
import {TabHeading} from "./shared/tabs/tab-heading";
import {Tabset} from "./shared/tabs/tabset.component";
import {TabTransclude} from "./shared/tabs/tab-transclude";

import "./prod"; // import for side effect.

@NgModule({
    imports: [BrowserModule, routing,FormsModule, HttpModule],
    declarations: [AppComponent,TaskItemComponent, TaskListComponent, EnumPipe, GEnumPipe, TaskFilterPipe, BarGraphComponent, UserInfoComponent, OrgInfoComponent, Tab, TabHeading, Tabset, TabTransclude],
    bootstrap: [AppComponent]    
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);