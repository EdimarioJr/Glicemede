import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SamplingDetailRoutingModule } from "./sampling-detail-routing.module";
import { SamplingDetailComponent } from "./sampling-detail.component";

@NgModule({
  declarations: [SamplingDetailComponent],
  imports: [CommonModule, SamplingDetailRoutingModule],
})
export class SamplingDetailModule {}
