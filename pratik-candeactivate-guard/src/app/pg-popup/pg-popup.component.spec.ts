import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPopupComponent } from './pg-popup.component';

describe('PgPopupComponent', () => {
  let component: PgPopupComponent;
  let fixture: ComponentFixture<PgPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
