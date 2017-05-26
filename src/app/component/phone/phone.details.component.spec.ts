import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';

import {PhoneDetailsComponent} from './phone.details.component';

let fixture: ComponentFixture<PhoneDetailsComponent>;

describe('Details Phone', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ PhoneDetailsComponent],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(PhoneDetailsComponent);
    fixture.detectChanges(); // initial binding
  });



  });