import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  constructor(private http: HttpClient) {}

  getAllMainCategory() {
    return this.http.get(`${environment.baseUrl}/admin/main_category`);
  }
  createMainCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/main_category`, body);
  }
  updateMainCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/main_category`, body);
  }
  deleteMainCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/main_category`, body);
  }
  getAllSaleCategory() {
    return this.http.get(`${environment.baseUrl}/admin/products_sale`);
  }
  createSaleCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_sale`, body);
  }
  updateSaleCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_sale`, body);
  }
  deleteSaleCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_sale`, body);
  }
  getAllRentalCategory() {
    return this.http.get(`${environment.baseUrl}/admin/products_rental`);
  }
  createRentalCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_rental`, body);
  }
  updateRentalCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_rental`, body);
  }
  deleteRentalCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/products_rental`, body);
  }
  getAllServiceCategory() {
    return this.http.get(`${environment.baseUrl}/admin/services`);
  }
  createServiceCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/services`, body);
  }
  updateServiceCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/services`, body);
  }
  deleteServiceCategory(body) {
    return this.http.post(`${environment.baseUrl}/admin/services`, body);
  }
}
