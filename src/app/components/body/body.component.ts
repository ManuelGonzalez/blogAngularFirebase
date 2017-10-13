import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";
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

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("paso");
        this.ps.next();
    }
  }

}
