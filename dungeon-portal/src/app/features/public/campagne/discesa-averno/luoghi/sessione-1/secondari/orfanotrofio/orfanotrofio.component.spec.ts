import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrfanotrofioComponent } from './orfanotrofio.component';

describe('Orfanotrofio', () => {
  let component: OrfanotrofioComponent;
  let fixture: ComponentFixture<OrfanotrofioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrfanotrofioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrfanotrofioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
