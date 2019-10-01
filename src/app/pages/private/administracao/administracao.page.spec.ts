import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoPage } from './administracao.page';

describe('AdministracaoPage', () => {
  let component: AdministracaoPage;
  let fixture: ComponentFixture<AdministracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
