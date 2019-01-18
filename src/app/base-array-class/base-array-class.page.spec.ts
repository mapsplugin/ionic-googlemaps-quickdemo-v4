import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseArrayClassPage } from './base-array-class.page';

describe('BaseArrayClassPage', () => {
  let component: BaseArrayClassPage;
  let fixture: ComponentFixture<BaseArrayClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseArrayClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseArrayClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
