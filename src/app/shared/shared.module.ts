import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedUtilityComponent } from './components/shared-utility/shared-utility.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';
import { SharedProductCardComponent } from './components/shared-product-card/shared-product-card.component';
import { AppErrorInterceptorProvider } from './interceptors/app-error.handler';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { SharedViewProductModalComponent } from './modals/shared-view-product-modal/shared-view-product-modal.component';
import { CustomErrorMessageComponent } from './components/custom-error-message/custom-error-message.component';
import { ImageDirective } from './directives/image/image.directive';
import { GetImageModalComponent } from './modals/get-image-modal/get-image-modal.component';
import { VendorModule } from './modules/VendorModule';
import { JwtInterceptorProvider } from './interceptors/jwt.interceptor';
import { SentencePipe } from './pipes/sentence/sentence.pipe';
import { SharedProductListComponent } from './components/shared-product-list/shared-product-list.component';


@NgModule({
  declarations: [
    // Directives
    ImageDirective,

    // Pipes
    SentencePipe,

    // Components
    SharedUtilityComponent,
    SharedFooterComponent,
    SharedProductCardComponent,
    SharedViewProductModalComponent,
    CustomErrorMessageComponent,
    GetImageModalComponent,
    SharedProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Modules
    VendorModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Directives
    ImageDirective,

    // Pipes
    SentencePipe,

    // Modules
    VendorModule,

    // Components
    SharedUtilityComponent,
    SharedFooterComponent,
    SharedProductCardComponent,
    CustomErrorMessageComponent,
    GetImageModalComponent,
    SharedProductListComponent,
  ],
  providers: [
    AppErrorInterceptorProvider,
    ErrorInterceptorProvider,
    JwtInterceptorProvider,
  ]
})
export class SharedModule { }
