import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione2Component } from './sessione-2.component';

describe('Sessione2', () => {
  let component: Sessione2Component;
  let fixture: ComponentFixture<Sessione2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
