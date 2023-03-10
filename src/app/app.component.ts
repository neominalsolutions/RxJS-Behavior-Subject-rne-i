import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MessageStateService } from './message-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UniversalDay4';
  display: boolean = false;
  message: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private mS: MessageStateService
  ) {
    primengConfig.ripple = true;
  }

  showDialog() {
    this.display = true;
  }

  onModelChange(msg: string) {
    this.message = msg;
    // state service
    this.mS.sendMessage(msg);
  }
}
