import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaggioCard } from './personaggio-card';

describe('PersonaggioCard', () => {
  let component: PersonaggioCard;
  let fixture: ComponentFixture<PersonaggioCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaggioCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaggioCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
