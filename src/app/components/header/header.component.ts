import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public iS:InformacionService, public lg:LoginService) { }

  ngOnInit() {
  }

}
