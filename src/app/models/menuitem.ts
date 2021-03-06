//   ====================================================================================
//   ||  Version: 1.0                                                                  ||
//   ||  Creation date: November 2017                                                  ||
//   ||  Autor: Created by Green Lyon                                                  || 
//   ||  Owner: Kreis Industries                                                       || 
//   ||  Description: Model for Navigation item for Kreis Industries Website           ||
//   ||  Last change: Creation Ver 1.0 Nov 2017 Green Lyon> Mariano Soto               ||
//   ====================================================================================                


// =================== menu_item.model elements for NaviComponent button =================== 


//---Use of generic name for reusability---//
export class MenuItem {

/* MenuItem data members */
    public item_key:number;
    public item_label:string; 
    public item_title:string;
    public item_id:string;
    public router_link?:string; /* Optional item enables the item to be used as a html-link or control*/
    public html_link?:string;
    public item_active:boolean;
  constructor(
                _item_key:number,
                _item_label:string, 
                _item_title:string,
                _item_id:string,
                _router_link:string, /* Optional item enables the item to be used as a html-link or control*/
                _html_link:string,
                _item_active:boolean
            ) {  
                this.item_key      = _item_key;
                this.item_label    = _item_label; 
                this.item_title    = _item_title;
                this.item_id       = _item_id;
                this.router_link  = _router_link; 
                this.html_link     = _html_link;
                this.item_active   = _item_active;
              }

}