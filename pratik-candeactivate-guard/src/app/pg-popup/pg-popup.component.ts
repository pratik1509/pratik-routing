import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pg-popup',
  templateUrl: './pg-popup.component.html',
  styleUrls: ['./pg-popup.component.css']
})
export class PgPopupComponent implements OnInit { 
  constructor(public pgdialogRef: MatDialogRef<PgPopupComponent>) { 
    
  }

  ngOnInit() {
  }

}
