import { AfterViewInit, Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import Lenis from 'lenis';




@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.animated-text1',
        toggleActions: 'restart reverse play reverse',
        markers: false,
        start: 'top 50%',   // L'animation commence lorsque l'image est au milieu de la page
        end: 'bottom -30%', // Fin de l'animation
        scrub: 2,
      }
    });
    gsap.set('.animated-text1 img', { clearProps: 'all' });
    // Première étape : Déplacement vertical (vers le bas)
    timeline.to('.animated-text1 img', {
      yPercent: 150,            // Déplacement vers le bas de 300%
      duration: 4,
    });
    // Deuxième étape : Déplacement horizontal avec rotation rapide
    timeline.to('.animated-text1 img', {
      xPercent: -800,            // Déplacement vers la droite de 800%
      rotation: 300,             // Rotation rapide de 90 degrés
      duration: 5,
      
    });
    
    ScrollTrigger.update();

    // Lenis Smooth scroll
    const lenis = new Lenis({
      duration: 1.2
    });
    // Fonction raf pour gérer le rafraîchissement
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Intégration de Lenis avec GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Appel de la méthode raf de Lenis
    });
    // -------------------------


    // Créer l'animation ScrollTrigger pour le carrousel
    this.createScrollTriggerAnimation();

    // Gestion du redimensionnement de la fenêtre
    const debouncedResize = this.debounce(this.onWindowResize, 500);
    window.addEventListener('resize', debouncedResize);
  }

  // Fonction pour créer l'animation ScrollTrigger
  createScrollTriggerAnimation(): void {
    const gsapBl = document.querySelector('.gsap__bl')?.clientWidth || 0;
    const gsapTrack = document.querySelector('.gsap__track')?.clientWidth || 0;

    const scrollSliderTransform = gsapTrack - gsapBl;

    gsap.to('.gsap__track', {
      scrollTrigger: {
        trigger: '.gsap_slider',
        start: 'center center',
        end: () => `+=${gsapTrack}`,
        pin: true,
        scrub: true,
        markers: false // A retirer en production
      },
      x: `-=${scrollSliderTransform}px` 
    });
  }

  // Fonction debounce pour limiter les appels à la fonction de redimensionnement
  debounce(func: Function, wait: number): () => void {
    let timeout: any;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func();
      }, wait);
    };
  }

  // Gestion du redimensionnement de la fenêtre
  onWindowResize(): void {
    console.log('Window resized!');
    window.location.reload();
  }
}



