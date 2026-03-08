import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCategory } from './character-category';

describe('CharacterCategory', () => {
  let component: CharacterCategory;
  let fixture: ComponentFixture<CharacterCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
