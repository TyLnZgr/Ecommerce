import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router, private productService: ProductService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const id = Number(route.params['id']);

    if (isNaN(id) || id < 1 || id > this.productService.getProductSize()) {
      this.router.navigate(['/**']);
      return false;
    }

    return true;
  }
}
