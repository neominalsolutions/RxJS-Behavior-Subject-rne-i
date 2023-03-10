import { Component } from '@angular/core';
import { MessageStateService } from 'src/app/message-state.service';

@Component({
  selector: 'app-subs1',
  templateUrl: './subs1.component.html',
  styleUrls: ['./subs1.component.css'],
})
export class Subs1Component {
  constructor(public mS: MessageStateService) {}
}
