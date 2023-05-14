import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { PrivateSaveProductModalComponent } from 'src/app/private/modals/private-save-product-modal/private-save-product-modal.component';
import { AppPaginationRequest } from '../../models/app-pagination-request';
import { AppPaginationResponse } from '../../models/app-pagination-response';
import { IAppProduct } from '../../models/app-product';
import { IProductFilter } from '../../models/product-filter';
import { ProductService } from '../../services/product/product.service';
import { SharedUtilityComponent } from '../shared-utility/shared-utility.component';

@Component({
  selector: 'app-shared-product-list',
  templateUrl: './shared-product-list.component.html',
  styleUrls: ['./shared-product-list.component.scss']
})
export class SharedProductListComponent extends SharedUtilityComponent implements OnInit {

  @Input() privateView = true;

  override isLoading: boolean = true;

  request: AppPaginationRequest<IProductFilter> = AppPaginationRequest.generate<IProductFilter>();
  response: AppPaginationResponse<IAppProduct[]> = AppPaginationResponse.generate<IAppProduct[]>([]);

  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) {
    super();
  }

  override ngOnInit(): void {
      this.getProducts();
  }

  getProducts(): void {
    this.isLoading = true;
    const sub = this.productService.getProducts(this.request)
      .pipe(finalize(() => {
        this.isLoading = false;
      })
      )
      .subscribe({
        next: (res) => {
          this.response = res;
        },
        error: (error) => {
          throw 'Something went wrong';
        }
      });
  }

  addProduct(product?: IAppProduct): void {
    const modalRef = this.modalService.open(PrivateSaveProductModalComponent, { size: 'lg'});
    modalRef.componentInstance.product = product || {};
    const sub = modalRef.componentInstance.productSaved.subscribe({
      next: (savedProduct: IAppProduct) => {
        this.getProducts();
      }
    });
  }

  pageChanged(e: number) {
    this.request.offset = e;
    this.getProducts();
  }
}
