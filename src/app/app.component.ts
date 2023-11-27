import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Welcome to Sahosoft Technologies';
  mybooks: Book[];
  mybooks$: Observable<Book[]>;

  mybook:Book;
  mybook$:Observable<Book>;

  constructor(private _bookService: BookService) {

  }

  ngOnInit() {
    this.getAllbooks();
    this.getBook();
  }
  getAllbooks() {
   // debugger;
    this._bookService.getBooks().subscribe(res => {
      //debugger;
      this.mybooks = res;
    })

    this.mybooks$=this._bookService.getBooks();

    // this._bookService.getBooks2().subscribe(res => {
    //   debugger;
    //   this.mybooks = res;
    // })

    // this._bookService.getBooks3().subscribe(res => {
    //   debugger;
    //   this.mybooks = res;
    // })
  }

  getBook(){
    this._bookService.getBookById(102).subscribe(res=>{
     // debugger;
      this.mybook=res[0];
    })

    this.mybook$=this._bookService.getBookById(103);
  }

}
