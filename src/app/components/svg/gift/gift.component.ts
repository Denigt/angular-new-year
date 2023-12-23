import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [],
  templateUrl: './gift.component.svg',
  styleUrl: './gift.component.scss',
})
export class GiftComponent {
  @HostBinding('style.--box-duration')
  @Input()
  boxDuration = '2s';
  @HostBinding('style.--bow-delay')
  @Input()
  bowDelay = this.boxDuration.split('s')[0] + 's';
  @HostBinding('style.--bow-duration')
  @Input()
  bowDuration = '1.5s';
  @HostBinding('style.--fill-duration')
  @Input()
  fillDuration = '2s';
}
