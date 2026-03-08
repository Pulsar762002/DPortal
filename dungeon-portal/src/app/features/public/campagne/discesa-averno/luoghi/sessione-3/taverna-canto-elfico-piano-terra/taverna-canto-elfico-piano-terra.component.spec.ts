import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavernaCantoElficoPianoTerraComponent } from './taverna-canto-elfico-piano-terra.component';

describe('TavernaCantoElficoPianoTerra', () => {
  let component: TavernaCantoElficoPianoTerraComponent;
  let fixture: ComponentFixture<TavernaCantoElficoPianoTerraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TavernaCantoElficoPianoTerraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavernaCantoElficoPianoTerraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
