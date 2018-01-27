import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgQuestionComponent } from './pg-question.component';

describe('PgQuestionComponent', () => {
  let component: PgQuestionComponent;
  let fixture: ComponentFixture<PgQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
