import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./tasks/task-list.component";
import {routing} from './app.routes';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, TaskListComponent],
    bootstrap: [AppComponent]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);