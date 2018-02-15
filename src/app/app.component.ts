import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';


import { FooterComponent } from './footer/footer.component';
import { NaviComponent } from './navi/navi.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //
})
export class AppComponent implements OnInit{
  title = 'Kreys Industries';
  public language:boolean; /* 0:false= English 1:true= Spanish*/
  public actual_route:ActivatedRoute;

  


  constructor(private router:Router, private route:ActivatedRoute, public translate:TranslateService){
    this.ngOnInit();
    
  }

  ngOnInit(){
     // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
    
    
  }
}
