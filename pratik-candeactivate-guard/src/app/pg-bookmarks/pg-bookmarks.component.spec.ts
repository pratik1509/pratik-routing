import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgBookmarksComponent } from './pg-bookmarks.component';

describe('PgBookmarksComponent', () => {
  let component: PgBookmarksComponent;
  let fixture: ComponentFixture<PgBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
