import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAppProduct } from '../../models/app-product';
import { AppPaginationResponse } from '../../models/app-pagination-response';
import { AppPaginationRequest } from '../../models/app-pagination-request';
import { IProductFilter } from '../../models/product-filter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getProducts(data?: AppPaginationRequest<IProductFilter>): Observable<AppPaginationResponse<IAppProduct[]>> {
    return this.http.post<AppPaginationResponse<IAppProduct[]>>(`${this.apiUrl}/products`, data);
  }

  addProduct(data: IAppProduct): Observable<IAppProduct> {
    return this.http.post<IAppProduct>(`${this.apiUrl}/product`, data);
  }

  updateProduct(data: IAppProduct): Observable<IAppProduct> {
    return this.http.put<IAppProduct>(`${this.apiUrl}/product`, data);
  }

  deleteProduct(id?: number): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/product`, { body: { id } });
  }

}
