import { AfterViewInit, Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@tsparticles/engine";




gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  imports: [NgxParticlesModule],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    

    gsap.to(".dot", {
      y : -60,

      stagger : {
        each : 0.2,
        repeat : -1,
        yoyo : true,
      }
    })
    gsap.to(".shadow", {
      y : 60,
      stagger : {
        each : 0.2,
        repeat : -1,
        yoyo : true,
      },
      opacity : 0.1
    })
  const loader = document.querySelector(".loader") as HTMLElement;
  window.addEventListener("load", () => { 
    loader.style.display = "none";
  });
  
  
  
  }
 // Méthode pour la gestion des particules chargées
 particlesLoaded(container: Container): void {
  console.log('Les particules sont chargées', container);
}}
