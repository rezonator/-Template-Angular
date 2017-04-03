import {Component,OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { User, Org } from '../model';
import { ActivatedRoute } from '@angular/router';
import { OrgsService } from './orgs.service';

declare var $:JQueryStatic;

@Component({
    selector : "org-info",
    templateUrl : "./app/org/org-info.component.html",
    providers : [OrgsService]
})
export class OrgInfoComponent implements AfterViewInit, OnInit {
      orgId: string;
      org : Org;
      private sub: any;

    ngOnInit(): void {
           this.sub = this.route.params.subscribe(params => {
                this.orgId = params['id']; // (+) converts string 'id' to a number
                // In a real app: dispatch action to load the details here.
            });

            // load user data.
            this.org = this.orgsService.getOrgData(this.orgId);
    }


    constructor(private orgsService : OrgsService, private route : ActivatedRoute) {        
    }   

        ngAfterViewInit(): void {
                $(".btn-pref .btn").click(function () {
                    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                    // $(".tab").addClass("active"); // instead of this do the below 
                    $(this).removeClass("btn-default").addClass("btn-primary");   
                });
        }
}