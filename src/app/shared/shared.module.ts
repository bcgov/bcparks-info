import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepProgressBarModule } from '@digitalspace/step-progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast/toast-container.component';
import { LoadingComponent } from './loading/loading.component';
import { AlertContainerComponent } from './alert/alert-container.component';


@NgModule({
  declarations: [
    ToastContainerComponent,
    LoadingComponent,
    AlertContainerComponent
  ],
  imports: [
    CommonModule,
    StepProgressBarModule,
    NgbModule
  ],
  exports: [
    StepProgressBarModule,
    ToastContainerComponent,
    LoadingComponent,
    AlertContainerComponent
  ]
})
export class SharedModule { }
