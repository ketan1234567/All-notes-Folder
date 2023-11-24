import { CanDeactivateFn } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';

export interface candeactivatecomponent{
  canDeactivate:()=>boolean;
}

export const deactivateGuard: CanDeactivateFn<candeactivatecomponent> = (component, currentRoute, currentState, nextState) => {

  
  return component.canDeactivate ? component.canDeactivate() : true;
};

// export const deactivateGuard: CanDeactivateFn<ContactusComponent> = (component, currentRoute, currentState, nextState) => {

  
//   return component.isfinalsubmit ? component.isfinalsubmit() : true;
// };




// export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

//   let isSubmitted: boolean = false;
//   if (isSubmitted == false) {
//     return confirm("Are you Sure to leave this page");
//     return false;
//   }

//   return true;
// };
