import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-status-popup',
    standalone: true,
    template: `
    <div class="popup-box">
      <h3>Status Updated Successfully</h3>
      <button (click)="close()">OK</button>
    </div>
  `,
    styles: [`
    .popup-box {
      padding: 30px;
      text-align: center;
      width: 280px;
    }

    h3 {
      margin-bottom: 20px;
      color: #2e7d32;
    }

    button {
      background:#4caf50;
      color:#fff;
      border:none;
      padding:8px 26px;
      border-radius:6px;
      cursor:pointer;
      font-size:14px;
    }
  `]
})
export class StatusPopup {
    constructor(private dialogRef: MatDialogRef<StatusPopup>) { }
    close() { this.dialogRef.close(); }
}
