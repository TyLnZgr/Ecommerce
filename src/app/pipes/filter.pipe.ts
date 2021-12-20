import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: any, filterText: any): any {
    if (filterText === '') return products;
    return products.filter(
      (p) =>
        p.title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !==
        -1
    );
  }
}
