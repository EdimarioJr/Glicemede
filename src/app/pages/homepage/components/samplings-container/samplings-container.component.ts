import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SamplingService } from "../../../../services/sampling.service";

@Component({
  selector: "app-samplings-container",
  templateUrl: "./samplings-container.component.html",
  styleUrls: ["./samplings-container.component.scss"],
})
export class SamplingsContainerComponent implements OnInit {
  samplings = [];
  subscription: Subscription;

  constructor(
    private samplingService: SamplingService,
  ) {}

  /*
    Quando o componente inicia, puxamos todas as amostras e fazemos a subscription no Subject do Service.
    No subscribe mandamos a função next(), que é a função executada quando um novo valor é recebido.
    Nela verificamos se o novo valor foi adicionado com sucesso, se sim, adicionamos no array local e 
    renderizamos. Ao fazer a subscription() garantimos que nosso componente seja avisado cada vez
    que alguma amostra for adicionada pelo service.  
   */

  ngOnInit() {
    this.samplings = this.samplingService.getAllSamplings();
    this.subscription = this.samplingService
      .getSubjectSampling()
      .subscribe((valueSub) => {
        const { success } = valueSub;
        if (success) {
          const { id, value, hour, date } = valueSub;
          this.samplings = [...this.samplings, { id, value, hour, date }];
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
