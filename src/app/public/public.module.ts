import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PublicComponent,
    PublicHomeComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
