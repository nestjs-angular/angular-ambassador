import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { LinkService } from 'src/app/services/link.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.scss']
})
export class BackendProductsComponent implements OnInit {

  products: Product[] = [];
  page = 1;
  showButton = true;
  selected: number[] = [];
  link = '';
  error = false;

  constructor(
    private productService: ProductService,
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['page'] > this.page) {
      this.page = 0;
      this.loadMore();
    }

    this.route.queryParams.subscribe(
      queryParams => {
        this.page = Number(queryParams['page']) || 1;
        const s = queryParams['s'] || '';
        const sort = queryParams['sort'] || '';

        this.productService.backend({
          page: this.page,
          s,
          sort
        }).subscribe(
          (result: any) => {
            console.log(result);
            this.products = this.page === 1 ? result.data : [...this.products, ...result.data];
            this.showButton = Number(result.last_page) !== this.page;
          }
        );
      }
    );
  }

  loadMore(): void {
    this.page++;
    this.router.navigate([], {
      queryParams: {
        page: this.page
      },
      queryParamsHandling: 'merge'
    });
  }

  search(s: string): void {
    this.router.navigate([], {
      queryParams: {
        s,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }

  sort(sort: string): void {
    this.router.navigate([], {
      queryParams: {
        sort,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }

  select(id: number): void {
    if (!this.isSelected(id)) {
      this.selected = [...this.selected, id];
      return;
    }

    this.selected = this.selected.filter(s => s !== id);
  }

  isSelected(id: number): boolean {
    return this.selected.some(s => s === id);
  }

  generate(): void {
    this.linkService.generate({
      products: this.selected
    }).subscribe(
      link => {
        this.link = `${environment.checkout_url}/${link.code}`;
      },
      () => this.error = true
    );
  }
}
