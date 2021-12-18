import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BallComponent } from '@shared/components/ball/ball.component';
import { ToastComponent } from '@shared/components/toast/toast.component';

@NgModule({
  declarations: [
    BallComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BallComponent,
    ToastComponent,
  ]
})

export class SharedModule {
}
