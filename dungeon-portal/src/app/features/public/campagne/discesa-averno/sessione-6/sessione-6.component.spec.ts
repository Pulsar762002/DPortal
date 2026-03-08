import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione6Component } from './sessione-6.component';

describe('Sessione6', () => {
  let component: Sessione6Component;
  let fixture: ComponentFixture<Sessione6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione6Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
