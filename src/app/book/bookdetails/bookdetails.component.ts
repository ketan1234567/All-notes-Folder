import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
  bookdetails: Book;
  myAllBooks: Book[] = [];

  constructor(private _route: ActivatedRoute, private _bookService: BookService, private _location: Location) {
    this.bookdetails=this._route.snapshot.data['objbook'];
  }

  ngOnInit() {
    this.getAllbooks();
    // 1.route.snapshot.param
    // alert(this._route.snapshot.params['id']);
    // this._bookService.getBookById(this._route.snapshot.params['id']).subscribe(res=>{
    //   this.bookdetails=res;
    // })

    // 2. route.snapshot.paramMap
    // alert(this._route.snapshot.paramMap.get('id'));
    // this._bookService.getBookById(parseInt(this._route.snapshot.paramMap.get('id'))).subscribe(res => {
    //   this.bookdetails = res;
    // })

    // 3. route.param.subscribe
    // this._route.params.subscribe(res => {
    //   //alert(res['id']);
    //   this._bookService.getBookById(res['id']).subscribe(res => {
    //     this.bookdetails = res;
    //   })

    // })

    //4. route.paramMap.subscribe 

    // this._route.paramMap.subscribe(res => {
    //   // alert(res.get('id'));

    //   this._bookService.getBookById(parseInt(res.get('id'))).subscribe(res => {
    //     this.bookdetails = res;
    //   })
    // })
    
  }
  getAllbooks() {
    this._bookService.getBooks().subscribe(res => this.myAllBooks = res)
  }

  goback() {
    this._location.back();
  }
}
