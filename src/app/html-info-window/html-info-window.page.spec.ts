import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlInfoWindowPage } from './html-info-window.page';

describe('HtmlInfoWindowPage', () => {
  let component: HtmlInfoWindowPage;
  let fixture: ComponentFixture<HtmlInfoWindowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlInfoWindowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInfoWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
