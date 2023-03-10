import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageStateService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  sendMessage(msg: string) {
    this.message.next(msg);
  }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
}
