import { Component } from '@angular/core';
import { UserService } from '../src/app/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-viewuser',
  imports: [FormsModule, CommonModule],
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css',
})
export class Viewuser {

  mobileNumber = "";
  complaintData: any = null;
  status: string = "";
  notFound = false;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }


  searchComplaint() {
    this.userService.getComplaintStatus(this.mobileNumber).subscribe({
      next: (res: any) => {

        console.log("FULL RESPONSE:", res);

        // 🔥 Correct data extraction
        if (res?.data?.found) {
          this.complaintData = res.data.complaintDetails;
          this.status = res.data.status;
          this.notFound = false;
        } else {
          this.complaintData = null;
          this.notFound = true;
        }
      },
      error: () => {
        this.complaintData = null;
        this.notFound = true;
      }
    });
  }
}
