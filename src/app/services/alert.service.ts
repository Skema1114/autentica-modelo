import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { LoadingOptions, AlertOptions, ToastOptions } from '@ionic/core';
/**
 * service to provide one overlayer messages like toast, loading and others
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async alert(msg: string, options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [{ text: 'OK' }],
      ...options
    });
    await alert.present();
    return alert;
  }

  async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
      ...options
    });
    await loading.present();
    loading.dismiss();
    return loading;
  }
  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }
}
