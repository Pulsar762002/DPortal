import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerenComponent } from './aeren.component';

describe('Aeren', () => {
  let component: AerenComponent;
  let fixture: ComponentFixture<AerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
