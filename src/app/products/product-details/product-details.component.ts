
import { Component, OnInit } from '@angular/core';
import { ShareDataService} from '../../share-data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  outputId=[];//object created for output display
  products:any=[];
  productId:any;
  withImages = {"include":"images"};
  withID = {"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images"}
  constructor(private shareData : ShareDataService, private route:ActivatedRoute, private routes:Router) { }
  ngOnInit() {
    // this is for product detail id fetch
    this.route.params.subscribe(
      (params: Params) => {
      let productId = params['id'];
      this.getProductByID(productId);
      console.log("product id is " +productId);
      });
  }
  // this is for product details content display
  getProductByID(productId){
    this.shareData.getProductDetailsByID(productId).subscribe(data =>{
      this.outputId = data;
      console.log("content data" , this.outputId);
    })
  }

}
