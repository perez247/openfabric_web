import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './shared/guards/auth-user.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: `public`,
    pathMatch: 'full'
  },
  {
    path: `public`,
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule),
  },
  {
    path: `private`,
    loadChildren: () => import('./private/private.module').then( m => m.PrivateModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: `**`,
    redirectTo: `public`,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
