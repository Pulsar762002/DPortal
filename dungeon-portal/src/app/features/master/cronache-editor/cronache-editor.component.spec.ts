import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronacheEditor } from './cronache-editor';

describe('CronacheEditor', () => {
  let component: CronacheEditor;
  let fixture: ComponentFixture<CronacheEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronacheEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronacheEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
