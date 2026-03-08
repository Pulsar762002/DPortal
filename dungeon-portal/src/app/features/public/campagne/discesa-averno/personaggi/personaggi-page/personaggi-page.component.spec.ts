import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaggiPageComponent } from './personaggi-page.component';

describe('PersonaggiPageComponent', () => {
  let component: PersonaggiPageComponent;
  let fixture: ComponentFixture<PersonaggiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaggiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaggiPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
