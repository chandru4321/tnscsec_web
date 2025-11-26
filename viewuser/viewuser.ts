import { Component } from '@angular/core';
import { UserService } from '../src/app/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-viewuser',
  imports: [FormsModule,CommonModule],
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css',
})
export class Viewuser {

  mobileNumber = "";
  complaintData: any = null;
  status: string = "";
  notFound = false;

  constructor(private userService: UserService) {}

  searchComplaint() {
    this.userService.getComplaintStatus(this.mobileNumber).subscribe({
      next: (res) => {
        if (res.found) {
          this.complaintData = res.complaintDetails;
          this.status = res.status;
          this.notFound = false;
        } else {
          this.complaintData = null;
          this.notFound = true;
        }
      },
      error: (err) => {
        this.complaintData = null;
        this.notFound = true;
      }
    });
  }

}


