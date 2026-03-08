import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kyran } from './kyran';

describe('Kyran', () => {
  let component: Kyran;
  let fixture: ComponentFixture<Kyran>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kyran]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kyran);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
