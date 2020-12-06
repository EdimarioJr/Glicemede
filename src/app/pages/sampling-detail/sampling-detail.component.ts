import { Component, OnDestroy, OnInit } from "@angular/core";
import { Sampling } from "../../interfaces";
import { Router, ActivatedRoute } from "@angular/router";
import { SamplingService } from "../../services/sampling.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sampling-detail",
  templateUrl: "./sampling-detail.component.html",
  styleUrls: ["./sampling-detail.component.scss"],
})
export class SamplingDetailComponent implements OnInit, OnDestroy {
  sampling: Sampling;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private samplingService: SamplingService
  ) {}

  ngOnInit() {
    let id = String(this.route.snapshot.paramMap.get("id"));
    this.subscription = this.samplingService
      .getOneSampling(id)
      .subscribe((value) => {
        this.sampling = value[0];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
