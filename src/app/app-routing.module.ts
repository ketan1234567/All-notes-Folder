import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '', component: DashboardComponent },

  { path: 'home', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent },
      { path: 'registration', component: StudentregistrationComponent },
      { path: 'details', component: StudentdetailsComponent }
    ]

  },




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
