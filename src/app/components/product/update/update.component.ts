import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  data: object = {};
  products = [];
  //exist = false;
  productObj: object = {};
  private headers = new Headers({ 'Content-type': 'application/json' });

  constructor(private route: ActivatedRoute, private router: Router, private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();
        for(var i = 0; i < this.products.length; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.data = this.products[i];
           // this.exist = true;
            break;
          } //else {
            //this.exist = false;
         // }
        }
      }
    )
  }

  updateProduct(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    };
    const url = `${ "http://localhost:3000/products" }/${ this.id }`;
    this.http.put(url, JSON.stringify(this.productObj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(['/'])
      })
  }

}
