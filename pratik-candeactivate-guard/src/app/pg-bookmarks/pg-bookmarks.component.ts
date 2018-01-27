import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PgPopupComponent } from '../pg-popup/pg-popup.component';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { CheckDeactivateGuard } from '../../guards/can-deativate.guard';
import { CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-pg-bookmarks',
  templateUrl: './pg-bookmarks.component.html',
  styleUrls: ['./pg-bookmarks.component.css']
})
export class PgBookmarksComponent implements OnInit{
  dialogRef: MatDialogRef<PgPopupComponent>;

  constructor(public dialog:MatDialog) {     
  }
  
  ngOnInit() {    
    
  }
 
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {  
    return false;
  }

  testtest(){
    Observable.create((observer: Observer<boolean>) => {
      this.dialogRef = this.dialog.open(PgPopupComponent);
      this.dialogRef.afterClosed().subscribe((result) => {         
          observer.next(result.isSubmit);
          observer.complete();       
      })     
      });  
      
      return 1+3;
  } 
}   



