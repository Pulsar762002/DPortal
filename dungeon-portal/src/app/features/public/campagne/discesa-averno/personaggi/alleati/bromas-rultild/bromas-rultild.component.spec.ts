import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BromasRultild } from './bromas-rultild';

describe('BromasRultild', () => {
  let component: BromasRultild;
  let fixture: ComponentFixture<BromasRultild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BromasRultild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BromasRultild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
