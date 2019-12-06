import { Component, OnInit } from '@angular/core';
import { ShareDataService} from '../../share-data.service'
import { error } from '@angular/compiler/src/util';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products:any =[];
  constructor(private shareData : ShareDataService) { }

  ngOnInit() {

    this.shareData.postProduct(this.products).subscribe(data => {
          console.log(data);
          // empForm.reset();
          this.products = data;
        },(error:any) =>console.error(error)
        );
    
  }

}
// onClickSubmit(cproduct: Product){
//   this.shareData.postProduct('', cproduct).subscribe(status=> console.log(JSON.stringify(status)))
// }
// onClickSubmit(data):void{
//   this.product.push(data);
// }
