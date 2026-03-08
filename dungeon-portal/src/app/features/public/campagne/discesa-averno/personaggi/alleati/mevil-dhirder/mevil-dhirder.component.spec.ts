import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevilDhirder } from './mevil-dhirder';

describe('MevilDhirder', () => {
  let component: MevilDhirder;
  let fixture: ComponentFixture<MevilDhirder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MevilDhirder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MevilDhirder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
