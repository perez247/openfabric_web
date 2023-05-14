import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastConfig = {
    messageClass: 'text-white'
  }

  constructor(private toastr: ToastrService) {}

  success(message: string) {
    this.toastr.success(message, '', this.toastConfig);
  }

  error(message: string) {
    this.toastr.error(message, '', this.toastConfig);
  }
}
