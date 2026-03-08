import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFineDiElturelComponent } from './la-fine-di-elturel.component';

describe('LaFineDiElturel', () => {
  let component: LaFineDiElturelComponent;
  let fixture: ComponentFixture<LaFineDiElturelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaFineDiElturelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaFineDiElturelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
