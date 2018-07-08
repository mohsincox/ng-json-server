import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class ChomeComponent implements OnInit {

  constructor(private http: Http) { }

  comments = [];
  posts = [];
  fatchData = function() {
    this.http.get("http://localhost:3000/comments?_expand=post").subscribe(
      (res: Response) => {
        this.comments = res.json();
      }
    )
  }

  deleteComment = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${ "http://localhost:3000/comments" }/${ id }`;
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
