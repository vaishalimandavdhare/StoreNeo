import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shared/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(private http:HttpClient) { }
  baseURL : string = "http://180.149.241.208:3000/api/";
  
  getProducts(withImages):Observable<any>{
    const params = new HttpParams({fromString:'filter='+ JSON.stringify(withImages)});
    return this.http.get(this.baseURL +"products",{params});
  }
  getCategory(){
    return this.http.get(this.baseURL +"categories");
  }
  getColors(){
    return this.http.get(this.baseURL +"colors");
  }
  getProductDetailsByID(productId):Observable<any>{
    // const params = new HttpParams({fromString:'filter='+ JSON.stringify(productId)});
    return this.http.get(this.baseURL + "products" + "/" + productId + '?filter={"include":"images"}');
  }
}
