import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//pg modules
import { PgBookmarksComponent } from './pg-bookmarks/pg-bookmarks.component';
import { PgPaginationComponent } from './pg-pagination/pg-pagination.component';
import { PgQuestionComponent } from './pg-question/pg-question.component';
import { routes } from './app.routes';
import { CheckDeactivateGuard } from '../guards/can-deativate.guard';
import { PgPopupComponent } from './pg-popup/pg-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    PgBookmarksComponent,
    PgPaginationComponent,
    PgQuestionComponent,
    PgPopupComponent
  ],
  imports: [
    BrowserModule,
    routes,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [PgPopupComponent],
  providers: [CheckDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
