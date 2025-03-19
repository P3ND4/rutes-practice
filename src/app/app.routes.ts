import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { homedir } from 'os';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path:'products', component: TableComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    
];
