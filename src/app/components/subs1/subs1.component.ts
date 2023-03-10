import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageStateService } from 'src/app/message-state.service';

@Component({
  selector: 'app-subs1',
  templateUrl: './subs1.component.html',
  styleUrls: ['./subs1.component.css'],
})
export class Subs1Component {
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
