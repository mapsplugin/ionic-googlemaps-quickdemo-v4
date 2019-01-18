import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePage } from './circle.page';

describe('CirclePage', () => {
  let component: CirclePage;
  let fixture: ComponentFixture<CirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
