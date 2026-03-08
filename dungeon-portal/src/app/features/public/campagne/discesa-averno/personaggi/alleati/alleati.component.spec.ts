import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleatiComponent } from './alleati.component';

describe('Alleati', () => {
  let component: AlleatiComponent;
  let fixture: ComponentFixture<AlleatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlleatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleatiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
