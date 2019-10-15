import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroPage } from './carro.page';

describe('CarroPage', () => {
  let component: CarroPage;
  let fixture: ComponentFixture<CarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
