import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione2 } from './sessione-2';

describe('Sessione2', () => {
  let component: Sessione2;
  let fixture: ComponentFixture<Sessione2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
