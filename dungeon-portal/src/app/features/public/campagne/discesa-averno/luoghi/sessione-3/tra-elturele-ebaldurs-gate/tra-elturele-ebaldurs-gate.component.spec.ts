import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraEltureleEbaldursGateComponent } from './tra-elturele-ebaldurs-gate.component';

describe('TraEltureleEBaldursGate', () => {
  let component: TraEltureleEbaldursGateComponent;
  let fixture: ComponentFixture<TraEltureleEbaldursGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraEltureleEbaldursGateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraEltureleEbaldursGateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
