import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  products = [];
  fatchData = function() {
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${ "http://localhost:3000/products" }/${ id }`;
      return this.http.delete(url).toPromise()
      .then(() => {
        this.fatchData();
      })
    }
  }

  ngOnInit() {
    this.fatchData();
  }

}
