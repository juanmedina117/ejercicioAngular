import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    public _http:HttpClient

  ) { }

  totalPaises():Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(`https://restcountries.com/v2/all`,{headers:headers})
      .pipe(
        map(res => {
          //console.log(res);
          return res;
        })
      )
   }

}
