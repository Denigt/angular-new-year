import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  snowConfig = {
    skew: 1,
  };

  snowAnimationFrame() {;
    this.snowConfig.skew =  Math.max(0.8, this.snowConfig.skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      origin: {
        x: Math.random(),
        y: (Math.random() * this.snowConfig.skew) - 0.2
      },
      colors: ['#000000'],
      shapes: ['circle'],
      gravity: this.random(0.4, 0.6),
      scalar: this.random(0.4, 1),
      drift: this.random(-0.4, 0.4),
      zIndex: -1
    });
  
    requestAnimationFrame(this.snowAnimationFrame.bind(this));
  }

  random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
