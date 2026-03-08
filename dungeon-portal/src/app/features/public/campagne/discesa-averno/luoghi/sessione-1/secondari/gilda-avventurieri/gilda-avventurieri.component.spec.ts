import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildaAvventurieriComponent } from './gilda-avventurieri.component';

describe('GildaAvventurieri', () => {
  let component: GildaAvventurieriComponent;
  let fixture: ComponentFixture<GildaAvventurieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GildaAvventurieriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GildaAvventurieriComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
