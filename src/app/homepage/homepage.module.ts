import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./homepage.page";
import { SamplingHeaderComponent } from "./components/sampling-header/sampling-header.component";
import { SamplingComponent } from "./components/sampling/sampling.component";
import { SamplingsContainerComponent } from "./components/samplings-container/samplings-container.component";
import { AddSamplingComponent } from "./components/add-sampling/add-sampling.component";

import { HomePageRoutingModule } from "./homepage-routing.module";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    SamplingHeaderComponent,
    SamplingComponent,
    SamplingsContainerComponent,
    AddSamplingComponent
  ],
})
export class HomePageModule {}
