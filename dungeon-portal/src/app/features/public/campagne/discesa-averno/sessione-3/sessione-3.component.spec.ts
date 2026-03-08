import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione3 } from './sessione-3';

describe('Sessione3', () => {
  let component: Sessione3;
  let fixture: ComponentFixture<Sessione3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
