import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Observable, Subscription } from "rxjs";
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
  @Output() deleted = new EventEmitter<boolean>();
  idAboutToBeDeleted: string;

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

  deleteSampling(id: string) {
    const { success } = this.samplingService.deleteSampling(id);
    if (success) {
      this.deleted.emit(true);
    }
  }
  /*
    A função abaixo cria o popover de confirmação quando o usuário quer deletar uma amostra de glicemia.
    Ele guarda o id da amostra prestes a ser excluida na propriedade local e chama o popover.
    A escolha do usuário vai ser notificada pelo subscriber.
   */

  async createConfirmPopover(ev: any, i: number, id: string) {
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
    this.samplingService.getAllSamplings().subscribe((snapshot) => {
      console.log(snapshot)
      this.samplings = snapshot;
    });
    // Dando subscription para saber qual vai ser a escolha do usuário no popover. Se o usuário
    // confirmar, chama a função que deleta a amostra de glicemia.
    this.subscriptionConfirmPopover = this.confirmService
      .getConfirmSubject()
      .subscribe((confirm) => {
        this.popCtrl.dismiss();
        if (confirm) {
          this.deleteSampling(String(this.idAboutToBeDeleted));
        }
      });
  }

  ngOnDestroy() {
    this.subscriptionSampling.unsubscribe();
    this.subscriptionConfirmPopover.unsubscribe();
  }
}
