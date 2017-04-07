import { NgModule } from '@angular/core';
import { GeneralRoutingModule } from './general.routes';
import { AboutComponent }   from './about.component';

@NgModule({
  imports: [
    GeneralRoutingModule
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class GeneralModule { }
