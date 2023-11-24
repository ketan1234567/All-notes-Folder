import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentaccountdetailsComponent } from './studentaccountdetails/studentaccountdetails.component';
import { StudentparentdetailsComponent } from './studentparentdetails/studentparentdetails.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { activatechildGuard } from './activatechild.guard';
import { deactivateGuard } from './deactivate.guard';
import { resolvGuard } from './resolv.guard';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'home', component: DashboardComponent, title: 'Home' },
  { path: 'aboutus', component: AboutusComponent, title: 'About US' },
  { path: 'contactus', component: ContactusComponent, title: 'Contact US', data: { id: 101, name: 'Contact US' } },//, canActivate: [authGuard]
  { path: 'book', component: BookComponent, title: 'Book Master' },
  { path: 'bookdetails/:id', component: BookdetailsComponent, resolve: { objbook: resolvGuard } },

  // { path: 'aboutusnew', component: AboutusComponent,outlet:'routeroulet2' },
  // { path: 'aboutusnew/:id', component: AboutusComponent,outlet:'routeroulet2' },
  // {
  //   path: 'student', canActivateChild: [activatechildGuard],
  //   children: [
  //     { path: '', component: StudentComponent },
  //     { path: 'details', component: StudentdetailsComponent }, //,canActivate:[authGuard]
  //     { path: 'registration', component: StudentregistrationComponent }, //,canActivate:[authGuard]

  //   ]

  // },

  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent },
      { path: 'details', component: StudentdetailsComponent }, //,canActivate:[authGuard]
      {
        path: '', canActivateChild: [activatechildGuard],
        children: [

          { path: 'registration', component: StudentregistrationComponent }, //,canActivate:[authGuard]
        ]
      }


    ]

  },


  // {
  //   path: 'student',
  //   children: [
  //     { path: '', component: StudentComponent },
  //     {
  //       path: 'details',
  //       children: [
  //         { path: '', component: StudentdetailsComponent },
  //         { path: 'accountdetails', component: StudentaccountdetailsComponent },
  //         { path: 'parentdetails', component: StudentparentdetailsComponent }
  //       ]
  //     },

  //     { path: 'registration', component: StudentregistrationComponent },

  //   ]

  // },




  // { path: 'aboutus/:id', component: AboutusComponent },
  // { path: 'aboutus/:id/:name', component: AboutusComponent },
  // { path: 'contactus/:id', component: ContactusComponent },
  //{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
