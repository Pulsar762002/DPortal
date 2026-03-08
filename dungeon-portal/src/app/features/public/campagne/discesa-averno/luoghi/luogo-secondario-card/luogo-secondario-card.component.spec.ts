import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuogoSecondarioCardComponent } from './luogo-secondario-card.component';

describe('LuogoSecondarioCard', () => {
  let component: LuogoSecondarioCardComponent;
  let fixture: ComponentFixture<LuogoSecondarioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuogoSecondarioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuogoSecondarioCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
