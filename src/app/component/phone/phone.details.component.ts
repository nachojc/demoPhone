
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Phone, PhoneService } from '../../services/phones';

@Component({
  selector: 'phone-details',
  templateUrl: './phone.details.component.html',
  styleUrls: ['./phone.details.component.scss']
})
export class PhoneDetailsComponent implements OnInit {
  phone: Phone;


  constructor(
    private phoneSrv: PhoneService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.phoneSrv.getPhone(+params['id']))
      .subscribe(phone => this.phone = phone);
  }
}
