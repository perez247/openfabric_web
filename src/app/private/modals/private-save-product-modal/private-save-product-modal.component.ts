import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { SharedUtilityComponent } from 'src/app/shared/components/shared-utility/shared-utility.component';
import { GetImageModalComponent } from 'src/app/shared/modals/get-image-modal/get-image-modal.component';
import { IAppProduct } from 'src/app/shared/models/app-product';
import { FormErrorService } from 'src/app/shared/services/form-error/form-error.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { CustomValidator } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-private-save-product-modal',
  templateUrl: './private-save-product-modal.component.html',
  styleUrls: ['./private-save-product-modal.component.scss']
})
export class PrivateSaveProductModalComponent extends SharedUtilityComponent implements OnInit {

  @Input() product?: IAppProduct;
  @Input() disableForm = false;
  @Output() productSaved = new EventEmitter<IAppProduct>();

  form: FormGroup = {} as FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public errorService: FormErrorService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private productService: ProductService,
    private toastService: ToastService,
  ) {
    super();
  }

  override ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: [this.product?.name, [CustomValidator.CustomRequired('Name'), CustomValidator.MaxLength(50)]],
      type: [this.product?.type, [CustomValidator.CustomRequired('Type')]],
      description: [this.product?.description, [CustomValidator.MaxLength(2000)]],
      imageSrc: [this.product?.imageSrc],
      id: [this.product?.id]
    });
  }

  openUploadProfileModal(): void {
    const modalRef = this.modalService.open(GetImageModalComponent, { size: 'lg'});

    const sub = modalRef.componentInstance.newImage.subscribe({
      next: (base64: string) => {
        this.updateProfilePicture(base64);
      }
    });

    this.subscriptions.push(sub);
  }

  updateProfilePicture(base64: string) {
    this.product!.imageSrc = base64;
    this.form.patchValue({
      imageSrc: this.product?.imageSrc
    });
  }

  saveProduct(): void {
    const call = this.product?.id ? this.productService.updateProduct(this.form.value) : this.productService.addProduct(this.form.value);
    this.isLoading = true;
    const sub = call.pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (product) => {
          this.toastService.success('Product Saved');
          this.productSaved.emit(product);
          this.activeModal.close();
        },
        error: (error) => {
          this.errorService.setFormErrors(error, this.form);
        }
      });
  }
}
