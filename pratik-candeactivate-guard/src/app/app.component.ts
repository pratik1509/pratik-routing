import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PgBookmarksComponent } from './pg-bookmarks/pg-bookmarks.component';
import { PgPaginationComponent } from './pg-pagination/pg-pagination.component';
import { PgQuestionComponent } from './pg-question/pg-question.component';
import { PgPopupComponent } from './pg-popup/pg-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'app'; 
  constructor (public router: Router){

  }

  public goToBookMark() : void {
      this.router.navigate(['bookmark']);
  }

  public goToQuestion() : void {
    this.router.navigate(['question']);
}

public goToPagination() : void {
  this.router.navigate(['pagination']);
}

}

