import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
// import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent, TopBarComponent /*ProductListComponent*/],
})
export class AppModule {}
