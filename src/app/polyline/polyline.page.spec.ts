import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolylinePage } from './polyline.page';

describe('PolylinePage', () => {
  let component: PolylinePage;
  let fixture: ComponentFixture<PolylinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolylinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
