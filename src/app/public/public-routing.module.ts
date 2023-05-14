import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './pages/public-home/public-home.component';


const routes: Routes = [
  {
    path: 'public',
    redirectTo: ``,
    pathMatch: 'full'
  },
  {
    path: ``,
    component: PublicHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
