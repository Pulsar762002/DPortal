import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariComponent } from './secondari.component';

describe('Secondari', () => {
  let component: SecondariComponent;
  let fixture: ComponentFixture<SecondariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondariComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
