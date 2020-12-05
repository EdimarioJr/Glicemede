import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { SamplingService } from "../../../../services/sampling.service";
import { SamplingPopover } from "../../../../interfaces";

@Component({
  selector: "app-add-sampling",
  templateUrl: "./add-sampling.component.html",
  styleUrls: ["./add-sampling.component.scss"],
})
export class AddSamplingComponent implements OnInit {
  sampling: SamplingPopover = {
    value: 0,
    lastMealHour: "0",
    lastMeal: "",
  };

  constructor(
    private samplingService: SamplingService,
    private popover: PopoverController
  ) {}

  ngOnInit() {}

  // Captura a amostra e adiciona

  addSampling() {
    this.samplingService.addSampling(this.sampling);
    console.log(this.samplingService.getAllSamplings())
    this.popover.dismiss();
  }
}
