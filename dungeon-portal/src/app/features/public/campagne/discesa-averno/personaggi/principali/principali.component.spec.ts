import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principali } from './principali';

describe('Principali', () => {
  let component: Principali;
  let fixture: ComponentFixture<Principali>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Principali]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Principali);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
