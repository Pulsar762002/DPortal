import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccampamentoComponent } from './accampamento.component';

describe('Accampamento', () => {
  let component: AccampamentoComponent;
  let fixture: ComponentFixture<AccampamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccampamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccampamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
