import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
    ) {
    }
    public showAlert(type, msg) {
        let alert = this.alertCtrl.create();
        alert.setTitle("Thông báo");
        alert.addButton("Đồng ý");
        alert.setMessage(msg);
        switch (type) {
            case "success":
                alert.setCssClass('success-msg');
                break;
            case "warning":
                alert.setCssClass('warning-msg');
                alert.addButton("Đóng");
                break;
            case "error":
                alert.setCssClass('warning-msg');
                break;
            default:
                break;
        }
        alert.present();
    }

    public showToast(type, msg) {
        let cssName = "";
        switch (type) {
            case "success":
                cssName = 'success-msg';
                break;
            case "warning":
                cssName = 'warning-msg';
                break;
            case "error":
                cssName = 'error-msg';
                break;
            default:
                break;
        }
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: cssName
        });
        toast.present();
    }
}