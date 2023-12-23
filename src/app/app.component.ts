import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ActivatedRoute, RouterOutlet } from '@angular/router'
import { MessageComponent } from './components/message/message.component'
import { TreeComponent } from './components/svg/tree/tree.component'
import { GiftComponent } from './components/svg/gift/gift.component'
import { ConfettiService } from './services/confetti.service'
import { NewYearComponent } from './components/svg/new-year/new-year.component'
import { GreetingService } from './services/greeting.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessageComponent, TreeComponent, GiftComponent, NewYearComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Feliz año'
  private code: string

  constructor (
    public route: ActivatedRoute, 
    private confettiSv: ConfettiService,
    private greetingSv: GreetingService,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit (): void {
    if (isPlatformBrowser(this.platformId))
      this.confettiSv.snowAnimationFrame();

    if (isPlatformServer(this.platformId))
      this.greetingSv.list().forEach(element => {
        console.log(`${element.name} -- ${element.code}`)
      })

    this.route.queryParamMap.subscribe((params) => {
      this.code = params.get('code')
    })
  }

  get name (): string {
    return this.greetingSv.get(this.code)?.name
  }

  get message (): string {
    return this.greetingSv.get(this.code)?.message
  }
}
