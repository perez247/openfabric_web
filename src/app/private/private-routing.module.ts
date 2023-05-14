import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateHomeComponent } from './pages/private-home/private-home.component';


const routes: Routes = [
  {
    path: 'private',
    redirectTo: ``,
    pathMatch: 'full'
  },
  {
    path: ``,
    component: PrivateHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
