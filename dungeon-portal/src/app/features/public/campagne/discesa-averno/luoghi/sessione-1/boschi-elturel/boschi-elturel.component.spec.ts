import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoschiElturelComponent } from './boschi-elturel.component';

describe('BoschiElturel', () => {
  let component: BoschiElturelComponent;
  let fixture: ComponentFixture<BoschiElturelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoschiElturelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoschiElturelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
