import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import data from '../../assets/greetings.json'
import environment from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  get(code: string): Greeting | undefined {

    return this.decodeJson().find(element => MD5(element.name).toString() === code)
  }

  list(): { name: string, code: string }[] {
    return this.decodeJson().map(element => {
      return {
        name: element.name,
        code: MD5(element.name).toString()
      }
    })
  }

  private decodeJson(): Greeting[] {
    if (environment.decodeJson) {
    
      return data.map<Greeting>(element => {
        try {
          return { 
            name: this.decodeUtf8(element.name),
            message: this.decodeUtf8(element.message)
          }
        } catch (error) {
          return element
        }
      })

    } else return data
  }

  private decodeUtf8(text: string): string {
    return decodeURIComponent(
      atob(text).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')).replaceAll('\\n', '\n')
  }
}

export interface Greeting {
  name: string
  message: string
}