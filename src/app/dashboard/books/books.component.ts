import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  products: any=[];
  constructor(public productService:ProductsService) {

  }

  // read all products
  ngOnInit() {
    // read data within products collection
    this.productService.read_products().subscribe((data:any)=>{
      this.products=data;
      console.log(this.products);
    }
    )};

  // delete product
  deleteBook(id:any) {
    if (window.confirm('êtes vous sûre de vouloir supprimer?')) {
      this.productService.delete_product(id)
    }
  }
}
