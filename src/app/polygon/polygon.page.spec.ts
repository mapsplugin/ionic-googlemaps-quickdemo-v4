import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonPage } from './polygon.page';

describe('PolygonPage', () => {
  let component: PolygonPage;
  let fixture: ComponentFixture<PolygonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
