import { Component, OnInit } from "@angular/core";
import { SamplingService } from "../../../services/sampling.service";

@Component({
  selector: "app-samplings-container",
  templateUrl: "./samplings-container.component.html",
  styleUrls: ["./samplings-container.component.scss"],
})
export class SamplingsContainerComponent implements OnInit {
  samplings = [];

  constructor(private samplingService: SamplingService) {}

  ngOnInit() {
    console.log("entrei")
    this.samplingService.addSampling(100)
    this.samplings = this.samplingService.getAllSamplings();
    console.log(this.samplings);
  }
}
