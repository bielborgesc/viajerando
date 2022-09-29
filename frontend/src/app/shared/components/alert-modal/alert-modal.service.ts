import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertModalComponent } from './alert-modal.component';

enum AlertType {
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {

  private showAlert(message: string, type: AlertType) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type,
    bsModalRef.content.message = message;
    setTimeout(() => {
      bsModalRef.hide()
    }, 2000);
  }

  constructor(private modalService: BsModalService) { }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertType.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertType.SUCCESS);
  }

  showAlertInfo(message: string) {
    this.showAlert(message, AlertType.INFO);
  }

  showAlertWarning(message: string) {
    this.showAlert(message, AlertType.WARNING);
  }

}
