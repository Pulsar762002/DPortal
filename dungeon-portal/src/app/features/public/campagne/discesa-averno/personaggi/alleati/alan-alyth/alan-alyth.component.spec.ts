import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanAlythComponent } from './alan-alyth.component';

describe('AlanAlyth', () => {
  let component: AlanAlythComponent;
  let fixture: ComponentFixture<AlanAlythComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlanAlythComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlanAlythComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
