import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppProduct } from 'src/app/shared/models/app-product';
import { PrivateSaveProductModalComponent } from '../../modals/private-save-product-modal/private-save-product-modal.component';
import { SharedUtilityComponent } from 'src/app/shared/components/shared-utility/shared-utility.component';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { catchError, finalize } from 'rxjs';
import { AppPaginationRequest } from 'src/app/shared/models/app-pagination-request';
import { IProductFilter } from 'src/app/shared/models/product-filter';
import { AppPaginationResponse } from 'src/app/shared/models/app-pagination-response';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent{

}
