import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elis } from './elis';

describe('Elis', () => {
  let component: Elis;
  let fixture: ComponentFixture<Elis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
