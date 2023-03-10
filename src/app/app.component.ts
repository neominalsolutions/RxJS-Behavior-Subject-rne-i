import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { MessageStateService } from './message-state.service';
import { sendMessage } from './stores/actions/message-change.action';

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
    private mS: MessageStateService,
    private store: Store<{ messageState: any }>
  ) {
    primengConfig.ripple = true;
    console.log('messageState', store);
    this.store.select('messageState').subscribe((msg) => {
      console.log('msg', msg);
      this.message = msg;
    });
  }

  showDialog() {
    this.display = true;
  }

  onModelChange(msg: string) {
    this.message = msg;
    // state service
    this.mS.sendMessage(msg);
    // ngRx ile
    this.store.dispatch(sendMessage({ message: msg }));
  }
}
