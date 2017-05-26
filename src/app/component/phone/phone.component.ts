
import { Component, Input } from '@angular/core';

import { Phone } from '../../services/phones';

@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent{
  @Input() phone: Phone;
 }
