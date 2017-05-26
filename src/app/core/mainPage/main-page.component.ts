
import { Component, OnInit } from '@angular/core';

import { Phone , PhoneService } from '../../services/phones';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  phones:Phone[]=[];


  constructor(private phoneSrv: PhoneService) { }

  ngOnInit(): void {
    this.phoneSrv.getPhones()
      .then(phones => this.phones = phones);
  }
 }
