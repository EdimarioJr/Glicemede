import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { SamplingService } from "../../../services/sampling.service";

interface SamplingPopover {
  value: number;
  lastMealHour: string;
  lastMeal: string;
}

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

  addSampling() {
    this.samplingService.addSampling(this.sampling);
    this.popover.dismiss();
  }
}
