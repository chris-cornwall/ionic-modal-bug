import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.page.html',
  styleUrls: ['./item-modal.page.scss'],
})
export class ItemModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
}
