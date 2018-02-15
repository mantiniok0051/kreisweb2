import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

//============= TranslationService =============//
import { TranslateService  } from '@ngx-translate/core';

//============= Internal Components =============//
import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AboutComponent } from '../about/about.component';
import { ServicePortfolioComponent } from '../service-portfolio/service-portfolio.component';
import { BrandsComponent } from '../brands/brands.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';
import { SubsidiariesComponent } from '../subsidiaries.component/subsidiaries.component';

//============= MenuItem Model =============//
import { MenuItem } from '../models/menuitem';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html'
  // styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
      

  constructor(private router: RouterModule, private route: ActivatedRoute, public translate: TranslateService) {
              this.ngOnInit(); 
            }

  ngOnInit() {
     // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('es');
     // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('es');

  }

  public updateLanguage(){
    if (this.translate.currentLang == 'es') { 
      this.translate.use('en');
    } else {
       this.translate.use('es');
    }
    
  }

  buildItem(){}
  getDataList(lang:string){}


}

