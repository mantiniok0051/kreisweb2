import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//============= TranslationService =============//
import { TranslateService  } from '@ngx-translate/core';

@Component({
  selector: 'service-portfolio',
  templateUrl: './service-portfolio.component.html'
  // animations:[routerTransition()],
  // host:{'[@routerTransition]' : ''}
})
export class ServicePortfolioComponent implements OnInit {
  public title:string = 'Services';

  constructor(private router:Router,  private route:ActivatedRoute, public translate:TranslateService) { 
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

}
