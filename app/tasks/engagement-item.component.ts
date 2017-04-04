import {Component, Input} from "@angular/core";
import {Engagement} from "../model";


@Component({
    selector: "engagement-item",
    template : `
    <div >
    <a [routerLink]="['/engagement', engagement?.id]">
        <div class="col-xs-2">
            {{engagement?.name}}
        </div>
        <div class="col-xs-8">
            {{ engagement?.description }}
        </div>
        <div class="col-xs-1">
            {{ engagement?.created | date }}
        </div>
        <div class="col-xs-1">
            {{ engagement?.tasks | countArray }}
        </div>
    </a>    
</div>
    `

})
export class EngagementItemComponent {
    @Input() private engagement : Engagement;
}
