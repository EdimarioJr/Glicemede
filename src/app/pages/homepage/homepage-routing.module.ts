import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./homepage.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    pathMatch: "full",
  },
  {
    path: "detail/:id",
    loadChildren: () =>
      import("../sampling-detail/sampling-detail.module").then(
        (m) => m.SamplingDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
