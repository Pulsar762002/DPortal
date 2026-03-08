import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione5Component } from './sessione-5.component';

describe('Sessione5', () => {
  let component: Sessione5Component;
  let fixture: ComponentFixture<Sessione5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione5Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
