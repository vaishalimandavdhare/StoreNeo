export class Product {
    public product_name: String;
    public categoryId: number;
    public product_producer: String;
    public product_description: String;
    public product_cost: number;
    public product_stock: number;
    public product_avg_rating: number;
    public product_color: any;
    public product_dimension: number;
    public product_isactive: boolean;
    public product_material: String;

    constructor(product_name: String, categoryId: number, product_producer: String,product_description:String, product_cost: number,product_stock:number,
        product_avg_rating:number,product_color:any,product_dimension:number,product_isactive:boolean,product_material:String) {
            this.product_name = product_name;
            this.categoryId = categoryId;
            this.product_producer = product_producer;
            this.product_description = product_description;
            this.product_cost = product_cost;
            this.product_stock = product_stock;
            this.product_avg_rating = product_avg_rating;
            this.product_color = product_color;
            this.product_dimension = product_dimension;
            this.product_isactive = product_isactive;
            this.product_material = product_material;
         }
}