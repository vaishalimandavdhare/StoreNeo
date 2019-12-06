import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import {ErrorObservable } from 'rxjs/observable/ErrorObservable';
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
  getColors():Observable<any>{
    return this.http.get(this.baseURL +"colors");
  }
  getProductDetailsByID(productId):Observable<any>{
    // const params = new HttpParams({fromString:'filter='+ JSON.stringify(productId)});
    return this.http.get(this.baseURL + "products" + "/" + productId + '?filter={"include":"images"}');
  }
  /** POST: add a new hero to the database */
  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof  ErrorEvent){
      console.error("client side error" , errorResponse.error.message);
    }
    else{
      console.error("server side error" , errorResponse);
    }
    // return new ErrorObservable('there is problem with observable');
    return throwError('there is problem with observable');
  }
  postProduct(cproduct : Product):Observable<Product>{
    return this.http.post<Product>(this.baseURL +"products", cproduct, {
      headers:new HttpHeaders({
        'Content-Type' : 'application/JSON'
      })
    }).pipe(catchError(this.handleError));
  }
}
