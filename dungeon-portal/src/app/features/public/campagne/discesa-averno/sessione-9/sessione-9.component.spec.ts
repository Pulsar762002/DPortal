import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione9 } from './sessione-9';
import {Sessione9Component} from "./sessione-9.component";

describe('Sessione9Component', () => {
  let component: Sessione9Component;
  let fixture: ComponentFixture<Sessione9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione9Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
