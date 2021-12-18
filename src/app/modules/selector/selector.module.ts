import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from '@modules/selector/selector.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectorComponent,
  ],
  exports: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class SelectorModule {
}
