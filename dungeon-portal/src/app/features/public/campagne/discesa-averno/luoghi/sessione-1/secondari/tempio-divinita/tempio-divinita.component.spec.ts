import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempioDivinitaComponent } from './tempio-divinita.component';

describe('TempioDivinita', () => {
  let component: TempioDivinitaComponent;
  let fixture: ComponentFixture<TempioDivinitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempioDivinitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempioDivinitaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
