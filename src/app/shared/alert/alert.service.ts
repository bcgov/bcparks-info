import { Injectable } from '@angular/core';
import { IAlert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: IAlert[] = [];

  constructor() { }

  public pushAlert(alert: IAlert, ms = 0) {
    this.alerts.push(alert);
    if (ms > 0) {
      setTimeout(() => this.popAlert(alert), ms);
    }
  }

  public popAlert(alert) {
    const index = this.alerts.indexOf(alert, 0);
    if (index > -1) {
      this.alerts.splice(index, 1);
    }
  }
}
