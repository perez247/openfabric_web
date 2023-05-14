import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-error-message',
  templateUrl: './custom-error-message.component.html',
  styleUrls: ['./custom-error-message.component.scss']
})
export class CustomErrorMessageComponent {
  @Input() errorMessage: string = '';
}
