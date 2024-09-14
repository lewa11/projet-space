import { Component } from '@angular/core';
import { Hero1Component } from "../../components/hero1/hero1.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
