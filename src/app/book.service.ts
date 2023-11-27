import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiurl='/api/books';

  constructor(private _http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this._http.get<Book[]>(this.apiurl);
  }
  // getBooks2():Observable<Book[]>{
  //   return this._http.get<Book[]>(this.apiurl);
  // }
  // getBooks3():Observable<Book[]>{
  //   return this._http.get<Book[]>(this.apiurl);
  // }


  getBookById(bookid:number):Observable<Book>{
    return this._http.get<Book>(this.apiurl+"?id="+bookid);
  }

}
