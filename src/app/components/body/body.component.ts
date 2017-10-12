import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {

  constructor(public iS:InformacionService) { }

  ngOnInit() {
  }

}
