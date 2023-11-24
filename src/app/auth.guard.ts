import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);

  let isloggedIn = localStorage.getItem("isloggedIn");
  if (isloggedIn == "false") {
    alert("Not Authenticated user !!");
    _router.navigate(['login']);
    return false;
  }
  return true;

};
