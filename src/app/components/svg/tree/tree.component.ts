import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [],
  templateUrl: './tree.component.svg',
  styleUrl: './tree.component.scss',
})
export class TreeComponent {
  @HostBinding('style.--yellow-ball-delay') yellowBallDelay = '2s';
  @HostBinding('style.--purple-ball-delay') purpleBallDelay = '4s';
  @HostBinding('style.--blue-ball-delay') blueBallDelay = '6s';
  @HostBinding('style.--red-ball-delay') redBallDelay = '3s';
  @HostBinding('style.--orange-ball-delay') orangeBallDelay = '9s';
  @HostBinding('style.--bottom-yellow-ball-delay') bottomYellowBallDelay = '2s';
  @HostBinding('style.--ball-duration')
  @Input()
  ballDuration = '3s';

  @HostBinding('style.--fill-duration')
  @Input()
  fillDuration = '0.5s';
  @HostBinding('style.--fill-delay')
  @Input()
  fillDelay = '6s';

  @HostBinding('style.--leaves-duration')
  @Input()
  leavesDuration = '4s';

  @HostBinding('style.--log-duration')
  @Input()
  logDuration = '3s';
  @HostBinding('style.--log-delay')
  @Input()
  logDelay = parseInt(this.leavesDuration.split('s')[0]) / 2.2 + 's';

  @HostBinding('style.--decorations-duration')
  @Input()
  decorationsDuration = '4s';

  @HostBinding('style.--star-delay')
  @Input()
  starDelay = parseInt(this.leavesDuration.split('s')[0]) / 1.1 + 's';
  @HostBinding('style.--top-tinsel-delay')
  @Input()
  topTinselDelay = parseInt(this.leavesDuration.split('s')[0]) / 1.3 + 's';
  @HostBinding('style.--bottom-tinsel-delay')
  @Input()
  bottomTinselDelay = parseInt(this.leavesDuration.split('s')[0]) / 1.5 + 's';

  constructor() {
    this.purpleBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
    this.yellowBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
    this.blueBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
    this.redBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
    this.orangeBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
    this.bottomYellowBallDelay =
      Math.random() * (parseInt(this.leavesDuration.split('s')[0]) + 1) +
      1 +
      's';
  }
}
0;
