import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//============= TranslationService =============//
import { TranslateService  } from '@ngx-translate/core';

@Component({
  selector: 'subsidiaries',
  templateUrl: './subsidiaries.component.html',
  styleUrls: ['./subsidiaries.component.css']

})
export class SubsidiariesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public translate: TranslateService) { 
    this.ngOnInit();
  }

 ngOnInit() {
     // this language will be used as a fall back when a translation isn't found in the current language
        this.translate.setDefaultLang('es');
     // the language to use, if the language isn't available, it will use the current loader to get them
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
