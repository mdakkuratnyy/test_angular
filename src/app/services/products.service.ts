import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, throwError} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn:'root'
})
export class ProductsService{
  constructor(private http:HttpClient) {
  }
  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // params: new HttpParams().append('limit',5)
    }).pipe(
      delay(1500),
      catchError(this.errorHandler)
    )

  }
  private errorHandler(HttpErrorResponse){
    return throwError(() => error.message())
  }
}
