import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaldursGateComponent } from './baldurs-gate.component';

describe('BaldursGate', () => {
  let component: BaldursGateComponent;
  let fixture: ComponentFixture<BaldursGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaldursGateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaldursGateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
