import { Component } from '@angular/core';
import { AboutRoutingModule } from "../about/about-routing-module";

@Component({
  selector: 'app-home',
  imports: [AboutRoutingModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
