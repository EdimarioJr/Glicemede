import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SamplingService } from "../../../services/sampling.service";

@Component({
  selector: "app-samplings-container",
  templateUrl: "./samplings-container.component.html",
  styleUrls: ["./samplings-container.component.scss"],
})
export class SamplingsContainerComponent implements OnInit {
  samplings = [];
  subscription: Subscription;

  constructor(private samplingService: SamplingService) {}

  ngOnInit() {
    this.samplings = this.samplingService.getAllSamplings();
    this.subscription = this.samplingService
      .getSubjectSampling()
      .subscribe((valueSub) => {
        const { success } = valueSub;
        if (success) {
          const { value, hour, date } = valueSub;
          this.samplings = [...this.samplings, { value, hour, date }];
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSamplings() {
    return this.samplings.slice().reverse();
  }
}
