import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MoveDirection, OutMode } from "@tsparticles/engine"; // Supprime les ClickMode et HoverMode
import { loadSlim } from "@tsparticles/slim";
import { NgParticlesService } from "@tsparticles/angular";
import { NgxParticlesModule } from "@tsparticles/angular";
import { Engine, Container } from "@tsparticles/engine";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavbarComponent, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projet-animation1';
  id = "tsparticles";

  /* URL pour charger la configuration JSON */
  particlesUrl = "assets/among-us.json";

 

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      await loadSlim(engine);  // Slim configuration
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}

