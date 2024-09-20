import { Component } from '@angular/core';
import { Hero1Component } from "../../components/hero1/hero1.component";
import { Hero2Component } from '../../components/hero2/hero2.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero1Component, Hero2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
