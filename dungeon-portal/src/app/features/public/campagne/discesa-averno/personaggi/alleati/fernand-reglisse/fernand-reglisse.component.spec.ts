import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernandReglisse } from './fernand-reglisse';

describe('FernandReglisse', () => {
  let component: FernandReglisse;
  let fixture: ComponentFixture<FernandReglisse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FernandReglisse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FernandReglisse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
