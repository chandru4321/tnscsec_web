import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TakeAction } from '../takeaction/takeaction';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatDialogModule],  // ⬅ MUST ADD THIS
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  constructor(private dialog: MatDialog) {}

  openTakeAction() {
  this.dialog.open(TakeAction, {
    width: '450px',       // Similar to screenshot
    height: 'auto',       // Adjust automatically
    panelClass: 'custom-dialog-container'
  });
}

  }

