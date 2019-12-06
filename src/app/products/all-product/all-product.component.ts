

import { Component, OnInit } from '@angular/core';
import { ShareDataService} from '../../share-data.service'

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products:any =[];
  categories : any = [];
  colors : any = [];

  withImages = {"include":"images"};
  withCategory ={"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images"};
  withSort = {"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}
  constructor(private shareData : ShareDataService) { }

  ngOnInit() {
    this.shareData.getProducts(this.withImages).subscribe(data =>{
      console.log(data);
      this.products = data;
    });
    this.shareData.getCategory().subscribe(data =>{
      console.log(data);
      this.categories = data;
    });
    this.shareData.getColors().subscribe(data => {
      console.log(data);
      this.colors = data;
    });
    
  }

}

