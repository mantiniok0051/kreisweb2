import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

//======== Angular Translate ================//
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//======= Angular Google Maps ==============//
import { AgmCoreModule } from '@agm/core';

//======= Angular Google reCapta V2 ==============//
import { ReCaptchaModule } from 'angular2-recaptcha';

//=================Internal component list=============================//
import { KWArouter, KreisRoutingProviders } from './app.routing'; //site routing component
//import { routerTransition } from './router.animations'; //page transitions
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
import { PostService } from './contact/contac.service.component';
import { SubsidiariesComponent } from './subsidiaries.component/subsidiaries.component';
import { ClientsComponent } from './clients/clients.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ServicePortfolioComponent,
    BrandsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    NaviComponent,
    BrandsCatalog,
    SubsidiariesComponent,
    ClientsComponent
  ],
  imports: [
    KWArouter,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ReCaptchaModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDdZQzBktgrQ4cDyOPhf8OVUoI-JT5wSAU'}),
        TranslateModule.forRoot({
          loader:{
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }

        })
  ],
  providers: [PostService,
              KreisRoutingProviders,
              BrandsCatalog],
  bootstrap: [AppComponent] 
})
export class AppModule { }
