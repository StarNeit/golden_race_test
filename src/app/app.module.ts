import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';
import { SelectorModule } from '@modules/selector/selector.module';
import { SlipModule } from '@modules/slip/slip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    SelectorModule,
    SlipModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
