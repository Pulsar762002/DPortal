import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione1 } from './sessione-1';

describe('Sessione1', () => {
  let component: Sessione1;
  let fixture: ComponentFixture<Sessione1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
