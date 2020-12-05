import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SamplingDetailComponent } from "../sampling-detail/sampling-detail.component";

const routes: Routes = [
  {
    path: "",
    component: SamplingDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplingDetailRoutingModule {}
