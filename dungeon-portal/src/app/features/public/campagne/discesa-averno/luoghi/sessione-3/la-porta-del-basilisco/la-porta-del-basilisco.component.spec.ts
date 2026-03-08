import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPortaDelBasiliscoComponent } from './la-porta-del-basilisco.component';

describe('LaPortaDelBasilisco', () => {
  let component: LaPortaDelBasiliscoComponent;
  let fixture: ComponentFixture<LaPortaDelBasiliscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaPortaDelBasiliscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaPortaDelBasiliscoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
