import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlipComponent } from '@modules/slip/slip.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SlipComponent,
  ],
  exports: [
    SlipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class SlipModule { }
