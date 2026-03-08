import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodgeComponent } from './zodge.component';

describe('Zodge', () => {
  let component: ZodgeComponent;
  let fixture: ComponentFixture<ZodgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
