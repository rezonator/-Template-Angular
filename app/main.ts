import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./tasks/task-list.component";
import {routing} from './app.routes';
import {HttpModule} from "@angular/http";
import {EnumPipe} from "./shared/enum.pipe";
import BarGraphComponent from "./dashboard/bar-graph.component"


@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [AppComponent, TaskListComponent, EnumPipe, BarGraphComponent],
    bootstrap: [AppComponent]    
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);