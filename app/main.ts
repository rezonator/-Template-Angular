import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./tasks/task-list.component";
import {routing} from './app.routes';
import {HttpModule} from "@angular/http";
import {EnumPipe} from "./shared/enum.pipe";
import BarGraphComponent from "./dashboard/bar-graph.component"
import {FormsModule} from "@angular/forms";
import TaskFilterPipe from "./tasks/tasks-filter.pipe";
import "./prod"; // import for side effect.

@NgModule({
    imports: [BrowserModule, routing,FormsModule, HttpModule],
    declarations: [AppComponent, TaskListComponent, EnumPipe,TaskFilterPipe, BarGraphComponent],
    bootstrap: [AppComponent]    
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);