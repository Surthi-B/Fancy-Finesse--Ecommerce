import {  NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FancyPageComponent } from './fancy-page/fancy-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'fancy/:id',component:FancyPageComponent},
  {path:'cart-page', component:CartPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
