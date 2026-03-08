import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlyssaTokker } from './alyssa-tokker';

describe('AlyssaTokker', () => {
  let component: AlyssaTokker;
  let fixture: ComponentFixture<AlyssaTokker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlyssaTokker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlyssaTokker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
