import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione12Component } from './sessione-12.component';

describe('Sessione12', () => {
  let component: Sessione12Component;
  let fixture: ComponentFixture<Sessione12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione12Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
