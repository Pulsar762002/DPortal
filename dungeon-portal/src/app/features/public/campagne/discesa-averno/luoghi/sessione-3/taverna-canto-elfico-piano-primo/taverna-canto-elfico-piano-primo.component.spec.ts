import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavernaCantoElficoPianoPrimoComponent } from './taverna-canto-elfico-piano-primo.component';

describe('TavernaCantoElficoPianoPrimo', () => {
  let component: TavernaCantoElficoPianoPrimoComponent;
  let fixture: ComponentFixture<TavernaCantoElficoPianoPrimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TavernaCantoElficoPianoPrimoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavernaCantoElficoPianoPrimoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
