import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

//============= TranslationService =============//
import { TranslateService  } from '@ngx-translate/core';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
 
})
export class ClientsComponent implements OnInit {

      

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
