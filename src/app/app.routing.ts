import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//=================Internal component list=============================//
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ServicePortfolioComponent } from './service-portfolio/service-portfolio.component';
import { BrandsComponent } from './brands/brands.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NaviComponent } from './navi/navi.component';
import { BrandsCatalog } from './brands-catalog/brands-catalog.component';
import { SubsidiariesComponent } from './subsidiaries.component/subsidiaries.component';
import { ClientsComponent } from './clients/clients.component';
import { PostService } from './contact/contac.service.component';

//=================Internal routing list=============================//
const _KreisWebappRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service-potfolio', component: ServicePortfolioComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'subsidiaries', component: SubsidiariesComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'contact', component: ContactComponent }

];

export const KreisRoutingProviders: any[] = [];

export const KWArouter: ModuleWithProviders = RouterModule.forRoot(_KreisWebappRoutes);
