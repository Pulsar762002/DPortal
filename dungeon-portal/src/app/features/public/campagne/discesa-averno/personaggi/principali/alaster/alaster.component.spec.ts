import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alaster } from './alaster';

describe('Alaster', () => {
  let component: Alaster;
  let fixture: ComponentFixture<Alaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
