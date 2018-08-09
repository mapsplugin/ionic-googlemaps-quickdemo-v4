import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlOverlayPage } from './kml-overlay.page';

describe('KmlOverlayPage', () => {
  let component: KmlOverlayPage;
  let fixture: ComponentFixture<KmlOverlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlOverlayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlOverlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
