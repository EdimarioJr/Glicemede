import { Component, OnDestroy, OnInit } from "@angular/core";
import { PopoverController, ToastController } from "@ionic/angular";
import { AddSamplingComponent } from "./components/add-sampling/add-sampling.component";
import { SamplingService } from "../../services/sampling.service";
import { Subscription } from "rxjs";

@Component({
  selector: "homepage",
  templateUrl: "homepage.page.html",
  styleUrls: ["homepage.page.scss"],
})
export class HomePage implements OnDestroy, OnInit {
  subscriptionSampling: Subscription;
  subscriptionConfirmPopover: Subscription;

  constructor(
    private popCtrl: PopoverController,
    private samplingService: SamplingService,
    private toastCtrl: ToastController,
  ) {}

  async createFormPopover(ev: any, i: number) {
    const pop = await this.popCtrl.create({
      component: AddSamplingComponent,
      cssClass: "add-sampling",
      event: ev,
      translucent: true,
      showBackdrop: true,
      backdropDismiss: true,
    });
    return await pop.present();
  }

  async presentToast(success: boolean) {
    const toast = await this.toastCtrl.create({
      message: success ? "Glicemia adicionada!" : "Glicemia não adicionada!",
      duration: 2000,
      color: success ? "primary" : "danger",
    });
    toast.present();
  }

  ngOnInit() {
    this.subscriptionSampling = this.samplingService
      .getSubjectSampling()
      .subscribe(({ success }) => {
        this.presentToast(success);
      });
    
  }

  ngOnDestroy() {
    this.subscriptionSampling.unsubscribe();
  }
}
