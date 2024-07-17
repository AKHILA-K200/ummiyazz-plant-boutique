import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShopComponent } from './shop/shop.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { CartComponent } from './shop/cart/cart.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"shop",component:ShopComponent},
    {path:"shop/:id",component:CatalogueComponent},
    {path:"about-us",component:AboutUsComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:"cart",component:CartComponent},
    { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: HomeComponent }
];
