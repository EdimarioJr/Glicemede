import { NgModule } from "@angular/core";

import { SamplingDetailRoutingModule } from "./sampling-detail-routing.module";
import { SamplingDetailComponent } from "./sampling-detail.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [SamplingDetailComponent],
  imports: [SharedModule, SamplingDetailRoutingModule],
})
export class SamplingDetailModule {}
