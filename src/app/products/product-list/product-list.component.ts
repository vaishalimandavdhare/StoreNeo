
import { Component, OnInit , Input} from '@angular/core';
import { ShareDataService} from '../../share-data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // @Input() public itemId:[];
  products : any= [];
  withImages = {"include":"images"};
  // withCategory ={"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images"};
  constructor(private shareData : ShareDataService, private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    this.shareData.getProducts(this.withImages).subscribe(data =>{
      console.log(data);
      this.products = data;
    });
    
  }

}

