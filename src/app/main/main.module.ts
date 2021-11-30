import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BackendProductsComponent } from './backend-products/backend-products.component';
import { FrontendProductsComponent } from './frontend-products/frontend-products.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { SecureModule } from './secure/secure.module';



@NgModule({
  declarations: [
    MainComponent,
    BackendProductsComponent,
    FrontendProductsComponent,
    HeaderComponent,
    NavComponent,
    FilterPipe,
    PaginatePipe,
    SortPipe
  ],
  imports: [
    SharedModule,
    SecureModule
  ]
})
export class MainModule { }
