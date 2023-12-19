import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ActivatedRoute, RouterOutlet } from '@angular/router'
import { MD5 } from 'crypto-js'
import data from '../assets/greetings.json'
import { MessageComponent } from './components/message/message.component'
import { TreeComponent } from './components/svg/tree/tree.component'
import { GiftComponent } from './components/svg/gift/gift.component'
import { ConfettiService } from './services/confetti.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessageComponent, TreeComponent, GiftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Feliz año'
  private code: string

  constructor (public route: ActivatedRoute, private confettiSv: ConfettiService,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit (): void {
    if (isPlatformBrowser(this.platformId))
      this.confettiSv.snowAnimationFrame();

    if (isPlatformServer(this.platformId))
      data.forEach(element => {
        console.log(`${element.name} -- ${MD5(element.name).toString()}`)
      })

    this.route.queryParamMap.subscribe((params) => {
      this.code = params.get('code')
    })
  }

  get name (): string {
    return data.find(element => MD5(element.name).toString() === this.code)?.name
  }

  get message (): string {
    return data.find(element => MD5(element.name).toString() === this.code)?.message
  }
}
