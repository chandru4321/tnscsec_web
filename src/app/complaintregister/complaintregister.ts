import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user';

@Component({
  selector: 'app-complaintregister',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './complaintregister.html',
  styleUrls: ['./complaintregister.css']
})
export class Complaintregister implements OnInit {

  users: any[] = [];
  districts: any[] = [];
  zones: any[] = [];

  // Form fields
  selectedName = '';
  selectedDistrict = '';
  selectedZone = '';
  societyName = '';
  petitionerName = '';
  phoneNumber = '';
  address = '';
  taluk = '';
  pincode = '';

  pdfFile: File | null = null;

  constructor(private deptService: UserService) {}

  ngOnInit(): void {

    // Load Departments
    this.deptService.getDepartments().subscribe({
      next: (res) => this.users = res.data,
      error: (err) => console.error("Departments API Error:", err)
    });

    // Load Districts
    this.deptService.getDistricts().subscribe({
      next: (res) => this.districts = res.data,
      error: (err) => console.error("District API Error:", err)
    });

    // Load Zones
    this.deptService.getZones().subscribe({
      next: (res) => this.zones = res.data,
      error: (err) => console.error("Zone API Error:", err)
    });

  }

  // Handle File Upload
  onFileSelected(event: any) {
    this.pdfFile = event.target.files[0];
  }

  // Submit Final Form
  submitForm() {

    if (!this.selectedName || !this.selectedDistrict || !this.selectedZone) {
      alert("Please select Department, District and Zone.");
      return;
    }

    const formData = new FormData();

    formData.append("departmentId", this.selectedName);
    formData.append("districtId", this.selectedDistrict);
    formData.append("zoneId", this.selectedZone);
    formData.append("societyName", this.societyName);
    formData.append("petitionerName", this.petitionerName);
    formData.append("phoneNumber", this.phoneNumber);
    formData.append("address", this.address);
    formData.append("taluk", this.taluk);
    formData.append("pincode", this.pincode);

    if (this.pdfFile) {
      formData.append("pdfFile", this.pdfFile);  // MUST MATCH multer
    }

    this.deptService.submitForm(formData).subscribe({
      next: (res) => {
        console.log("Form Submitted:", res);
        alert("Form submitted successfully!");
      },
      error: (err) => {
        console.error("Form Submit Error:", err);
        alert("Something went wrong.");
      }
    });
  }

}
