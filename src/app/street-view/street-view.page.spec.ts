import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetViewPage } from './street-view.page';

describe('StreetViewPage', () => {
  let component: StreetViewPage;
  let fixture: ComponentFixture<StreetViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
