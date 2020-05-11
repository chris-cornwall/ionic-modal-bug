import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemModalPage } from './item-modal/item-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ItemModalPage,
      cssClass: 'item-modal-css',
      backdropDismiss: true,
      showBackdrop: true,
      animated: true,
    });
    return await modal.present();
  }
}
