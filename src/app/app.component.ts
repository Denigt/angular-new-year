import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, RouterOutlet } from '@angular/router'
import { MD5 } from 'crypto-js'
import data from '../assets/greetings.json'
import { MessageComponent } from './components/message/message.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Feliz año'
  private code: string

  constructor (public route: ActivatedRoute) {}

  ngOnInit (): void {
    data.forEach(element => {
      console.log(MD5(element.name).toString())
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
