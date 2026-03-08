import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemeDiPapaveroComponent } from './seme-di-papavero.component';

describe('SemeDiPapavero', () => {
  let component: SemeDiPapaveroComponent;
  let fixture: ComponentFixture<SemeDiPapaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemeDiPapaveroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemeDiPapaveroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
