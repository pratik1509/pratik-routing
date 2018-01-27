import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PgBookmarksComponent } from '../app/pg-bookmarks/pg-bookmarks.component';
import { PgPopupComponent } from '../app/pg-popup/pg-popup.component';


@Injectable()
export class CheckDeactivateGuard implements CanDeactivate<PgBookmarksComponent>{
    dialogRef: MatDialogRef<PgPopupComponent>;
    
    constructor(public dialog:MatDialog) {         
    }

    canDeactivate(component: PgBookmarksComponent): boolean | Promise<boolean>  | Observable<boolean> {       
        return Observable.create((observer: Observer<boolean>) => {
            this.dialogRef = this.dialog.open(PgPopupComponent);
            this.dialogRef.afterClosed().subscribe((result) => {               
                observer.next(result.isSubmit);
                observer.complete();       
            })     
            });   
      }    


}
