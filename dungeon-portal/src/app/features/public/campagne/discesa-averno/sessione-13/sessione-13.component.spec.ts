import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione13Component } from './sessione-13.component';

describe('Sessione13', () => {
  let component: Sessione13Component;
  let fixture: ComponentFixture<Sessione13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione13Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
