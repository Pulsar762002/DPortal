import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneManager } from './campagne-manager';

describe('CampagneManager', () => {
  let component: CampagneManager;
  let fixture: ComponentFixture<CampagneManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampagneManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampagneManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
