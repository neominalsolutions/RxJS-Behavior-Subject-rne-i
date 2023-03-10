import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageStateService } from 'src/app/message-state.service';

@Component({
  selector: 'app-subs2',
  templateUrl: './subs2.component.html',
  styleUrls: ['./subs2.component.css'],
})
export class Subs2Component {
  message: string = '';

  constructor(
    public mS: MessageStateService,
    private store: Store<{ messageState: any }>
  ) {
    store.select('messageState').subscribe((msg) => {
      this.message = msg;
    });
  }
}
