import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoggedIn: boolean = false;

  if (isLoggedIn) {
    return true;
  }
  alert("No access");
  return false;
};
