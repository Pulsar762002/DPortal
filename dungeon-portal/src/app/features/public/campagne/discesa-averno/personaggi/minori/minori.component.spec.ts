import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinoriComponent   } from './minori.component';

describe('Minori', () => {
  let component: MinoriComponent;
  let fixture: ComponentFixture<MinoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinoriComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
