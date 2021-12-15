import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {AuthGuard} from "./auth.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {LimitedAccessComponent} from "./limited-access/limited-access.component";
import {CheckCredintialGuard} from "./check-credintial.guard";
import {LimitedAccessGuard} from "./limited-access.guard";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard, CheckCredintialGuard, LimitedAccessGuard] },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: 'limited-access', component: LimitedAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
