import { Component } from '@angular/core';
import { MessageStateService } from 'src/app/message-state.service';

@Component({
  selector: 'app-subs2',
  templateUrl: './subs2.component.html',
  styleUrls: ['./subs2.component.css'],
})
export class Subs2Component {
  constructor(public mS: MessageStateService) {
    mS.getMessage().subscribe((message: string) => {
      console.log('m', message);
    });
  }
}
