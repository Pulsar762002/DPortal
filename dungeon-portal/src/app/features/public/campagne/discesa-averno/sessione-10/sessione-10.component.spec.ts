import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessione10 } from './sessione-10.component';

describe('Sessione10Component', () => {
  let component: Sessione10;
  let fixture: ComponentFixture<Sessione10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessione10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessione10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
