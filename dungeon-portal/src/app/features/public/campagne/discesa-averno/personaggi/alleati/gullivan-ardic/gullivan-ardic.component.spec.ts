import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GullivanArdic } from './gullivan-ardic';

describe('GullivanArdic', () => {
  let component: GullivanArdic;
  let fixture: ComponentFixture<GullivanArdic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GullivanArdic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GullivanArdic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
