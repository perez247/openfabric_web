import { PrivateSaveProductModalComponent } from 'src/app/private/modals/private-save-product-modal/private-save-product-modal.component';
import { SharedUtilityComponent } from '../shared-utility/shared-utility.component';
import { IAppProduct } from './../../models/app-product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product/product.service';
import { Confirmable } from '../../decorators/confirm-action-decorator';
import { finalize } from 'rxjs';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-shared-product-card',
  templateUrl: './shared-product-card.component.html',
  styleUrls: ['./shared-product-card.component.scss']
})

export class SharedProductCardComponent extends SharedUtilityComponent {
  @Input() product?: IAppProduct;
  @Input() canEdit = true;
  @Output() reload = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private toastService: ToastService,
  ) {
    super();
  }

  saveProduct(view: boolean = false): void {
    const modalRef = this.modalService.open(PrivateSaveProductModalComponent, { size: 'lg'});
    const p = this.product || {};
    modalRef.componentInstance.product = { ...p };
    modalRef.componentInstance.disableForm = view;
    const sub = modalRef.componentInstance.productSaved.subscribe({
      next: (savedProduct: IAppProduct) => {
        this.product = savedProduct;
      }
    });
  }

  @Confirmable({
    html: 'Deleting a product cannot be undone'
  })

  deleteProduct(): void {
    this.isLoading = true;
    const sub = this.productService.deleteProduct(this.product?.id)
      .pipe(finalize(() => this.isLoading))
      .subscribe({
        next: () => {
          this.toastService.success('Product deleted');
          this.reload.emit();
        }
      });
    console.log(this.product);
  }
}
