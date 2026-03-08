import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione1Component } from './sessione-1.component';

describe('Sessione1', () => {
  let component: Sessione1Component;
  let fixture: ComponentFixture<Sessione1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
