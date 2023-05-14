import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
  ],
  imports: [
    NgbModalModule,
    NgbPaginationModule,

    // Image cropper
    ImageCropperModule,
  ],
  exports: [
    NgbModalModule,
    NgbPaginationModule,

    // Image cropper
    ImageCropperModule,
  ]
})
export class VendorModule { }
