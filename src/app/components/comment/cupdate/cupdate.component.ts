import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cupdate',
  templateUrl: './cupdate.component.html',
  styleUrls: ['./cupdate.component.css']
})
export class CupdateComponent implements OnInit {
  id: number;
  data: object = {};
  comments = [];
  //exist = false;
  commentObj: object = {};
  private headers = new Headers({ 'Content-type': 'application/json' });
  constructor(private route: ActivatedRoute, private router: Router, private http: Http) { }

  posts = [];
  fatchData = function() {
    this.http.get("http://localhost:3000/posts").subscribe(
      (res: Response) => {
        this.posts = res.json();
        //console.log(this.posts);
      }
    )
  }

  ngOnInit() {
    this.fatchData();
    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/comments").subscribe(
      (res: Response) => {
        this.comments = res.json();
        for(var i = 0; i < this.comments.length; i++) {
          if(parseInt(this.comments[i].id) === this.id) {
            this.data = this.comments[i];
           // this.exist = true;
            break;
          } //else {
            //this.exist = false;
         // }
        }
      }
    )
  }

  updateComment(comment) {
    this.commentObj = {
      "body": comment.body,
      "postId": comment.postId
    };
    const url = `${ "http://localhost:3000/comments" }/${ this.id }`;
    this.http.put(url, JSON.stringify(this.commentObj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(['/comment/home'])
      })
  }

}
