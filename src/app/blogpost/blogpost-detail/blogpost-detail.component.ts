import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
 import { BlogpostService } from '../blogpost.service';

 import { Title } from '@angular/platform-browser';

import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {

 error;
  blogs;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogpostService: BlogpostService,
    private titleService: Title
    ) { }

  ngOnInit() {
       this.blogs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogpostService.getBlog(params.get('id'))
      )
    );

    
    this.titleService.setTitle('Blog Detail');
  }

}