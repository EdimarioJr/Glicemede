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
    fasting: false,
  };

  fastingWord: string = "não";

  constructor(
    private samplingService: SamplingService,
    private popover: PopoverController
  ) {}

  ngOnInit() {}

  // Captura a amostra e adiciona

  addSampling() {
    this.samplingService.addSampling(this.sampling);
    this.popover.dismiss();
  }

  changeToggle(event: any) {
    const checked = event.detail.checked;
    this.sampling.fasting = checked;
    checked ? (this.fastingWord = "sim") : (this.fastingWord = "não");
  }
}
