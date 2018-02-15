//   ====================================================================================
//   ||  Version: 1.0                                                                  ||
//   ||  Creation date: June 2017                                                      ||
//   ||  Autor: Created by Green Lyon                                                  || 
//   ||  Owner: Kreis Industries                                                       || 
//   ||  Description: Model fo Brands for Kreis Industries Website                     ||
//   ||  Last change: Creation Ver 1.0 June 2017 Green Lyon> Mariano Soto              ||
//   ====================================================================================                


// =================== brand.model Template for BrandsComponent =================== 
export class Brand{
		
	constructor(
		public id:number, 
		public name:string, 
		public logo:string, 
		public description?:string,
    public path?:string,
    public prefix?:string,
    public max?:number
	){}
	
}