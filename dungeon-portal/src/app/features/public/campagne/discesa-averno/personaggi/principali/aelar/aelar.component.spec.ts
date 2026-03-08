import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AelarComponent } from './aelar.component';

describe('Aelar', () => {
  let component: AelarComponent;
  let fixture: ComponentFixture<AelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AelarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AelarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
