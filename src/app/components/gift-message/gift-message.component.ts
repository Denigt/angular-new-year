import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gift-message',
  standalone: true,
  imports: [],
  templateUrl: './gift-message.component.html',
  styleUrl: './gift-message.component.scss'
})
export class GiftMessageComponent {

  id = this.constructor['ɵcmp'].id;

  @Output()
  valueChange = new EventEmitter<string>()

  @Output()
  send = new EventEmitter()

  @Input() value = ''
  @Input() message!: string
  @Input() showInput = false
  

  onValueChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value
    this.valueChange.emit(this.value)
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    event.stopPropagation()
    
    this.send.emit()
  }
}
