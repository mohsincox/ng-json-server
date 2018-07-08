import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccreate',
  templateUrl: './ccreate.component.html',
  styleUrls: ['./ccreate.component.css']
})
export class CcreateComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  posts = [];
  fatchData = function() {
    this.http.get("http://localhost:3000/posts").subscribe(
      (res: Response) => {
        this.posts = res.json();
        //console.log(this.posts);
      }
    )
  }

  commentObj:object = {};

  addNewComment = function(comment) {
    this.commentObj = {
      "body": comment.body,
      "postId": comment.postId
    }
    this.http.post("http://localhost:3000/comments/", this.commentObj)
    .subscribe((res: Response) => {
      //this.isAdded = true;
      this.router.navigate(['/comment/home']);
    })
  }

  ngOnInit() {
    this.fatchData();
  }

}
