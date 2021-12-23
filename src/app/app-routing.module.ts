import { ProductDetailGuard } from './guards/product-detail.guard';
import { ThankYouComponent } from './shared/thank-you/thank-you.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './shared/error/error.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:id',
    component: ProductComponent,
    canActivate: [ProductDetailGuard],
  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
