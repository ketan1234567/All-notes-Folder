import { CanActivateFn, ResolveFn, Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const resolvGuard: ResolveFn<Book> = (route, state) => {

  const _bookService = inject(BookService);
  const _router = inject(Router);
  let id = route.params['id'];

  return _bookService.getBookById(id).pipe(map(book => {
    if (book) {
      return book;
    } else {
      alert("No Data found for this book");
      _router.navigate(['book']);
      return null;
    }
  }))
};
