//   ====================================================================================
//   ||  Version: 1.0                                                                  ||
//   ||  Creation date: June 2017                                                      ||
//   ||  Autor: Created by Green Lyon                                                  || 
//   ||  Owner: Kreis Industries                                                       || 
//   ||  Description: Logic fo Brands Catalog for Kreis Industries Website             ||
//   ||  Last change: Creation Ver 1.0 June 2017 Green Lyon> Mariano Soto              ||
//   ====================================================================================                



    // public lorems:Array<string> = new Array<string>(
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi ante, malesuada at lorem sit amet, commodo molestie libero. Aliquam viverra convallis sagittis. Suspendisse ac lectus non dolor venenatis condimentum non in ligula. Donec facilisis auctor nisi, et fermentum velit feugiat sagittis. Aliquam mollis eros sit amet congue elementum. Etiam lobortis pellentesque porttitor. Maecenas id fermentum massa. Nullam dignissim metus massa, ut consequat ex pulvinar et.',
    //     'Integer in pharetra augue, non interdum lectus. Praesent neque neque, lacinia quis placerat et, ultricies ac ex. Vestibulum non ultricies metus. Curabitur dui neque, ornare quis suscipit nec, porttitor tincidunt felis. Vestibulum hendrerit posuere quam, nec interdum metus mattis vitae. Proin vel arcu in magna feugiat pretium. Sed finibus dictum tortor id tempus. Mauris sit amet ipsum in erat pulvinar consectetur eget ut lorem. Pellentesque quis euismod leo.',
    //     'Sed varius dictum malesuada. In varius accumsan nisi, vitae accumsan metus sodales nec. Donec metus justo, dapibus sed bibendum at, sollicitudin sed augue. Proin nec sem sit amet augue pretium tempus eu non risus. Nunc imperdiet rutrum feugiat. Suspendisse ultrices velit ac mauris maximus, ut bibendum risus laoreet. Phasellus elementum venenatis turpis. Integer leo quam, porta vel tristique eget, bibendum vitae odio. Donec ligula quam, ultricies at purus sed.'
    //   );




// =================== brands-catalog.component BrandsComponent =================== 
    import { Component, OnInit, ViewChild } from '@angular/core';
    import {Brand} from '../models/brand';

//======== Google Maps  ==========================//
    import { MapTypeStyle} from '@agm/core';

// ============= TranslationService =============//
import { TranslateService, LangChangeEvent, TranslationChangeEvent } from '@ngx-translate/core';

    @Component ({
      selector: 'brands-catalog',
      templateUrl: './brands-catalog.component.html'
    })
     
    export class BrandsCatalog implements OnInit{
      
 //====================================== Class attributes ======================================//     
      public currentSelectedID:number;
      public selectedBrand:Brand;
      public brandList:Brand[];
      public DetailsPane:string = 'hidden-brand invisible'; 
      public MenuPane:string = 'col-xs-9 col-lg-9 catalog-display ';
      public kitchensBtn:string= 'col-xs-12 col-lg-3 brands-catalog-btn-bg';
      public achitectsBtn:string= 'col-xs-12 col-lg-3 brands-catalog-btn-bg';
      public foundationBtn:string= 'col-xs-12 col-lg-3 brands-catalog-btn-bg';
      public artsBtn:string= 'col-xs-12 col-lg-3 brands-catalog-btn-bg';
      public kitchensBtnIcon:string = 'img-responsive brand-icon';
      public achitectsBtnIcon:string = 'img-responsive brand-icon';
      public foundationBtnIcon:string = 'img-responsive brand-icon';
      public artsBtnIcon:string = 'img-responsive brand-icon';

// ============================Gallery Elements============================ //
    //======= Data items for Gallery Items and Albums =======//
    public currentItem:string;
    public currentAlbum:string;
           item_counter:number;
           album_max:number;
           kitchensAlbum:number;
           architectureAlbum:number;
           artsAlbum:number;
           sacroAlbum:number;
           menuVisible:boolean;

  /////////////////////////////////Section creation ///////////////////////////////////////////////// 

  
         public brands_map_zoom:number=16;
         public mapa:boolean = false;
         public translations;

      
  constructor(public translate:TranslateService){	
    this.buildBrandList(); 
    this.ngOnInit;
            }

  public ngOnInit(){        
              
     // this language will be used as a fall back when a translation isn't found in the current language
        this.translate.setDefaultLang('es');
     // the language to use, if the language isn't available, it will use the current loader to get them
        this.translate.use('es');  

     //Suscribe to get language update notification and translations 
        this.translate.onTranslationChange.subscribe((event:TranslationChangeEvent)=>{});
        this.translate.onLangChange.subscribe((event:LangChangeEvent)=>{
          this.CompleteBrandList(event);
        });
                     
   }

   buildBrandList(){
        this.brandList = new Array<Brand>(
            new Brand(0, "Kreis Kitchens", '/assets/imgs/GalleryImages/KreisKitchens/KreisKitchens-1.jpg', 'Diseñamos y fabricamos cocinas de alto nivel para clientes que desean convertir su lugar en un espacio multidisciplinario en el que conviven el arte y la magia con sus actividades diarias.'  ),
            new Brand(1, 'Kreis Architect & Partners', '/assets/imgs/GalleryImages/KreisArchitecture/Kreis-architects-1.jpg', 'Somos un firma de arquitectura especializada en proyectos para casas de playa, hoteles boutique y restauración de fincas y monumentos históricos. Creamos y transformamos espacios buscando trasladar al ser humano a un mundo minimal y surrealista.'),
            new Brand(2, 'Kreis Art & Crafts', '/assets/imgs/GalleryImages/KreisArts_Crafts/Kreis-arts-and-krafts-1.jpg', 'Somos una firma de diseño especializada en la creación de muebles y obras de arte a través de la abstracción de experiencias de la vida cotidiana que provocan diferentes emociones en nuestros clientes y espectadores.'),
            new Brand(3, 'Kreis Sacro', '/assets/imgs/GalleryImages/KreisSacro/Sacro-1.jpg', 'Utilizando materiales como la madera, el bronce, el oro y la plata entre otros, creamos piezas de arte sacro con la finalidad principal de rescatar las tradiciones y costumbres religiosas del mundo. Fabricamos piezas a medida para espacios tanto religiosos como habitacionales y comerciales.')
        );         
                
                this.selectedBrand = this.brandList[0];
   }
  public CompleteBrandList(event){;
             
            this.brandList[0].description = event.translations.BRANDS.KITC_TXT;
            this.brandList[0].path = event.translations.BRANDS.KITC_PATH;
            this.brandList[0].prefix = event.translations.BRANDS.KITC_ALBUM;
            this.brandList[0].max = event.translations.BRANDS.KITC_MAX; 

            this.brandList[1].description = event.translations.BRANDS.ARCH_TXT; 
            this.brandList[1].path = event.translations.BRANDS.ARCH_PATH;
            this.brandList[1].prefix = event.translations.BRANDS.ARCH_ALBUM;
            this.brandList[1].max = event.translations.BRANDS.ARCH_MAX; 

            this.brandList[2].description = event.translations.BRANDS.ARTS_TXT; 
            this.brandList[2].path = event.translations.BRANDS.ARTS_PATH;
            this.brandList[2].prefix = event.translations.BRANDS.ARTS_ALBUM;
            this.brandList[2].max = event.translations.BRANDS.ARTS_MAX; 

            this.brandList[3].description = event.translations.BRANDS.SACRO_TXT; 
            this.brandList[3].path = event.translations.BRANDS.SACRO_PATH;
            this.brandList[3].prefix = event.translations.BRANDS.SACRO_ALBUM;
            this.brandList[3].max = event.translations.BRANDS.SACRO_MAX; 

            this.kitchensAlbum = this.brandList[0].max;
            this.architectureAlbum = this.brandList[1].max;
            this.artsAlbum = this.brandList[2].max;
            this.sacroAlbum = this.brandList[3].max;
   }


  ///////////////////////////////// Interaction Methods ///////////////////////////////////////////////// 

          public previusItem(){
            if (this.item_counter <= 1) {
              this.item_counter = this.album_max; 
            } else {
              this.item_counter--;
            }            
              this.changeDetailsImage(this.buildImagePath(this.item_counter));
              console.log('previusItem');               
          }
          public nextItem(){
            if (this.item_counter >= this.album_max || this.item_counter < 1) {
                  this.item_counter = 1; 
            } else if(this.item_counter >= 1 && this.item_counter <= this.album_max) {
                this.item_counter++;
            }            
              this.changeDetailsImage(this.buildImagePath(this.item_counter));
              console.log('nextItem');              
          }

          buildImagePath(nxt):string{
            let image_path:string;
            image_path = this.currentAlbum+nxt+'.jpg';
            return image_path;
          }

          changeDetailsImage(target:string){
              console.log(target);              
              this.currentItem = target;
              console.log(this.currentItem);
              
          }

          public updateLanguage(){
            if (this.translate.currentLang == 'es') { 
              this.translate.use('en');
            } else {
               this.translate.use('es');
            }            
          }   

           public debug(){
             console.log(this.selectedBrand);	

          }

           public ChangeSelectedBrand(brandID:number ){
                this.selectedBrand = this.brandList[brandID];
                this.updateMenuButtons(brandID);
                this.updateGalleryAlbum();
                this.SwitchView(true);
          }  

          public updateGalleryAlbum(){
            this.currentItem = this.selectedBrand.logo;
            this.currentAlbum = this.selectedBrand.path+this.selectedBrand.prefix;
            this.item_counter = 1;
            this.album_max = this.selectedBrand.max;
          }     

           public closeDetailsView(){
                  this.updateMenuButtons(4);
                  this.SwitchView(false);
           }
           
           public getBrandLogo(brandID:number):string{
             let brand_logo_url:string;
             let temp:Brand = this.brandList[brandID];
             brand_logo_url = temp.logo;
             return brand_logo_url;
           }

           public updateMenuButtons(brandID:number){
                  switch (brandID) {
                    case 0: //Kitchens has been selected
                          this.kitchensBtn = this.cssCatalogBtn_sidebar;
                          this.kitchensBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.achitectsBtn = this.cssCatalogBtn_sidebar;
                          this.achitectsBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.foundationBtn = this.cssCatalogBtn_sidebar;
                          this.foundationBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.artsBtn  = this.cssCatalogBtn_sidebar; 
                          this.artsBtnIcon = this.cssBtnIcon_sidebar;
                      break;
                    case 1:  //Achitects has been selected
                          this.kitchensBtn = this.cssCatalogBtn_sidebar;
                          this.kitchensBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.achitectsBtn = this.cssCatalogBtn_sidebar;
                          this.achitectsBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.foundationBtn = this.cssCatalogBtn_sidebar;
                          this.foundationBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.artsBtn  = this.cssCatalogBtn_sidebar; 
                          this.artsBtnIcon = this.cssBtnIcon_sidebar;
                      break;
                    case 2:  //Foundation has been selected
                          this.kitchensBtn = this.cssCatalogBtn_sidebar;
                          this.kitchensBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.achitectsBtn = this.cssCatalogBtn_sidebar;
                          this.achitectsBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.foundationBtn = this.cssCatalogBtn_sidebar;
                          this.foundationBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.artsBtn  = this.cssCatalogBtn_sidebar; 
                          this.artsBtnIcon = this.cssBtnIcon_sidebar;
                      break;
                    case 3:  //Arts has been selected
                          this.kitchensBtn = this.cssCatalogBtn_sidebar;
                          this.kitchensBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.achitectsBtn = this.cssCatalogBtn_sidebar;
                          this.achitectsBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.foundationBtn = this.cssCatalogBtn_sidebar;
                          this.foundationBtnIcon = this.cssBtnIcon_sidebar;
                      
                          this.artsBtn  = this.cssCatalogBtn_sidebar; 
                          this.artsBtnIcon = this.cssBtnIcon_sidebar;
                      break;
                    default:  //Close datails pane
                          this.kitchensBtn = this.cssCatalogBtn_main;
                          this.kitchensBtnIcon = this.cssBtnIcon_main;
                      
                          this.achitectsBtn = this.cssCatalogBtn_main;
                          this.achitectsBtnIcon = this.cssBtnIcon_main;
                      
                          this.foundationBtn = this.cssCatalogBtn_main;
                          this.foundationBtnIcon = this.cssBtnIcon_main;
                      
                          this.artsBtn  = this.cssCatalogBtn_main; 
                          this.artsBtnIcon = this.cssBtnIcon_main;
                      break;
                  }
           }

           public SwitchView(view:boolean){
               if(view != true){
                 this.mapa = false;
                 this.DetailsPane = this.cssDetailsPane_collapsed ;
                 this.MenuPane =  this.cssMenuPane_main;
               }else{
                 this.mapa = true;
                 this.DetailsPane = this.cssDetailsPane_expanded ;
                 this.MenuPane =  this.cssMenuPane_sidebar;
                 this.brands_map_zoom=13;
               }
           }

          
  /////////////////////////////////CSS Styling /////////////////////////////////////////////////

  //======================== DetailsPane ================================================//
          public cssDetailsPane_expanded:string = 'col-xs-12 col-lg-12 brands-catalog-main-2';
          public cssDetailsPane_collapsed:string = 'hidden-brand invisible ';

  //======================== MenuPane ================================================//
          public cssMenuPane_sidebar:string = 'col-xs-9 footer-menu';
          public cssMenuPane_main:string = 'col-xs-9 catalog-display ';

  //======================== CatalogBtn ================================================//
          public cssCatalogBtn_sidebar:string = 'col-xs-12 col-lg-3 brand-btn-sm';
          public cssCatalogBtn_main:string = 'col-xs-12 col-lg-3 brands-catalog-btn-bg';
          public cssCatalogBtn_hidden:string = 'hidden-brand invisible';
  
  //======================== BtnIcon ================================================//
          public cssBtnIcon_sidebar:string = 'img-responsive brand-icon-sm';
          public cssBtnIcon_main:string = 'img-responsive brand-icon';
          public cssBtnIcon_hidden:string = 'hidden-brand invisible';


}