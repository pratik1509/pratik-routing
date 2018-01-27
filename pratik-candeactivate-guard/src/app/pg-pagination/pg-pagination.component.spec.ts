import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPaginationComponent } from './pg-pagination.component';

describe('PgPaginationComponent', () => {
  let component: PgPaginationComponent;
  let fixture: ComponentFixture<PgPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
