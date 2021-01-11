import { NgModule } from "@angular/core";
import { HomePage } from "./homepage.page";
import { SamplingHeaderComponent } from "./components/sampling-header/sampling-header.component";
import { SamplingComponent } from "./components/sampling/sampling.component";
import { SamplingsContainerComponent } from "./components/samplings-container/samplings-container.component";
import { AddSamplingComponent } from "./components/add-sampling/add-sampling.component";
import { GroupByDayPipe } from "../../shared/pipes/group-by-day.pipe";

import { HomePageRoutingModule } from "./homepage-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [HomePageRoutingModule, SharedModule],
  declarations: [
    HomePage,
    SamplingHeaderComponent,
    SamplingComponent,
    SamplingsContainerComponent,
    AddSamplingComponent,
    GroupByDayPipe,
  ],
})
export class HomePageModule {}
