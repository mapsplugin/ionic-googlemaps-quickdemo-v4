import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocodingPage } from './geocoding.page';

describe('GeocodingPage', () => {
  let component: GeocodingPage;
  let fixture: ComponentFixture<GeocodingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocodingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocodingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
