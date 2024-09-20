import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import Lenis from 'lenis';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

@Component({
  selector: 'app-hero1',
  standalone: true,
  imports: [],
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css'
})
export class Hero1Component implements AfterViewInit {
  ngAfterViewInit(): void {

    let selections = Splitting({ target: '.text-reveal' });

    // const Lenis ------------
    const lenis = new Lenis({
      duration: 0.1
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // --------------------------------

    // Animation pour le titre Midwam
    gsap.ticker.lagSmoothing(0);
    const animated = document.querySelector(".animated-text");
    gsap.to('.animated-text', {
      xPercent: 500,
      duration: 2,
      scrollTrigger: {
        trigger: animated,
        toggleActions: "restart reverse play reverse",
        start: "top 30%",
        end: "100% -300%",
        markers: false,
        scrub: 2,     // Ajoute des marqueurs visuels pour voir quand l'animation se déclenche (utile pour déboguer)
      }
    });

    // Animation sur le texte découpé
    selections.forEach((selection: any) => {
      gsap.from(selection.chars, {
        scaleY: 4.5,
        y: 300,
        z: -300,
        rotationX: 180,
        opacity: 0,
        color: "#000000",
        duration: 3,
        stagger: 0.1,
        markers: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selection.words[0].parentElement,  // Trigger for each paragraph
          start: "top 120%",
          end: "bottom 20%",
          scrub: 2,

        }
      });
    });
  }
}
