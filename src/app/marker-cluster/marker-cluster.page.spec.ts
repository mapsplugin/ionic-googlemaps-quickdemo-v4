import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerClusterPage } from './marker-cluster.page';

describe('MarkerClusterPage', () => {
  let component: MarkerClusterPage;
  let fixture: ComponentFixture<MarkerClusterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerClusterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerClusterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
