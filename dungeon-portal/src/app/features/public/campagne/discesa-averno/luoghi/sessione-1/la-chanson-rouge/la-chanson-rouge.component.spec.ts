import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaChansonRougeComponent } from './la-chanson-rouge.component';

describe('LaChansonRouge', () => {
  let component: LaChansonRougeComponent;
  let fixture: ComponentFixture<LaChansonRougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaChansonRougeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaChansonRougeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
