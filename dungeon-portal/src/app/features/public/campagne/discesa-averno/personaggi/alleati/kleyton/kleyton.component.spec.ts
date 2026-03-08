import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KleytonComponent } from './kleyton.component';

describe('Kleyton', () => {
  let component: KleytonComponent;
  let fixture: ComponentFixture<KleytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KleytonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KleytonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
