import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private Books: Book[] = [
    { id: 100, name: 'Angular 16', price: 2200, description: 'Angular Books' },
    { id: 101, name: 'Angular 15', price: 2300, description: 'Angular Books' },
    { id: 102, name: 'React JS', price: 2400, description: 'React Books' },
    { id: 103, name: 'Node JS', price: 1800, description: 'node Books' },
    { id: 104, name: 'AWS', price: 12000, description: 'AWS Books' },
  ]

  constructor() { }

  BookList=of(this.Books);
  bookstoDisplay=this.Books.concat({id: 105, name: 'Azure', price: 1200, description: 'Azure Books' });

  getBooks(): Observable<Book[]> {
    // return of(this.Books);
    return of(this.bookstoDisplay);
  }

  getBookById(id: number): Observable<Book> {
    debugger;
    // return this.getBooks().pipe(map(books => books.find(book => book.id == id)));
    return this.BookList.pipe(map(books => books.find(book => book.id == id)));
  }
}
