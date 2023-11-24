import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const activatechildGuard: CanActivateChildFn = (childRoute, state) => {
  const _router=inject(Router);

  let isloggedIn = localStorage.getItem("isloggedIn");
  if (isloggedIn == "false") {
    alert("Due to rights access, redirecting to login page !!");
    _router.navigate(['login']);
    return false;
  }
  return true;
};
