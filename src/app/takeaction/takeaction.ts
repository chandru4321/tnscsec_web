import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-take-action',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './takeaction.html',
  styleUrls: ['./takeaction.css']
})
export class TakeAction {

  approvedByName = '';
  approvedPrNo = '';
  approvedByNature = '';
  approvedRemarks = '';

  constructor(
    private dialogRef: MatDialogRef<TakeAction>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  submit() {
    if (!this.approvedByName || !this.approvedPrNo || !this.approvedByNature || !this.approvedRemarks) {
      alert('All fields are required!');
      return;
    }

    this.dialogRef.close({
      approvedByName: this.approvedByName,
      approvedPrNo: this.approvedPrNo,
      approvedByNature: this.approvedByNature,
      approvedRemarks: this.approvedRemarks
    });
  }

  close() {
    this.dialogRef.close();
  }
}
