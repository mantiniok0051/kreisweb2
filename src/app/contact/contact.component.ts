//   ====================================================================================
//   ||  Version: 1.0                                                                  ||
//   ||  Creation date: June 2017                                                      ||
//   ||  Autor: Created by Green Lyon                                                  || 
//   ||  Owner: Kreis Industries                                                       || 
//   ||  Description: Logic fo Contact for Kreis Industries Website                    ||
//   ||  Last change: Creation Ver 1.0 June 2017 Green Lyon> Mariano Soto              ||
//   ====================================================================================                


// =================== contact.component  ===================

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { routerTransition } from '../router.animations';
//======== Google Maps  ==========================//
import { MapTypeStyle} from '@agm/core';

//======= Angular Google reCapta V2 ==============//
import { ReCaptchaComponent } from 'angular2-recaptcha';

import { Message } from '../models/message';
import {PostService} from './contac.service.component';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  // animations:[routerTransition()],
  // host:{'[@routerTransition]' : ''}
})
export class ContactComponent implements OnInit, OnDestroy {

  
 //============= Mesasage data members ================//
  private _sub;
  public _key:string='6Lct0yUUAAAAAGA72fcL7eDZiEhZTFU0HSSkOqFB'; //Recaptcha ApiKey
  private res:any; 
  private _submitMessage = '';
  public contact_form:FormGroup;
  public title:string = 'Contact';
  public contact_name:string='';
  public contact_mail:string='';
  public contact_msg:string='';
  public contact_subject:string='';
  public succesfully_sent:boolean=false;
  public contact_send:any;

//================= Google reCaptcha data memebers =============//
  public recapcha_token:string='';
  public isTrusted:boolean=false;
  public secret:string='';


//============= Google Map data members ================// 
    public black:string = '#0000'
    public map_lat:number=20.923104;
    public map_lng:number=-100.7421627;
    public map_zoom:number=15;
    public mrk_lat:number=20.923099;
    public mrk_lng:number=-100.739974;
    public mrk_lbl:string='Kreis Industries';
    public mrk_ico:string='/assets/imgs/Kreis-icon.ico';
    public draggable:boolean=false;
    public map_style:MapTypeStyle[] = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#da1c5c"
      }
    ]
  },
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dd85c9"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#dd85c9"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dd85c9"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];
  

//============= UI data members ================// 
  public contact_quote:string = 'Those who seek the divine want to make this world a better place, which first requires that we communicate';
  public contact_qoute_author:string = '-Keith Ellison';


    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    @ViewChild('contact_send_btn') button;

    constructor(private fBuilder:FormBuilder, private postService:PostService) { }

    ngOnInit() {
      this.succesfully_sent = false;
      this.captcha.reset();
      this.contact_form = this.fBuilder.group({
        'contact_name':[null, Validators.required],
        'contact_mail':[null, Validators.compose([Validators.required, Validators.email])],
        'contact_subject':[null, Validators.required],
        'contact_msg':[null, Validators.required]
      })
    }

    ngOnDestroy(){
      // clean subscription when component destroy
      if (this._sub) {
        this._sub.unsubscribe();
      }
  }

     onSubmit(){
       this.succesfully_sent = true;
       console.log(this.contact_form);
       
       console.log(this.contact_form.value);       
       console.log(this.contact_form.value);
       let formValue:Object = this.contact_form.value;

       // Asynchronously sen the information
      this._sub = this.postService.sendMail(formValue)
        .subscribe(data => {
          console.log(data)
          this.res = data;
          console.log(this.res)
        });
      this.contact_form.reset();      
      this.isTrusted=false;
      this.recapcha_token = '';
       this.succesfully_sent = false;
      this.ngOnInit();
    }

    isUserTrusted():boolean{
      let response:boolean=false;
        if(this.isTrusted && this.secret.length > 5){
          response = true;
        }
      return response;
    }

    processReCaptcha($event){
      if(event.isTrusted){
        this.isTrusted=event.isTrusted;
        this.recapcha_token = this.captcha.getResponse().toString();
      }
      console.log(this.captcha.getResponse());
      
    }
}
