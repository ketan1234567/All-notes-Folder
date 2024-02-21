import { CanMatchFn } from '@angular/router';

export const moduleAuthGuard: CanMatchFn = (route, state) => {
  let isLoggedIn: boolean = false;

  if (isLoggedIn) {
    return true;
  }
  alert("No access");
  return false;
};
