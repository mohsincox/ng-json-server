import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }
  confirmationString: String = "New Product has been added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    this.http.post("http://localhost:3000/products/", this.productObj)
    .subscribe((res: Response) => {
      this.isAdded = true;
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
  }

}
