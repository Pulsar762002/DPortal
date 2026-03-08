import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuogoCardComponent } from './luogo-card.component';

describe('LuogoCard', () => {
  let component: LuogoCardComponent;
  let fixture: ComponentFixture<LuogoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuogoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuogoCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
