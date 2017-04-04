import {Directive, TemplateRef, ViewContainerRef, Inject} from 'angular2/core';
import {CreateEngagementComponent} from "../engagements/create-engagement.component";

export interface IAttribute {
    [key: string]: any;
}

@Directive({
    selector: '[ngTransclude]',
    properties: ['ngTransclude']
})
export class NgTransclude {
    private _ngTransclude: TemplateRef;

    private set ngTransclude(templateRef:TemplateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    private get ngTransclude() {
        return this._ngTransclude;
    }

    constructor(@Inject(ViewContainerRef) public viewRef:ViewContainerRef) {
    }
}

// Function to check whether we have a dirty state on a form.
export function checkEngagementNewDirty(component : CreateEngagementComponent) {
    if(component.isADirtyDirtyBoy) {
        return window.confirm('You have an unsaved engagement...proceed with cancel?');        
    }
    return true;
}