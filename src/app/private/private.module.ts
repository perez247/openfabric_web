import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateHomeComponent } from './pages/private-home/private-home.component';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateSaveProductModalComponent } from './modals/private-save-product-modal/private-save-product-modal.component';



@NgModule({
  declarations: [
    PrivateComponent,
    PrivateHomeComponent,
    PrivateSaveProductModalComponent
  ],
  imports: [
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
