import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    return products.filter(p => p.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
  }


}
