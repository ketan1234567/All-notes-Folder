import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  myAllBooks: Book[] = [];
  constructor(private _bookService: BookService) {

  }

  ngOnInit(){
    this.getAllbooks();
  }


  getAllbooks() {
    this._bookService.getBooks().subscribe(res => this.myAllBooks = res)
  }
}
