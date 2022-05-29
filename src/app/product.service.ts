import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({  
  providedIn: 'root'  
}) 

export class ProductService {
  productList: Array<Product> = ([  
    { productId: 1, productName: 'Mobile', productPrice: 12000, productDesc: 'New Mobile',image:    "https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg"  }, 

    { productId: 2, productName: 'Computer', productPrice: 30000, productDesc: 'New Computer' ,image:"https://images.oyoroomscdn.com/uploads/hotel_image/1097/9b75ea873012234c.jpg"},  
    { productId: 3, productName: 'Cabinet', productPrice: 800, productDesc: 'New Cabinet' ,image:"https://images.oyoroomscdn.com/uploads/hotel_image/1097/0fbd36321cf49f40.jpg"},  
    { productId: 4, productName: 'HDD', productPrice: 1000, productDesc: 'New HDD' ,image:"https://images.oyoroomscdn.com/uploads/hotel_image/1097/0fbd36321cf49f40.jpg"}  
  
  ]); 
  
  GetProductList()
  {
return this.productList;
  }
  constructor() { }

}