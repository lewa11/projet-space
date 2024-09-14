import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import Lenis from 'lenis';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';


Splitting();


@Component({
  selector: 'app-hero1',
  standalone: true,
  imports: [],
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css'
})
export class Hero1Component implements AfterViewInit {
  ngAfterViewInit(): void {
    let selection = Splitting();

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

    gsap.from(selection[0].chars, {
      // transformOrigin: "bottom", // testez d'autres animations facilement
      scaleY: 3,
      y: 80,
      opacity: 0,
      color: "#000000",
      duration: 3,
      stagger: 0.1,

      scrollTrigger: {
        trigger: ".text-reveal",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 2,
      }
    });

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 600);
    });

    gsap.ticker.lagSmoothing(0);
    const animated = document.querySelector(".animated-text");
    gsap.to('.animated-text', {
      xPercent: 500,
      duration: 2,
      scrollTrigger: {

        trigger: animated,
        toggleActions: "restart reverse play reverse",
        start: "top 30%",
        end: "100% -100%",
        markers: true,
        scrub: 1     // Ajoute des marqueurs visuels pour voir quand l'animation se déclenche (utile pour déboguer)
      }
    });




  }

}
