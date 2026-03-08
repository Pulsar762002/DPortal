import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione7Component } from './sessione-7.component';

describe('Sessione7', () => {
  let component: Sessione7Component;
  let fixture: ComponentFixture<Sessione7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione7Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
