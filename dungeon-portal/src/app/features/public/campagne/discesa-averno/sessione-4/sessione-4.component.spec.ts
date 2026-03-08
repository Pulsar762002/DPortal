import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione4Component } from './sessione-4.component';

describe('Sessione4', () => {
  let component: Sessione4Component;
  let fixture: ComponentFixture<Sessione4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
