import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TakeAction } from '../takeaction/takeaction';
import { RouterModule } from '@angular/router';
import { StatusPopup } from '../contact/status-popup';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

  tableData: any[] = [];
  statusMessage: string = "";
  statusType: string = ""; // "success" | "error"


  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.http.get<any>('https://lg0w5w01-4000.inc1.devtunnels.ms/api/complaint-register-form2')
      .subscribe({
        next: (res) => {
          console.log("ADMIN API RESPONSE =", res);
          this.tableData = Array.isArray(res.data) ? res.data : [];
        },
        error: (err) => console.error('API ERROR:', err)
      });
  }



  viewDetails(row: any) {
    this.dialog.open(TakeAction, {
      width: '450px',
      data: row,
      disableClose: false
    });
  }

  openDialog(row: any) {

    const dialogRef = this.dialog.open(TakeAction, {
      width: '450px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      const body = {
        status: 'approved',
        approvedByName: result.approvedByName,
        approvedPrNo: result.approvedPrNo,
        approvedByNature: result.approvedByNature,
        approvedRemarks: result.approvedRemarks
      };

      this.http.put(
        `https://lg0w5w01-4000.inc1.devtunnels.ms/api/complaint-register-form2/update-status/${row.id}`,
        body
      ).subscribe({
        // next: (res: any) => {
        //   this.statusType = 'success';
        //   this.statusMessage = 'Status Updated Successfully!';
        //   row.status = 'approved';

        //   setTimeout(() => this.statusMessage = '', 4000);
        // },

        next: () => {
          row.status = 'approved';

          this.dialog.open(StatusPopup, {
            panelClass: 'status-popup-panel',
            disableClose: true
          });

        },

        error: (err) => {
          console.error('Update API Error:', err);
          this.statusType = 'error';
          this.statusMessage = 'Update failed! Check API.';
          setTimeout(() => this.statusMessage = '', 4000);
        }
      });
    });
  }
}
