import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { SamplingService } from "../../../../services/sampling.service";
import { ConfirmPopoverComponent } from "../../../../shared/components/confirm-popover/confirm-popover.component";
import { ConfirmService } from "../../../../services/confirm.service";

@Component({
  selector: "app-samplings-container",
  templateUrl: "./samplings-container.component.html",
  styleUrls: ["./samplings-container.component.scss"],
})
export class SamplingsContainerComponent implements OnInit {
  samplings = [];
  subscriptionSampling: Subscription;
  subscriptionConfirmPopover: Subscription;

  idAboutToBeDeleted: number;

  constructor(
    private samplingService: SamplingService,
    private popCtrl: PopoverController,
    private confirmService: ConfirmService
  ) {}

  /*
    Quando o componente inicia, puxamos todas as amostras e fazemos a subscription no Subject do Service.
    No subscribe mandamos a função next(), que é a função executada quando um novo valor é recebido.
    Nela verificamos se o novo valor foi adicionado com sucesso, se sim, adicionamos no array local e 
    renderizamos. Ao fazer a subscription() garantimos que nosso componente seja avisado cada vez
    que alguma amostra for adicionada pelo service.  
   */

  deleteSampling(id: number) {
    const { success, samplings } = this.samplingService.deleteSampling(id);
    if (success) {
      this.samplings = samplings.slice();
    }
  }

  async createConfirmPopover(ev: any, i: number, id: number) {
    this.idAboutToBeDeleted = id;

    const pop = await this.popCtrl.create({
      component: ConfirmPopoverComponent,
      cssClass: "confirm-popover",
      event: ev,
      translucent: true,
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: { message: "Confirmar exclusão?" },
    });
    return await pop.present();
  }

  ngOnInit() {
    this.samplings = this.samplingService.getAllSamplings();
    this.subscriptionSampling = this.samplingService
      .getSubjectSampling()
      .subscribe((valueSub) => {
        const { success } = valueSub;
        if (success) {
          const { id, value, hour, date } = valueSub;
          this.samplings = [...this.samplings, { id, value, hour, date }];
        }
      });

    this.subscriptionConfirmPopover = this.confirmService
      .getConfirmSubject()
      .subscribe((confirm) => {
        this.popCtrl.dismiss();
        if (confirm) {
          this.deleteSampling(this.idAboutToBeDeleted);
        }
      });
  }

  ngOnDestroy() {
    this.subscriptionSampling.unsubscribe();
    this.subscriptionConfirmPopover.unsubscribe();
  }

  getSamplings() {
    return this.samplings.slice().reverse();
  }
}