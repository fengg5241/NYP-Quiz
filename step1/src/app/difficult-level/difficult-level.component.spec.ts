import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultLevelComponent } from './difficult-level.component';

describe('DifficultLevelComponent', () => {
  let component: DifficultLevelComponent;
  let fixture: ComponentFixture<DifficultLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
