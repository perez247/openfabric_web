import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-get-image-modal',
  templateUrl: './get-image-modal.component.html',
  styleUrls: ['./get-image-modal.component.scss']
})
export class GetImageModalComponent {
  @Output() newImage = new EventEmitter<string>();

  imageChangedEvent: any = '';
  croppedImage: any;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    const base64 = event.base64 ?? '';
    this.croppedImage = base64;
  }

  saveChanges() {
    this.newImage.emit(this.croppedImage);
    this.activeModal.close();
  }
}
