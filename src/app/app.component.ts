import { Component, OnInit, VERSION } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  productList: any;    
  constructor(private productService: ProductService) { }  
  
  ngOnInit() {  
       this.productList = this.productService.GetProductList();  
  }  
}
