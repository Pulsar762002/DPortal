import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione8Component } from './sessione-8.component';

describe('Sessione8Component', () => {
  let component: Sessione8Component;
  let fixture: ComponentFixture<Sessione8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione8Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
