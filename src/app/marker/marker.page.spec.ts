import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerPage } from './marker.page';

describe('MarkerPage', () => {
  let component: MarkerPage;
  let fixture: ComponentFixture<MarkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
