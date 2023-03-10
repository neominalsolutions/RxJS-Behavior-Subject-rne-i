import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Subs1Component } from './components/subs1/subs1.component';
import { Subs2Component } from './components/subs2/subs2.component';
import { StoreModule } from '@ngrx/store';
import { messageChangeReducer } from './stores/reducers/message-change.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, Subs1Component, Subs2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({ messageState: messageChangeReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
