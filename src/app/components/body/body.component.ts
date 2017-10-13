import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {

  constructor(public iS:InformacionService, public ps:PostService) {
    ps.getListPost();
  }

  ngOnInit() {
  }

}
