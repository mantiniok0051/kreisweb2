import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//======== Google Maps  ==========================//
import { MapTypeStyle} from '@agm/core';

// ============= TranslationService =============//
import { TranslateService  } from '@ngx-translate/core';

import { BrandsCatalog } from '../brands-catalog/brands-catalog.component';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit {
  public title:string = 'Brands';
  

  constructor(private router:Router, route:ActivatedRoute, public translate:TranslateService, public catalog:BrandsCatalog) { 
    this.ngOnInit();
    this.catalog.ngOnInit();
  }

  ngOnInit() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');  
    this.catalog.ngOnInit();
  }
          public updateLanguage(){
            if (this.translate.currentLang == 'es') { 
              this.translate.use('en');
            } else {
               this.translate.use('es');
            }
            
          }    

}
