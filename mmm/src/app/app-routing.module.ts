import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustompreloadingService } from './custompreloading.service';
import { authGuard } from './auth.guard';
import { moduleAuthGuard } from './module-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // { path: 'company', loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule), data: { preload: true, delay: true } },
  // { path: 'person', loadChildren: () => import('../app/person/person.module').then(m => m.PersonModule) }

  // { path: 'company', loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule)},
  // { path: 'person', loadChildren: () => import('../app/person/person.module').then(m => m.PersonModule),canActivate:[authGuard] }

  { path: 'company', loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule) },
  { path: 'person', loadChildren: () => import('../app/person/person.module').then(m => m.PersonModule), canLoad: [moduleAuthGuard] }


];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustompreloadingService })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
