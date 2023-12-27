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

  snow(color: string = '#ffffff') {;
    this.snowConfig.skew =  Math.max(0.8, this.snowConfig.skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      origin: {
        x: Math.random(),
        y: (Math.random() * this.snowConfig.skew) - 0.2
      },
      colors: [color],
      shapes: ['circle'],
      gravity: this.random(0.4, 0.6),
      scalar: this.random(0.4, 1),
      drift: this.random(-0.4, 0.4),
      zIndex: -1
    });
  
    requestAnimationFrame(this.snow.bind(this, color));
  }

  confetti(position: number[]) {
    confetti({
      particleCount: 400,
      startVelocity: 30,
      spread: 360,
      zIndex: 1000,
      origin: {
        x: position[0],
        y: position[1]
      }	
    });
  }

  random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
