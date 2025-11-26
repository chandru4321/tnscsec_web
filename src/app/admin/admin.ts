import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TakeAction } from '../takeaction/takeaction';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
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
  ) {}

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

  openDialog(row: any) {
  const dialogRef = this.dialog.open(TakeAction, {
    width: '450px',
    data: row
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log("Dialog Submitted Data =", result);

      const body = {
        id: row.id,
        status: "approved",
        approvedByName: result.name,
        approvedPrNo: result.email
      };

      this.http.put(
        `https://lg0w5w01-4000.inc1.devtunnels.ms/api/complaint-register-form2/update-status`,
            //    `https://lg0w5w01-4000.inc1.devtunnels.ms/api/complaint-register-form2/update-status/${row.id}`,

        body
      ).subscribe({
        next: (res) => {
         // alert("Status Updated Successfully!");

          // Update UI button to "Approved"
          this.statusType = "success";
this.statusMessage = "Status Updated Successfully!";
setTimeout(() => {
  this.statusMessage = "";
}, 4000); // au

          row.status = "approved";
        },
        error: (err) => {
          console.error("Update API Error:", err);
          //alert("Update failed! Check API.");
          this.statusType = "error";
this.statusMessage = "Update failed! Check API.";
setTimeout(() => {
  this.statusMessage = "";
}, 4000); // au

        }
      });
    }
  });

}
}
