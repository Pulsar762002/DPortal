import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione11Component } from './sessione-11.component';

describe('Sessione11', () => {
  let component: Sessione11Component;
  let fixture: ComponentFixture<Sessione11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione11Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
