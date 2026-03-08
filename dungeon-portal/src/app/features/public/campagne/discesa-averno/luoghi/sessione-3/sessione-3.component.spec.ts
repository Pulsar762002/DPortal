import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione3Component } from './sessione-3.component';

describe('Sessione3', () => {
  let component: Sessione3Component;
  let fixture: ComponentFixture<Sessione3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
