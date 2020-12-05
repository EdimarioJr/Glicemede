import { Component, OnInit } from "@angular/core";
import { Sampling } from "../../interfaces";
import { Router, ActivatedRoute } from "@angular/router";
import { SamplingService } from "../../services/sampling.service";

@Component({
  selector: "app-sampling-detail",
  templateUrl: "./sampling-detail.component.html",
  styleUrls: ["./sampling-detail.component.scss"],
})
export class SamplingDetailComponent implements OnInit {
  sampling: Sampling;

  constructor(
    private route: ActivatedRoute,
    private samplingService: SamplingService
  ) {}

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.sampling = this.samplingService.getOneSampling(id);
  }
}
