import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuoghiPageComponent } from './luoghi-page.component';

describe('LuoghiPage', () => {
  let component: LuoghiPageComponent;
  let fixture: ComponentFixture<LuoghiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuoghiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuoghiPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
